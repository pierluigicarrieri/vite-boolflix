import {reactive} from "vue";
import axios from "axios";

export const store = reactive({

    searchText : "", // v-model attached to searchbar in header, implements search mechanism
    APIKey : "5ea59b65da75b65f5a104b18d69a4be5", // Authentication key for API, used in "fetchMovieData()", "fetchTvSeriesData()"
    movieDataArray : [], // Stores movie data
    TVDataArray: [], // Stores Tv Series data

});

/**
 * Calls 2 functions: "fetchMovieData()" for movies, "fetchTvSeriesData()" for tv series
 */
export function fetchData() {

    fetchMovieData();
    fetchTvSeriesData();

}

/**
 * Makes axios call to TMDB, gets movies corresponding to "searchText", saves results in "movieDataArray"
 */
export function fetchMovieData() {

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${store.APIKey}&query=${store.searchText}&language=it`;
    axios.get(url).then((response) => {
        store.movieDataArray = response.data.results;
    })

}

/**
 * Makes axios call to TMDB, gets Tv series corresponding to "searchText", saves results in "TVDataArray"
 */
export function fetchTvSeriesData() {

    const url = `https://api.themoviedb.org/3/search/tv?api_key=${store.APIKey}&query=${store.searchText}&language=it`;
    axios.get(url).then((response) => {
        store.TVDataArray = response.data.results;
    })

}

/**
 * Resets values of "searchText", "movieDataArray", "TVDataArray" (clears screen and searchbar content)
 */
export function clearData() {

    store.searchText = "";
    store.movieDataArray = [];
    store.TVDataArray = [];

}

/**
 * Sets correct flag, documentation here https://flagsapi.com/#body
 * @param {string || string[]} movieLanguage 
 * @returns 
 */
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

/**
 * Sets number of stars for rating
 * @param {number} number 
 * @returns {number}
 */
export function starsSetter (number) {

    return Math.ceil(number/2)

}

/**
 * Sets pic in case of missing poster, completes img url with base url string + dimensions, documentation here https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400
 * @param {string} url 
 * @returns {string}
 */
export function fetchImages(url) {

    if (url === null) {
        return "/public/csaff-no-poster.jpg";
    }

    return `https://image.tmdb.org/t/p/w780${url}`;

}