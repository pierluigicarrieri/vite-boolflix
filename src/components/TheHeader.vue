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

    <header class="py-4 bg-dark">
        <div class="container d-flex justify-content-between align-items-center">
            <h1 class="text-danger">Boolflix</h1>
            <div class="input-group d-flex w-50">
                <input class="form-control me-2" type="text" placeholder="Search" aria-label="Search"
                v-model="store.searchText" @keyup.enter="fetchData">
                <button class="btn btn-outline-danger" @click="fetchData">Search</button>
                <button class="btn btn-outline-light" @click="clearData">Clear</button>
            </div>
        </div>
    </header>

</template>

<style lang="scss" scoped>

header {

    height: 15vh;

    h1 {
        font-size: 5rem;
    }

}



</style>