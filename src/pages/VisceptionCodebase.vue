<template>
  <div>
   <p>This is the codebase of the entire Visception project visualized. NOTE: It has been refined and re-architectured, but it still contains some old files / notes, and a big part of the code is long lists of JSON declarations. This is a project developed over ~3 years, with a lot of started but unfinished, too ambitious/time consuming features, especially for doing in parallel with a PhD. The biggest part of the logic is within the client: </p>
   <div ref="codebase_client" class="codebase-treemap-container"></div>
   During development, we were running this client with a test server, letting users save designs, and load them on demand:
   <div ref="codebase_testserver" class="codebase-treemap-container"></div>
   I also started (but did not finish) an application server for managing user accounts, aspiring to deploy the Visception editor as an online visualization design tool.
   <div ref="codebase_appserver" class="codebase-treemap-container"></div>
  </div>
</template>

<script>
import d3 from 'd3'

const generateZoomableTreemap = ({
   width,
   height,
   data
}) => {
}

class TreeNode {
   constructor(args) {
      Object.assign(this, args)
      this.children = []
   }

   put(path, detail) {
      if (path.length === 1) {
         // Basecase: we are at the leaf
         const language = path[0]
         this.language = language
         this.type = "file"
         const { code, comment, blank } = detail
         Object.assign(this, { code, comment, blank })
         return
      }

      const k = path.shift()

      if (this.hasChildWithName(k)) this.getChildWithName(k).put(path, detail)
      else this.createChildWithName(k).put(path, detail)
   }

   hasChildWithName(name) { return !!this.getChildWithName(name) }
   getChildWithName(name) { return this.children.find((v) => v.name === name)}
   createChildWithName(name) {
      const child = new TreeNode({ name })
      this.children.push(child)
      return child
   }

   computeTotalsBottomUp() {
      if (this.children.length > 0) {
         // I am a code detail node!
         const { language, code, comment, blank } = this
         return { language, code, comment, blank }
      } else {
         const myStats = this.children.reduce((result, child) => {
            const { language, code, comment, blank } = child.computeTotalsBottomUp()
            result.total.code += code
            result.total.comment += comment
            result.total.blank += blank

            if (!(language in result.byLanguage)) {
               result.byLanguage[language] = { code: 0, comment: 0, blank: 0 }
            }

            result.byLanguage[language].code += code
            result.byLanguage[language].comment += comment
            result.byLanguage[language].blank += blank

            return result
         }
         , {
            total: { code: 0, comment: 0, blank: 0 },
            byLanguage: {}
         })

         Object.assign(this, myStats.total)
         Object.assign(this, myStats.byLanguage)
      }
   }
}

const parseData = async (url) => {
   const fields = [ "language", "comment", "blank", "code" ]
   const result = await fetch(url)
   const json = await result.json()

   const hierarchyJSON = {}
   const put = (path, v, focus=hierarchyJSON) => {
      // if (path.length === 1) {
      //    // focus[path]
      //    return focus[path] = v
      // }
      // const k = path.shift()
      // put(path, v, (k in focus) ? focus[k] : focus[k] = {})
      // root.put
   }

   // Store language->code,comment,blank at end of branches

   const root = new TreeNode()
   Object.entries(json).forEach(([path, info]) => {
      const { language, code, comment, blank } = info
      const splitPath = path.split('/client/')[1].split('/')
      root.put([...splitPath, language], { code, comment, blank })
   })

   root.computeTotalsBottomUp()

   console.log("heheh")

   console.log("HEHE")
}

const showData = async ({ rawData, inContainer }) => {
   const { width, height } = inContainer.getBoundingClientRect()

   const svg = document.createElement('svg')
   inContainer.appendChild(svg)

   const data = await parseData(rawData)

   generateZoomableTreemap({ width, height, data, svg })
}

export default {
  data() {
    return {

    };
  },
  async mounted() {
   await showData({ rawData: 'assets/linecount_data/results_src.json', inContainer: this.$refs.codebase_client })
   await showData({ rawData: 'assets/linecount_data/results_src.json', inContainer: this.$refs.codebase_testserver })
   await showData({ rawData: 'assets/linecount_data/results_src.json', inContainer: this.$refs.codebase_appserver })
  }
};
</script>

<style scoped>
   .codebase-treemap-container {
      width: 100%;
      height: 60vh;
   }
</style>
