<script>

import {store, flagGenerator} from "../store.js";

export default {

    props: {
        series: Object
    },

    data() {
        return {
            store,
        }
    },

    methods: {
        flagGenerator
    },

}

</script>

<template>

    <div id="info-container" class="card h-100 rounded-0">
        <div id="title-container" class="card-text">{{ series.name }}</div>
        <div id="original-title-container" class="card-text">{{ series.original_name }}</div>
        <div id="language-container" class="card-text">
            <img :src="`https://flagsapi.com/${flagGenerator(series.origin_country)}/flat/64.png`" :alt="`${series.origin_country}`">
        </div>  
        <div id="vote-container" class="card-text">{{ series.vote_average }}</div>
    </div>

</template>

<style lang="scss" scoped>

</style>