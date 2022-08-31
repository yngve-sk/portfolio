<template>
  <project-component v-bind="data">
    <div>
      <p>
        The following features are provided:
        <ul>
          <li>Distribute repository among students</li>
          <li>Divide students among teaching assistants</li>
          <li>Automatically evaluate and accordingly comment student code per-commit</li>
          <li>Automatically fetch and consolidate student grading results</li>
        </ul>
      </p>
      <p>
        Technologies used:
        <ul>
          <li>Python</li>
          <li>Git (gitlab)</li>
          <li>Travis CI (.yml files & pipelines)</li>
        </ul>
      </p>
      <p>
        Diagram of how the editor works (C4, generated with PlantUML)
      </p>
      <div 
        style="
              display: inline-flex;
              position: relative;
              flex-wrap: wrap;
            "
      >
        <div class="array-imgs">
          <a 
            href="/assets/images/gitgrade.png"
          >
            <img 
              class="array-img"
              src="/assets/images/gitgrade.png"
            >
          </a>
        </div>
      </div>
      </p>
    </div>
  </project-component>
</template>

<script>
import ProjectComponent from '../components/ProjectComponent.vue';
import Youtube from '../components/Youtube.vue';
export default {
  components: { ProjectComponent, Youtube },
  data() {
    return {
      data: {
        title: 'Git-based course management',
        image: require('../../assets/images/gitlab-ci-pipelines.png'),
        descriptionHTML: `This system was developed over the course of two semesters of teaching INF100. The core idea was to use existing infrastructure and systems to automate as many of the behind-the-scenes teaching tasks as possible. Leveraging the existing git server, we were able to solve the problems with a very small amount of code. We created a few python scripts that we would run in order to create student repositories for specific tasks, provide automatic grading, fetch and consolidate manual grading feedback to determine who are eligible for exams. Some of these tasks were simply run as cron-jobs. In the second semester, we adopted a more distributed architecture, using git pipelines to automatically perform tasks on every commit by students. This also lead to some performance/uptime guarantee issues, so we had to use multiple runners via Kubernetes, all with the appropriate docker images cached.
        `,
        imageArray: [
          'VisceptionExSuicideBarsGlass.png',
          'bookshelf-ex0.png',
          'titanic-1.png',
          'titanic-2.png',
          'titanic-4.png',
          'titanic-ex3-v4.png',
          'rb-america-ex0.png',
          'suicide-ex0-larger-txt-bold.png',
          'mushrooms-ex1-shadowed.png',
          'mushrooms-ex2.png',
          'mushrooms200-ex1.png',
          'mushrooms200-ex3.png',
          'nightingale.png',
          'twts-ex0.png',
          'TWTSBubbles.png',
          'TWTSColumns.png',
          'TWTSDetailed.png',
          'TWTSOriginal.png',
          'cars-ex0.png',
          'cars-ex4.png',
          'cars-ex5.png',
        ].map((v) => require(`../../assets/images/vsc_${v}`))
      }
    };
  }
};
</script>

<style scoped>
  .array-imgs {
    margin: 12px;
    border-radius: 2px;
    width: 100%;
    overflow: hidden;
    transition: all 250ms ease-out;
    box-shadow: 1px 1px 25px #ffffff47;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
  }

  .array-imgs>a {
    display: block;
  }

  .array-imgs>a>img {
    width: 100%;
  }
</style>
