<script>

import {store, flagGenerator} from "../store.js";

export default {

    props: {
        movie: {
            type: Object,
            required: true,
        }
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
        <div id="title-container" class="card-text">{{ movie.title }}</div>
        <div id="original-title-container" class="card-text">{{ movie.original_title }}</div>
        <div id="language-container" class="card-text">
            <img :src="`https://flagsapi.com/${flagGenerator(movie.original_language)}/flat/64.png`" :alt="`${movie.original_language}`">
        </div>  
        <div id="vote-container" class="card-text">{{ movie.vote_average }}</div>
    </div>

</template>

<style lang="scss" scoped>

</style>