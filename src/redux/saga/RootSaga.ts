import { all, take, takeEvery } from "redux-saga/effects";
import { EducationActionTypes, setEducationLevel } from "./actions/EducationSaga";
import { JobActionTypes, getJobs, setCalismaDurumu, setJob } from "./actions/JobSaga";
import { CountryActionTypes, getCities, getCountry, searchCountry, setSelectedCity, setSelectedCountry } from "./actions/CountrySaga";
import { UserActionTypes, getAuthStatus, register, setAuthStatus, setGender, updateUser } from "./actions/User";

export default function* rootSaga() {
    yield takeEvery(EducationActionTypes.SET_EDUACTION_LEVEL, setEducationLevel)
    yield takeEvery(JobActionTypes.SET_CALISMA_DURUMU, setCalismaDurumu)
    yield takeEvery(JobActionTypes.SET_JOB, setJob)
    yield takeEvery(JobActionTypes.GET_JOBS, getJobs)
    yield takeEvery(CountryActionTypes.GET_COUNTRY, getCountry)
    yield takeEvery(CountryActionTypes.SET_SELECTED_COUNTRY, setSelectedCountry)
    yield takeEvery(CountryActionTypes.GET_CITIES, getCities)
    yield takeEvery(CountryActionTypes.SET_SELECTED_CITY, setSelectedCity)
    yield takeEvery(CountryActionTypes.SEARCH_COUNTRY, searchCountry)

    yield takeEvery(UserActionTypes.REGISTER, register)
    yield takeEvery(UserActionTypes.UPDATE_USER_DATA, updateUser)
    yield takeEvery(UserActionTypes.GET_AUTH_STATUS, getAuthStatus)

    yield takeEvery(UserActionTypes.SET_GENGER, setGender)
    yield takeEvery(UserActionTypes.SET_AUTH, setAuthStatus)
}