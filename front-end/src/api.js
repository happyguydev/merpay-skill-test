import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;   // Api url definition

export const ApiService = {
    getCategories() {
        return axios.get(API_URL + '/categories')
            .then((response) => response.data.data);
    },

    getItems() {
        return axios.get(API_URL + '/items')
            .then((response) => response.data.data);
    },

    getItem(id) {
        return axios.get(API_URL + `/items/${id}`)
            .then((response) => response.data);
    }
}
