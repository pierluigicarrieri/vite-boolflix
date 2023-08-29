<script>

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

    <div class="container">
        <h2>MOVIES</h2>
        <div class="row row-cols-5 g-4">
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