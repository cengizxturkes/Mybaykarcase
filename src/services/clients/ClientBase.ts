import axios from "axios";

export const ClientBase = {
    axiosBase: axios.create({
        baseURL: "http://195.85.201.149:1998",
        headers: {
            "Content-type": "application/json"
        }
    }),
    countryBase: axios.create({
        baseURL: "https://countriesnow.space/api/v0.1/countries/info?returns=cities"
    })
}