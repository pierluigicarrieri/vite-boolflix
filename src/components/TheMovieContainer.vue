<script>

import {store, flagGenerator} from "../store.js";

export default {

data() {

    return {

        store,

    }

},

methods: {

    flagGenerator

},

mounted() {
},

}

</script>

<template>

    <div class="container">

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

    </div>

</template>

<style lang="scss" scoped>

</style>