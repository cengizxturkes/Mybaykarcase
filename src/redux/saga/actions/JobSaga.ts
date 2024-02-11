import { call, put } from "redux-saga/effects"
import { appendJobList, setJobList, setJobStatus, setSelectedJob } from "../../reducers/Job"
import { ClientBase } from "../../../services/clients/ClientBase"

export const JobActionTypes = {
    SET_CALISMA_DURUMU: "SET_CALISMA_DURUMU",
    GET_JOBS: "GET_JOBS",
    SET_JOB: "SET_JOB"
}

export function* setCalismaDurumu(action: any) {
    yield put(setJobStatus(action.payload))
}

export function* setJob(action: any) {
    yield put(setSelectedJob(action.payload))
}

export function* getJobs(action: any) {
    try {
        const response = yield call(() => ClientBase.axiosBase.get(`/list?skip=${action.payload.skip}`))

        action.payload.skip > 0 ? yield put(appendJobList(response.data)) : yield put(setJobList(response.data))

    } catch (error) {
        console.error(error)
    }
}
