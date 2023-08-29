<script>

import {store, fetchData, clearData, flagGenerator} from "./store.js";
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

    fetchData,
    clearData,
    flagGenerator,

  },

  mounted() {
  },

}

</script>

<template>

  <TheHeader></TheHeader>

  <ul v-for="movie in store.movieDataArray">
    <li>
        <div id="info-container">
          <div id="title-container">{{ movie.title }}</div>
          <div id="original-title-container">{{ movie.original_title }}</div>
          <div id="language-container">
            <img :src="`https://flagsapi.com/${flagGenerator(movie.original_language)}/flat/64.png`" :alt="`${movie.original_language}`">
          </div>  
          <div id="vote-container">{{ movie.vote_average }}</div>
        </div>
    </li>
  </ul>

  <ul v-for="TVSeries in store.TVDataArray">
    <li>
        <div id="info-container">
          <div id="title-container">{{ TVSeries.name }}</div>
          <div id="original-title-container">{{ TVSeries.original_name }}</div>
          <div id="language-container">
            <img :src="`https://flagsapi.com/${flagGenerator(TVSeries.origin_country)}/flat/64.png`" :alt="`${TVSeries.origin_country}`">
          </div>  
          <div id="vote-container">{{ TVSeries.vote_average }}</div>
        </div>
    </li>
  </ul>

</template>

<style lang="scss">

</style>
