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
        <h2 class="py-5 text-light">TV SERIES</h2>
        <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-4">
            <div class="col" v-for="series in store.TVDataArray">
                <TheTvSeriesCardGenerator 
                :series="series"
                ></TheTvSeriesCardGenerator>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>