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
    <zoomable-treemap
      raw-data-url="assets/linecount_data/results_src.json"
      split-path-by="/client/"
    />
    <br/>
    <p>During development, we were running this client with a test server, letting users save designs, and load them on demand:</p>
    <zoomable-treemap
      raw-data-url="assets/linecount_data/results_testserver.json"
      split-path-by="/server/"
    />
    <br/>
    <p>During this project I also worked on (but did not finish) an application server for managing user accounts, aspiring to deploy the Visception editor as an online visualization design tool.</p>
    <zoomable-treemap
      raw-data-url="assets/linecount_data/results_application_server.json"
      split-path-by="/server/"
    />
  </div>
</template>

<script>
import ZoomableTreemap from './ZoomableTreemap.vue';
export default {
  components: { ZoomableTreemap },
  data() {
    return {};
  },
};
</script>

