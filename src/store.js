import {reactive} from "vue";
import axios from "axios";

export const store = reactive ({

    searchText : "",

    APIKey : "5ea59b65da75b65f5a104b18d69a4be5",

    dataArray : [],

});

export function fetchData () {

    const url = `"https://api.themoviedb.org/3/search/movie?api_key=${store.APIKey}&query=ritorno+al+futuro"`;

    console.log(url)

    axios.get(url).then((response) => {

        console.log(response.results)

        store.dataArray = response.results;

        console.log(dataArray);

    })

}