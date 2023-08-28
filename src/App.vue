<script>

import {store, fetchData} from "./store.js";

export default {

  components:{

  },

  data() {
    return {
      store,
    }
  },

  methods: {

    fetchData

  },

  mounted () {

  }

}

</script>

<template>

<div class="container">

  <div class="input-group d-flex">

    <input class="form-control me-2" type="text" placeholder="Search" aria-label="Search"
    v-model="store.searchText" @keyup.enter="fetchData">
    <button class="btn btn-outline-success" @click="fetchData">Search</button>

  </div>

  <ul v-for="movie in store.dataArray">
    <li>
        <div id="info-container">
          <div id="title-container">{{ movie.title }}</div>
          <div id="original-title-container">{{ movie.original_title }}</div>
          <div id="language-container">{{ movie.original_language }}</div>
          <div id="vote-container">{{ movie.vote_average }}</div>
        </div>
    </li>
  </ul>

</div>

</template>

<style lang="scss">

</style>
