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


  },

  mounted () {

      fetchData ()

  }

}

</script>

<template>

<div class="container">

  <form class="d-flex" role="search">

    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="store.searchText">
    <button class="btn btn-outline-success">Search</button>

  </form>

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
