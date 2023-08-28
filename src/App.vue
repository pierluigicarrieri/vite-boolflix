<script>

import {store} from "./store.js";

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

  mounted() {


  }

}

</script>

<template>

<div class="container">

  <form class="d-flex" role="search">

    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="store.searchText">
    <button class="btn btn-outline-success">Search</button>

  </form>

  <ul>
    <li>
        <div id="info-container">
          <div id="title-container">aaa</div>
          <div id="original-title-container">bbb</div>
          <div id="language-container">ccc</div>
          <div id="vote-container">ddd</div>
        </div>
    </li>
  </ul>


</div>

</template>

<style lang="scss">

</style>
