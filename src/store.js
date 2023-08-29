import {reactive} from "vue";
import axios from "axios";

export const store = reactive({

    searchText : "",
    APIKey : "5ea59b65da75b65f5a104b18d69a4be5",
    dataArray : [],

});

export function fetchData() {

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${store.APIKey}&query=${store.searchText}&language=it`;
    axios.get(url).then((response) => {
        store.dataArray = response.data.results;
        console.log(store.dataArray)
    })

}

export function fetchMovieData() {
}

export function fetchTvSeriesData() {
}

export function clearData() {

    store.searchText = "";
    store.dataArray = [];

}

export function flagGenerator(movieLanguage) {

    if (movieLanguage === "en") {
        movieLanguage = "us";
    } else if (movieLanguage === "ja") {
        movieLanguage = "jp";
    } else if (movieLanguage === "zh") {
        movieLanguage = "cn";
    } else if (movieLanguage === "da") {
        movieLanguage = "dk";
    }
    return movieLanguage.toUpperCase();

}