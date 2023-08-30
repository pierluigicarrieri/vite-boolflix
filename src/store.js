import {reactive} from "vue";
import axios from "axios";

export const store = reactive({

    searchText : "",
    APIKey : "5ea59b65da75b65f5a104b18d69a4be5",
    movieDataArray : [],
    TVDataArray: [],

});

export function fetchData() {

    fetchMovieData();
    fetchTvSeriesData();

}

export function fetchMovieData() {

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${store.APIKey}&query=${store.searchText}&language=it`;
    axios.get(url).then((response) => {
        store.movieDataArray = response.data.results;
        console.log(store.movieDataArray);
    })

}

export function fetchTvSeriesData() {

    const url = `https://api.themoviedb.org/3/search/tv?api_key=${store.APIKey}&query=${store.searchText}&language=it`;
    axios.get(url).then((response) => {
        store.TVDataArray = response.data.results;
        console.log(store.TVDataArray);
    })

}

export function clearData() {

    store.searchText = "";
    store.movieDataArray = [];
    store.TVDataArray = [];

}

export function flagGenerator(movieLanguage) {

    if (Array.isArray(movieLanguage)) {
        movieLanguage = movieLanguage[0];
    }

    if (movieLanguage === "en") {
        movieLanguage = "us";
    } else if (movieLanguage === "ja") {
        movieLanguage = "jp";
    } else if (movieLanguage === "zh") {
        movieLanguage = "cn";
    } else if (movieLanguage === "da") {
        movieLanguage = "dk";
    } else if (movieLanguage === "ar") {
        movieLanguage = "sa";
    } else if (movieLanguage === "hi" || movieLanguage === "te" || movieLanguage === "ta") {
        movieLanguage = "in";
    }
    return movieLanguage.toUpperCase();

}

export function starsSetter (number) {

    return Math.ceil(number/2)

}

export function fetchImages(url) {

    if (url === null) {
        return "/public/csaff-no-poster.jpg";
    }

    return `https://image.tmdb.org/t/p/w780${url}`;

    // https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400

}