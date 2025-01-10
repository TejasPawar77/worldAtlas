import axios from "axios";

const api = axios.create({  
});

const baseURL= "https://restcountries.com/v2/regionalbloc/eu";

export const getCountryData = () => {
    return api.get(baseURL);
};