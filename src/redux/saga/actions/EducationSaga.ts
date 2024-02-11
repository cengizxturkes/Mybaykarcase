import { call, put } from "redux-saga/effects"
import { setEgitimSeviyesi } from "../../reducers/Education"
import { ClientBase } from "../../../services/clients/ClientBase"

export const EducationActionTypes = {
    SET_EDUACTION_LEVEL: "SET_EDUACTION_LEVEL",
    ADD_SCHOOL: "ADD_SCHOOL"
}

export function* setEducationLevel(action: any) {
    yield put(setEgitimSeviyesi(action.payload))
}

export function* getSchoolData(action: any) {
    try {
        yield call(() => ClientBase.axiosBase.get("/school"))
    } catch (error) {
        console.error(error)
    }
}