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
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>