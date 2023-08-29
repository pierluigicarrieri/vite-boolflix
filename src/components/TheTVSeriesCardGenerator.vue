<script>

import {store, flagGenerator, starsSetter, fetchImages} from "../store.js";
import StarRating from 'vue-star-rating'

export default {

    props: {
        series: {
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
        starsSetter,
        fetchImages
    },

}

</script>

<template>

    <div class="card h-100 rounded-0">
        <!-- <img :src="`https://image.tmdb.org/t/p/w154${series.poster_path}`" alt=""> -->
        <img :src="`${fetchImages(series.poster_path)}`" alt="">
        <div class="info-container">
            <div id="title-container" class="card-text">{{ series.name }}</div>
            <div id="original-title-container" class="card-text">{{ series.original_name }}</div>
            <div id="language-container" class="card-text">
                <img :src="`https://flagsapi.com/${flagGenerator(series.origin_country)}/flat/64.png`" :alt="`${series.origin_country}`">
            </div>  
            <div id="vote-container" class="card-text">
                <StarRating 
                star-size="15" read-only="true" :rating="`${starsSetter(parseInt(series.vote_average))}`" 
                ></StarRating>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>

<!-- https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400 -->

<!-- https://github.com/craigh411/vue-star-rating -->