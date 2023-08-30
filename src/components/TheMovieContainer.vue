<script>

// Using "movieDataArray" form store, 1 component to generate cards dynamically

    import {store} from "../store.js";
    import TheMovieCardGenerator from "./TheMovieCardGenerator.vue";

    export default {

        components: {
            TheMovieCardGenerator,
        },

        data() {
            return {
                store,
            }
        },

    }

</script>

<template>

    <!-- Secondary title for movies, v-for cycle on "movieDataArray", 
        "movie" passed as prop to component -->

    <div class="container">
        <h2 class="py-5 text-light">MOVIES</h2>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-4">
            <div class="col" v-for="movie in store.movieDataArray">
                <TheMovieCardGenerator
                :movie="movie"
                ></TheMovieCardGenerator>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>