<script>

/* Using "flagGenerator()", "starsSetter()", "fetchImages()" from store.
1 component to manage stars rating (documentation below) */

    import {store, flagGenerator, starsSetter, fetchImages} from "../store.js";
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
            // https://github.com/craigh411/vue-star-rating
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

    <!-- Using "fetchImages()" to get poster, "flagGenerator()" to get language flag.
    Title, original title, original language, vote and overview are (as the data/arguments 
    for the above functions) dynamically generated thanks to "movie" prop (v-for cycle in 
    father component) -->

    <div class="card h-100 rounded-0 bg-dark text-light"">
        <img class="poster" :src="`${fetchImages(movie.poster_path)}`" alt="">
        <div class="info-container p-2">
            <div class="title-container card-text py-1">Titolo: {{ movie.title }}</div>
            <div class="original-title-container card-text py-1">Titolo originale: {{ movie.original_title }}</div>
            <div class="language-container card-text py-1">Lingua: 
                <img :src="`https://flagsapi.com/${flagGenerator(movie.original_language)}/flat/48.png`" :alt="`${movie.original_language}`">
            </div>  
            <div class="vote-container card-text py-1">Voto:
                <StarRating 
                star-size="15" read-only="true" inline="true" :rating="`${starsSetter(parseInt(movie.vote_average))}`" 
                ></StarRating>
            </div>
            <div class="overview-container py-1">Overview: {{ movie.overview }}</div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>
