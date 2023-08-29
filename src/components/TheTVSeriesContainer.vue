<script>

import {store, flagGenerator} from "../store.js";

export default {

data() {

    return {

        store,

    }

},

methods: {

    flagGenerator

},

mounted() {
},

}

</script>

<template>

    <div class="container">

        <ul v-for="TVSeries in store.TVDataArray">
            <li>
                <div id="info-container">
                    <div id="title-container">{{ TVSeries.name }}</div>
                    <div id="original-title-container">{{ TVSeries.original_name }}</div>
                    <div id="language-container">
                        <img :src="`https://flagsapi.com/${flagGenerator(TVSeries.origin_country)}/flat/64.png`" :alt="`${TVSeries.origin_country}`">
                    </div>  
                    <div id="vote-container">{{ TVSeries.vote_average }}</div>
                </div>
            </li>
        </ul>

    </div>

</template>

<style lang="scss" scoped>

</style>