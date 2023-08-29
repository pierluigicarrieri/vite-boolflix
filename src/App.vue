<script>

import {store, fetchData, clearData, flagGenerator} from "./store.js";

export default {

  components:{
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

<div class="container">

  <div class="input-group d-flex w-50">
    <input class="form-control me-2" type="text" placeholder="Search" aria-label="Search"
    v-model="store.searchText" @keyup.enter="fetchData">
    <button class="btn btn-outline-success" @click="fetchData">Search</button>
    <button class="btn btn-outline-danger" @click="clearData">Clear</button>
  </div>

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

  <!-- <ul v-for="movie in store.movieDataArray">
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
  </ul> -->

</div>

</template>

<style lang="scss">

</style>
