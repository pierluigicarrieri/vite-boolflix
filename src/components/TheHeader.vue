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

    <header class="py-5 bg-dark">
        <div class="container">
            <div class="input-group d-flex w-50">
                <input class="form-control me-2" type="text" placeholder="Search" aria-label="Search"
                v-model="store.searchText" @keyup.enter="fetchData">
                <button class="btn btn-outline-dark" @click="fetchData">Search</button>
                <button class="btn btn-outline-light" @click="clearData">Clear</button>
            </div>
        </div>
    </header>

</template>

<style lang="scss" scoped>

</style>