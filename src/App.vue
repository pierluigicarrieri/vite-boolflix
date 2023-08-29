<script>

import {store, flagGenerator} from "./store.js";
import TheHeader from "./components/TheHeader.vue";
import TheMovieContainer from "./components/TheMovieContainer.vue";
import TheTVSeriesContainer from "./components/TheTVSeriesContainer.vue";
import TheFooter from "./components/TheFooter.vue";

export default {

  components:{

    TheHeader,
    TheMovieContainer,
    TheTVSeriesContainer,
    TheFooter,

  },

  data() {

    return {

      store,

    }

  },

  methods: {

    flagGenerator,

  },

  mounted() {
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

</style>
