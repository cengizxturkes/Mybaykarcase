import { call, put } from "redux-saga/effects"
import { setJobStatus, setSelectedJob } from "../../reducers/Job"
import { ClientBase } from "../../../services/clients/ClientBase"
import { getUserData, setAuth, setGender as sGender } from "../../reducers/Auth"
import { useDispatch, useSelector } from "react-redux"
import { Storage } from "../../../utils/Storage"

export const UserActionTypes = {
    REGISTER: "REGISTER",
    UPDATE_USER_DATA: "UPDATE_USER_DATA",
    GET_AUTH_STATUS: "GET_AUTH_STATUS",
    SET_GENGER: "SET_GENGER",
    SET_AUTH: "SET_AUTH",
}

export function* setAuthStatus(action: any) {
    try {
        yield put(setAuth(action.payload))
        Storage.set("isAuth", action.payload)
    } catch (error) {
        console.error(error)
    }
}

export function* getAuthStatus() {
    try {
        Storage.get("isAuth").then((res) => {
            if (res === true) {
                setAuth(res.data)
            }
        })
    } catch (error) {
        console.error(error)
    }
}

export function* register(action: any) {
    try {
        // const response = yield call(() => ClientBase.axiosBase.post("/register", action.payload))
        console.log("REGISTERRRR", action.payload)

    } catch (error) {
        console.error(error)
    }
}

export function* updateUser(action: any) {
    try {
        Storage.get("userData").then((res) => {
            Storage.set("userData", {
                ...res,
                ...action.payload
            })
        })
    } catch (error) {
        console.error(error)
    }
}

export function* setGender(action: any) {
    try {
        yield put(sGender(action.payload))
    } catch (error) {
        console.error(error)
    }
}