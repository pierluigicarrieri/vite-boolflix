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
        <img class="poster" :src="`${fetchImages(series.poster_path)}`" alt="">
        <div class="info-container">
            <div class="title-container card-text">{{ series.name }}</div>
            <div class="original-title-container card-text">{{ series.original_name }}</div>
            <div class="language-container card-text">
                <img :src="`https://flagsapi.com/${flagGenerator(series.origin_country)}/flat/64.png`" :alt="`${series.origin_country}`">
            </div>  
            <div class="vote-container card-text">
                <StarRating 
                star-size="15" read-only="true" :rating="`${starsSetter(parseInt(series.vote_average))}`" 
                ></StarRating>
            </div>
            <div class="overview-container">{{ series.overview }}</div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>

<!-- https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400 -->

<!-- https://github.com/craigh411/vue-star-rating -->