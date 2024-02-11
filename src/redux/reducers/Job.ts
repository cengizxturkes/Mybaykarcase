import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface JobState {
    jobStatus: string;
    selectedJob: string;
    loading: boolean;
    jobList: any[];
}

const initialState: JobState = {
    loading: false,
    jobStatus: "",
    selectedJob: "",
    jobList: []
};

export const jobSlice = createSlice({
    name: "jobState",
    initialState,
    reducers: {
        setJobStatus: (state, action: PayloadAction<string>) => {
            state.jobStatus = action.payload;
        },
        setSelectedJob: (state, action: PayloadAction<string>) => {
            state.selectedJob = action.payload;
        },
        setJobList: (state, action: PayloadAction<any>) => {
            state.jobList = action.payload;
        },
        appendJobList: (state, action: PayloadAction<any>) => {
            state.jobList = [...state.jobList, ...action.payload];
        }
    },
})

export const { setJobStatus, setSelectedJob, setJobList, appendJobList } = jobSlice.actions;

export default jobSlice.reducer;
