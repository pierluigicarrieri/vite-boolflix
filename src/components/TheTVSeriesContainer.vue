<script>

import {store} from "../store.js";
import TheTvSeriesCardGenerator from "./TheTVSeriesCardGenerator.vue"

export default {

    components: {
        TheTvSeriesCardGenerator,
    },

    data() {
        return {
            store,
        }
    }

}

</script>

<template>

    <div class="container">
        <h2>TV SERIES</h2>
        <div class="row row-cols-5 g-4">
            <div class="col" v-for="series in store.TVDataArray">
                <TheTvSeriesCardGenerator :series="series"></TheTvSeriesCardGenerator>
                <!-- <div id="info-container" class="card h-100 rounded-0">
                    <div id="title-container" class="card-text">{{ TVSeries.name }}</div>
                    <div id="original-title-container" class="card-text">{{ TVSeries.original_name }}</div>
                    <div id="language-container" class="card-text">
                        <img :src="`https://flagsapi.com/${flagGenerator(TVSeries.origin_country)}/flat/64.png`" :alt="`${TVSeries.origin_country}`">
                    </div>  
                    <div id="vote-container" class="card-text">{{ TVSeries.vote_average }}</div>
                </div> -->
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>