<script>

import {store, fetchData, clearData} from "../store.js";

export default {

    data() {
        return {
            store,
        }
    },

    methods: {
        fetchData,
        clearData,
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
</div>

</template>

<style lang="scss" scoped>

</style>