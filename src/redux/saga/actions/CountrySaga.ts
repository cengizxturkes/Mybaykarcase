import { call, put } from "redux-saga/effects"
import { } from "../../reducers/Job"
import { ClientBase } from "../../../services/clients/ClientBase"
import { setCityList, setCountryList, setSelectedCountry as ssCountry, setSelectedCity as ssCity, appendCountryList, setLoading } from "../../reducers/Country"

export const CountryActionTypes = {
    SET_LOADING: "SET_LOADING",
    GET_COUNTRY: "GET_COUNTRY",
    GET_CITIES: "GET_CITIES",
    SEARCH_COUNTRY: "SEARCH_COUNTRY",
    SEARCH_CITY: "SEARCH_CITY",
    SET_SELECTED_COUNTRY: "SET_SELECTED_COUNTRY",
    SET_SELECTED_CITY: "SET_SELECTED_CITY",
}

export function* getCountry(action: any) {
    try {
        yield put(setLoading(true))
        const response = yield call(() => ClientBase.axiosBase.get(`/countries?skip=${action.payload.skip}`))
        action.payload.skip > 0 ? yield put(appendCountryList(response.data)) : yield put(setCountryList(response.data))

    } catch (error) {
        console.error(error)
    } finally {
        yield put(setLoading(false))
    }
}

export function* setSelectedCountry(action: any) {
    yield put(ssCountry(action.payload))
}

export function* getCities(action: any) {
    try {

        const response = yield call(() => ClientBase.axiosBase.get(`/cities?country=${action.payload.payload}`))
        yield put(setCityList(response.data))
    } catch (error) {
        console.error(error)
    }
}

export function* setSelectedCity(action: any) {
    yield put(ssCity(action.payload))
}

export function* searchCountry(action: any) {
    try {
        const searchText = action.payload.searchText
        if (searchText.length > 3) {
            const response = yield call(() => ClientBase.axiosBase.get(`/countries/search?search=${searchText}`))
            yield put(setCountryList(response.data))
        } else {
            yield put(setCountryList([]))
        }
    } catch (error) {
        console.error(error)
    }
}