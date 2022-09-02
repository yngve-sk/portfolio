<template>
   <div class="treemap-wrapper">
      <p>{{ title }}</p>
      <div ref="codebase_container" class="codebase-treemap-container"></div>
   </div>
 </template>

 <script>
 const d3 = require('d3')

  /**
    * uid logic from: https://github.com/observablehq/stdlib/blob/main/src/dom/uid.mjs
    * Must be global or there will be id conflicts across different instances of treemaps
    **/
   let DOM
   if ('__domCountZoomableTreemap__' in window) {
      DOM = window.__domCountZoomableTreemapDOM__;
   } else
      window.__domCountZoomableTreemap__ = DOM = { count: 0 };

   const Id = function(id) {
     this.id = id;
     this.href = new URL(`#${id}`, location) + "";
   }

   Id.prototype.toString = function() {
     return "url(" + this.href + ")";
   };

   DOM.uid = function(name) {
     return new Id("O-" + (name == null ? "" : name + "-") + ++DOM.count);
   }

 const generateZoomableTreemap = ({ width, height, data, container }) => {
   container = d3.select(container)

   const x = d3.scaleLinear().rangeRound([0, width]);
   const y = d3.scaleLinear().rangeRound([0, height]);

   const topBarHeight = 30

   const svg = container.append("svg")
       .attr("viewBox", [0, -topBarHeight, width, height + topBarHeight])
       .attr('class', 'treemap-svg')
       .style('width', '100%')
       .style('height', '100%')
       .style("font", "10px sans-serif");

   const tile = (node, x0, y0, x1, y1) => {
     d3.treemapSquarify(node, 0, 0, width, height);
     for (const child of node.children) {
       child.x0 = x0 + child.x0 / width * (x1 - x0);
       child.x1 = x0 + child.x1 / width * (x1 - x0);
       child.y0 = y0 + child.y0 / height * (y1 - y0);
       child.y1 = y0 + child.y1 / height * (y1 - y0);
     }
   }

   /**
    * Generates a layout given a root TreeNode
    */
   const genTreemapLayout = (fromRootNode) => {
     const hierarchy = d3.hierarchy(fromRootNode)
                         .sum(d => {
                           return d.children.length > 0 ? 0 : d.code
                         })
                         .sort((a, b) => {
                           return b.code - a.code
                         })

     return d3.treemap()
           .size([1, 1])
           .tile(tile)
           (hierarchy)
   }

   const name = d => d.ancestors().reverse().map(d => d.data.name).join("/")
   const format = d3.format(",d")

   const render = (group, root) => {
     const node = group
       .selectAll("g")
       .data(root.children.concat(root))
       .join("g");

     node.filter(d => d === root ? d.parent : d.children)
         .attr("cursor", "pointer")
         .on("click", (event, d) => d === root ? zoomout(root) : zoomin(d));

     node.append("title")
         .text(d => `${name(d)}\n${format(d.value)}`);

     node.append("rect")
         .attr("id", d => (d.leafUid = DOM.uid("leaf")).id)
         .classed("root", d => d === root)
         .attr("class", "svg-rect")
         .attr("fill", d => d === root ? "#cdf3ff" : d.children ? "#ccc" : "#ddd")
         .attr("stroke", "none");

     node.append("clipPath")
         .attr("id", d => (d.clipUid = DOM.uid("clip")).id)
       .append("use")
         .attr("xlink:href", d => d.leafUid.href);

     node.append("text")
         .attr("clip-path", d => d.clipUid)
         .attr("font-weight", d => d === root ? "bold" : null)
         .classed("treemap-root", d => d === root)

       .selectAll("tspan")
       .data(d => {
          if (d === root)
             return [
                { type: 'svg-header', text: `${d.data.fullPath}/` },
                { type: 'svg-subtitle number0', text: d.data.codeDetail.join(', ') }
             ]

          const codeDetailMapped = d.data.codeDetail.map((text, i) => ({ text, type: `svg-subtitle number${i + 1}`}))

          if (codeDetailMapped.length > 1)
             return [
                { type: 'svg-header', text: d.data.name },
                { type: 'svg-subtitle number0', text: `${d.data.code} line of codes in total`}
             ]
          else
             return [
                { type: 'svg-header', text: d.data.name },
                ...codeDetailMapped
             ]

       //   return (d === root ? `${name(d)}/` : d.data.name).split(/(?=[A-Z][^A-Z])/g).concat(format(d.data.code))
         }
       )
       .join("tspan")
         .attr("class", (d, i) => `${d.type}`)
         .attr("x", 3)
         .attr("y", (d, i, nodes) => `${(i === nodes.length - 1) * 0.3 + 1.1 + i * 0.9}em`)
       //   .attr("fill-opacity", (d, i, nodes) => i === nodes.length - 1 ? 0.7 : null)
       //   .attr("font-weight", (d, i, nodes) => i === nodes.length - 1 ? "normal" : null)
         .text((d, i) => d.text || d);

     group.call(position, root);
   }

   const position = (group, root) => {
     const groups = group.selectAll("g")
         .attr("transform", d => d === root ? `translate(0,-30)` : `translate(${x(d.x0)},${y(d.y0)})`)

     const nonTransitionGroup = d3.select(group.node())
     const data = d3.select(group.node()).selectAll('g').data()
    //  const extent = d3.extent(data.map((d) => d.data.levelsBeneath))
     const extent = [0, root.data.root.levelsBeneath]
     const opacityScale = d3.scaleLinear().domain(extent).range([1, 0.5])

     const rects = groups.select("rect")
         .attr("width", d => d === root ? width : x(d.x1) - x(d.x0))
         .attr("height", d => d === root ? topBarHeight : y(d.y1) - y(d.y0))
       //   .attr("fill-opacity", d => d === root ? 1 : opacityScale(d.data.levelsBeneath))
         .attr("fill-opacity", d => d === root ? 1 : d.data.levelsBeneath  === 0 ? 1 : opacityScale(d.data.levelsBeneath))

     nonTransitionGroup.selectAll("g").select("rect")
         .classed("treemap-root", d => d === root)

     const texts = groups.select('text')
   }

   let group = svg.append("g")
       .call(render, genTreemapLayout(data));

   // When zooming in, draw the new nodes on top, and fade them in.
   const zoomin = (d) => {
     const group0 = group.attr("pointer-events", "none");
     const group1 = group = svg.append("g").call(render, d);

     x.domain([d.x0, d.x1]);
     y.domain([d.y0, d.y1]);

     svg.transition()
         .duration(750)
         .call(t => group0.transition(t).remove()
           .call(position, d.parent))
         .call(t => group1.transition(t)
           .attrTween("opacity", () => d3.interpolate(0, 1))
           .call(position, d));
   }

   // When zooming out, draw the old nodes on top, and fade them out.
   const zoomout = (d) => {
     const group0 = group.attr("pointer-events", "none");
     const group1 = group = svg.insert("g", "*").call(render, d.parent);

     x.domain([d.parent.x0, d.parent.x1]);
     y.domain([d.parent.y0, d.parent.y1]);

     svg.transition()
         .duration(750)
         .call(t => group0.transition(t).remove()
           .attrTween("opacity", () => d3.interpolate(1, 0))
           .call(position, d))
         .call(t => group1.transition(t)
           .call(position, d.parent));
   }
   /**
    * Treemap code is adapted from https://observablehq.com/@d3/zoomable-treemap
    */
 };

 class TreeNode {
   constructor(args) {
     Object.assign(this, args);
     this.children = [];
   }

   put(path, detail) {
     if (path.length === 1) {
       // Basecase: we are at the leaf
       const language = path[0];
       this.language = language;
       const { code, comment, blank } = detail;
       Object.assign(this, { code, comment, blank });
       return;
     }

     const k = path.shift();

     if (this.hasChildWithName(k)) this.getChildWithName(k).put(path, detail);
     else this.createChildWithName(k).put(path, detail);
   }

   hasChildWithName(name) {
     return !!this.getChildWithName(name);
   }
   getChildWithName(name) {
     return this.children.find((v) => v.name === name);
   }
   createChildWithName(name) {
     const child = new TreeNode({ name, parent: this });
     this.children.push(child);
     return child;
   }

   ancestors(includeSelf = true) {
     if (!this.parent) return []
     return includeSelf ? [this.name, ...this.parent.ancestors(true)] : this.parent.ancestors(true)
   }

   allChildren() {
     if (this.length === 0) return [ this ]
     return [...this.children.map((child) => child.allChildren)]
   }

   get fullPath() {
    if (!this.parent) return ''
    return `${this.parent.fullPath}/${this.name}`
   }

   get depth() {
    if (!this.parent) return 0
    return this.parent.depth + 1
   }

   get levelsBeneath() {
    if (this.children.length === 0) return 0
    return this.children.map((child) => child.levelsBeneath).reduce((p, c) => Math.max(p, c), 0) + 1
   }

   get root () {
    if (!this.parent) return this
    return this.parent.root
   }

   get isLeaf() {
     return this.children.length === 0;
   }

   get isRoot() {
    return !this.parent
   }

   get type() {
     return this.isLeaf ? 'file' : 'folder'
   }

   get codeTypes() {
     return !this.byLanguage ? [] : Object.keys(this.byLanguage)
   }

   get codeDetail () {
    if (this.isLeaf) return [`${this.code} lines of ${this.language}`]
    if (!this.byLanguage) return [ this.code ]

    const entries = Object.entries(this.byLanguage)
    entries.sort((a, b) => a[1] - b[1])
    return entries.map(([language, lines]) => `${lines.code} lines of ${language}`)
   }

   computeTotalsBottomUp() {
     if (this.children.length > 0) {
       const myStats = {
          total: { code: 0, comment: 0, blank: 0 },
          byLanguage: { }
       }

       this.children.forEach(
         (child) => {
           child.computeTotalsBottomUp();
           const { code, comment, blank } = child;
           myStats.total.code += code;
           myStats.total.comment += comment;
           myStats.total.blank += blank;

           if (child.isLeaf) {
             const { language } = child;
             if (!(language in myStats.byLanguage)) {
               myStats.byLanguage[language] = { code: 0, comment: 0, blank: 0 };
             }

             myStats.byLanguage[language].code += code;
             myStats.byLanguage[language].comment += comment;
             myStats.byLanguage[language].blank += blank;
           } else {
             Object.entries(child.byLanguage)
                   .forEach(([lang, counts]) => {
                      if (lang in myStats.byLanguage) {
                         Object.keys(myStats.byLanguage[lang]).forEach(
                            (k) => (myStats.byLanguage[lang][k] += counts[k])
                         );
                      } else myStats.byLanguage[lang] = { ...counts };
                      });
                   }
         },
         {
           total: { code: 0, comment: 0, blank: 0 },
           byLanguage: {},
         }
       );

       const sumByLanguage = Object.values(myStats.byLanguage).reduce((p, c) => p + c.code, 0)
       console.log(`name=${this.name}, sumByLanguage=${sumByLanguage}, total code=${myStats.total.code}`)
       if (sumByLanguage !== myStats.total.code) {
          console.log("STOPPP")
       }

       Object.assign(this, myStats.total);
       Object.values(myStats.byLanguage).forEach((info) => Object.freeze(info))
       this.byLanguage = Object.freeze(myStats.byLanguage);
     }
   }
 }

 const parseData = async (url, splitPathBy) => {
   const result = await fetch(url);
   const json = await result.json();

   const root = new TreeNode();
   Object.entries(json).forEach(([path, info]) => {
     const { language, code, comment, blank } = info;
     const splitPath = path.split(splitPathBy)[1].split("/");
     root.put([...splitPath, language], { code, comment, blank });
   });

   root.computeTotalsBottomUp();
   return root.children[0]
 };

 const showData = async ({ rawData, inContainer, splitPathBy }) => {
   const { width, height } = inContainer.getBoundingClientRect();

   const data = await parseData(rawData, splitPathBy);

   generateZoomableTreemap({ width, height, data, container: inContainer });
 };

 export default {
   props: {
      rawDataUrl: { type: String, required: true },
      splitPathBy: { type: String, required: true },
      title: { type: String, required: false },
   },
   data() {
     return {};
   },
   async mounted() {
     await showData({
       rawData: this.rawDataUrl,
       inContainer: this.$refs.codebase_container,
       splitPathBy: this.splitPathBy
     });
   },
 };
 </script>

 <style>
 text:not(.treemap-root)>.svg-header { fill: white; font-weight: 600; }
 text:not(.treemap-root) { fill: #ffffff9e }

 text.treemap-root {
     fill: #292929;
 }

 text.treemap-root>.svg-subtitle {
    fill: black;
    font-size: 12px;
 }

 .svg-rect.treemap-root {
     fill: white;
 }

 .svg-subtitle {}
 .svg-subtitle.number0{}
 .svg-subtitle.number1{}
 .svg-subtitle.number2{}
 .svg-subtitle.number3{}
 .svg-subtitle.number4{}
 .svg-subtitle.number5{}

 .svg-rect {
    fill: #494992;
    stroke: white;
    stroke-width: 0.3px;
 }

 .svg-rect:hover {
   fill: burlywood;
 }

 </style>

 <style scoped>

 .treemap-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: #252525;
    margin: 50px;
    box-shadow: 1px 1px 15px black;
    flex-flow: column;
 }
 .codebase-treemap-container {
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
 }
 </style>
