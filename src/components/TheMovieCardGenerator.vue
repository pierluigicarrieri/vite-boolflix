<script>

import {store, flagGenerator, starsSetter} from "../store.js";
import StarRating from 'vue-star-rating'

export default {

    props: {
        movie: {
            type: Object,
            required: true,
        }
    },

    components: {
        StarRating
    },

    data() {
        return {
            store,
        }
    },

    methods: {
        flagGenerator,
        starsSetter
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
        <div id="vote-container" class="card-text">
            <StarRating 
            star-size="15" read-only="true" :rating="`${starsSetter(parseInt(movie.vote_average))}`" 
            ></StarRating>
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>

<!-- https://github.com/craigh411/vue-star-rating -->