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

    <div class="container pb-5">
        <h2 class="py-5 text-light">TV SERIES</h2>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-4">
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