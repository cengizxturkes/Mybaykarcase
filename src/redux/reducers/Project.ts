import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProjectState {
    projectList: any[];
}

const initialState: ProjectState = {
    projectList: [

    ],
};

export const projectSlice = createSlice({
    name: "projectState",
    initialState,
    reducers: {
        setProjects: (state, action: PayloadAction<any>) => {
            state.projectList = action.payload;
        },
        addProject: (state, action: PayloadAction<any>) => {
            state.projectList.push(action.payload);
        }
    },
})

export const { setProjects, addProject } = projectSlice.actions;

export default projectSlice.reducer;
