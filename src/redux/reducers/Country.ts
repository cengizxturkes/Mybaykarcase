import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CountryData {
    countryList: any[];
    cityList: any[];
    selectedCountry: string;
    selectedCity: string;
    loading: boolean;
}

const initialState: CountryData = {
    loading: false,
    countryList: [],
    cityList: [],
    selectedCountry: "",
    selectedCity: "",
};

export const countrySlice = createSlice({
    name: "countryState",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setCountryList: (state, action: PayloadAction<any>) => {
            state.countryList = action.payload;
        },
        appendCountryList: (state, action: PayloadAction<any>) => {
            state.countryList = [...state.countryList, ...action.payload];
        },
        setCityList: (state, action: PayloadAction<any>) => {
            state.cityList = action.payload;
        },
        appendCityList: (state, action: PayloadAction<any>) => {
            state.cityList = [...state.cityList, ...action.payload];
        },
        setSelectedCountry: (state, action: PayloadAction<string>) => {
            console.log("action.payload: ", action.payload)
            state.selectedCountry = action.payload;
        },
        setSelectedCity: (state, action: PayloadAction<string>) => {
            state.selectedCity = action.payload;
        }

    },
})

export const { setLoading, setCountryList, setCityList, setSelectedCountry, setSelectedCity, appendCountryList, appendCityList } = countrySlice.actions;

export default countrySlice.reducer;
