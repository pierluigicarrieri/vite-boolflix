<script>

import TheHeader from "./components/TheHeader.vue";
import TheMovieContainer from "./components/TheMovieContainer.vue";
import TheTVSeriesContainer from "./components/TheTVSeriesContainer.vue";
import TheFooter from "./components/TheFooter.vue";

export default {

  components: {

    TheHeader,
    TheMovieContainer,
    TheTVSeriesContainer,
    TheFooter,

  },

}

</script>

<template>

  <TheHeader></TheHeader>

  <main>
  <TheMovieContainer></TheMovieContainer>
  <TheTVSeriesContainer></TheTVSeriesContainer>
  </main>
  
  <TheFooter></TheFooter>



</template>

<style lang="scss">

.card {
    position: relative;
}
.poster {
    height: 100%;
}
.card:hover > .poster {
    opacity: 0;
}
.card:hover > .info-container {
    opacity: 1;
}

.info-container {
    opacity: 0;
    position: absolute;
    inset: 0px;
    overflow-y: auto;
}

</style>
