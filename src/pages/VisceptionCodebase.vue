<template>
  <div>
    <p>
      This is the codebase of the entire Visception project visualized. NOTE: It
      has been refined and re-architectured, but it still contains some old
      files / notes, and a big part of the code is long lists of JSON
      declarations. This is a project developed over ~3 years, with a lot of
      started but unfinished, too ambitious/time consuming features, especially
      for doing in parallel with a PhD. The biggest part of the logic is within
      the client:
    </p>
    <div ref="codebase_client" class="codebase-treemap-container"></div>
    During development, we were running this client with a test server, letting
    users save designs, and load them on demand:
    <div ref="codebase_testserver" class="codebase-treemap-container"></div>
    I also started (but did not finish) an application server for managing user
    accounts, aspiring to deploy the Visception editor as an online
    visualization design tool.
    <div ref="codebase_appserver" class="codebase-treemap-container"></div>
  </div>
</template>

<script>
const d3 = require('d3')

const generateZoomableTreemap = ({ width, height, data, container }) => {
  container = d3.select(container)
  
  const x = d3.scaleLinear().rangeRound([0, width]);
  const y = d3.scaleLinear().rangeRound([0, height]);

  const svg = container.append("svg")
      .attr("viewBox", [0.5, -30.5, width, height + 30])
      .attr('class', 'treemap-svg')
      .style("font", "10px sans-serif");

  const tile = (node, x0, y0, x1, y1) => {
    d3.treemapBinary(node, 0, 0, width, height);
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
                          return d.code
                        })
                        .sort((a, b) => {
                          return b.code - a.code
                        })

    return d3.treemap().tile(tile)(hierarchy)
  }

  const name = d => d.ancestors().reverse().map(d => d.data.name).join("/")
  const format = d3.format(",d")

  /**
   * uid logic from: https://github.com/observablehq/stdlib/blob/main/src/dom/uid.mjs
   */
  const DOM = {}
  DOM.count = 0;

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
        .attr("fill", d => d === root ? "#fff" : d.children ? "#ccc" : "#ddd")
        .attr("stroke", "#fff");

    node.append("clipPath")
        .attr("id", d => (d.clipUid = DOM.uid("clip")).id)
      .append("use")
        .attr("xlink:href", d => d.leafUid.href);

    node.append("text")
        .attr("clip-path", d => d.clipUid)
        .attr("font-weight", d => d === root ? "bold" : null)
      .selectAll("tspan")
      .data(d => (d === root ? `${name(d)}/` : d.data.name).split(/(?=[A-Z][^A-Z])/g).concat(format(d.data.code)))
      .join("tspan")
        .attr("x", 3)
        .attr("y", (d, i, nodes) => `${(i === nodes.length - 1) * 0.3 + 1.1 + i * 0.9}em`)
        .attr("fill-opacity", (d, i, nodes) => i === nodes.length - 1 ? 0.7 : null)
        .attr("font-weight", (d, i, nodes) => i === nodes.length - 1 ? "normal" : null)
        .text(d => d);

    group.call(position, root);
  }

  const position = (group, root) => {
    group.selectAll("g")
        .attr("transform", d => d === root ? `translate(0,-30)` : `translate(${x(d.x0)},${y(d.y0)})`)
      .select("rect")
        .attr("width", d => d === root ? width : x(d.x1) - x(d.x0))
        .attr("height", d => d === root ? 30 : y(d.y1) - y(d.y0));
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

  // Variables keepin track of current & previous path
  // 
  const state = {
    history: [], // nodes of focus
    currentHistoryIndex: 0, // current index of focus in history
    layout: null,
  }

  /**
   * Treemap code is adapted from https://observablehq.com/@d3/zoomable-treemap
   */




  // render()
};

class TreeNode {
  constructor(args) {
    Object.assign(this, args);
    this.children = [];
  }
  
  eachBefore() {}

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

  get isLeaf() {
    return this.children.length === 0;
  }

  get type() { 
    return this.isLeaf ? 'file' : 'folder' 
  }

  get codeTypes() {
    return !this.byLanguage ? [] : Object.keys(this.byLanguage)
  }

  computeTotalsBottomUp() {
    if (this.children.length > 0) {
      const myStats = this.children.reduce(
        (result, child) => {
          child.computeTotalsBottomUp();
          const { code, comment, blank } = child;
          result.total.code += code;
          result.total.comment += comment;
          result.total.blank += blank;

          if (child.isLeaf) {
            const { language } = child;
            if (!(language in result.byLanguage)) {
              result.byLanguage[language] = { code: 0, comment: 0, blank: 0 };
            }

            result.byLanguage[language].code += code;
            result.byLanguage[language].comment += comment;
            result.byLanguage[language].blank += blank;
          } else {
            Object.entries(child.byLanguage).forEach(([lang, counts]) => {
              if (lang in result.byLanguage) {
                Object.keys(result.byLanguage[lang]).forEach(
                  (k) => (result.byLanguage[lang][k] += counts[k])
                );
              } else result.byLanguage[lang] = counts;
            });
          }
          return result;
        },
        {
          total: { code: 0, comment: 0, blank: 0 },
          byLanguage: {},
        }
      );

      Object.assign(this, myStats.total);
      this.byLanguage = myStats.byLanguage;
    }
  }
}

const parseData = async (url) => {
  const result = await fetch(url);
  const json = await result.json();

  const root = new TreeNode();
  Object.entries(json).forEach(([path, info]) => {
    const { language, code, comment, blank } = info;
    const splitPath = path.split("/client/")[1].split("/");
    root.put([...splitPath, language], { code, comment, blank });
  });

  root.computeTotalsBottomUp();
  return root.children[0]
};

const showData = async ({ rawData, inContainer }) => {
  const { width, height } = inContainer.getBoundingClientRect();

  const data = await parseData(rawData);

  generateZoomableTreemap({ width, height, data, container: inContainer });
};

export default {
  data() {
    return {};
  },
  async mounted() {
    await showData({
      rawData: "assets/linecount_data/results_src.json",
      inContainer: this.$refs.codebase_client,
    });
    await showData({
      rawData: "assets/linecount_data/results_src.json",
      inContainer: this.$refs.codebase_testserver,
    });
    await showData({
      rawData: "assets/linecount_data/results_src.json",
      inContainer: this.$refs.codebase_appserver,
    });
  },
};
</script>

<style scoped>
.codebase-treemap-container {
  width: 100%;
  height: 60vh;
}
</style>
