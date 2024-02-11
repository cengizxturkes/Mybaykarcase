import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface EducationState {
    egitimSeviyesi: string;
    schoolData: any[];
    skills: any[];
}

const initialState: EducationState = {
    egitimSeviyesi: "",
    schoolData: [

    ],
    skills: [

    ]
};

export const educationSlice = createSlice({
    name: "educationState",
    initialState,
    reducers: {
        setEgitimSeviyesi: (state, action: PayloadAction<string>) => {
            state.egitimSeviyesi = action.payload;
        },
        setSchoolData: (state, action: PayloadAction<any>) => {
            state.schoolData = action.payload;
        },
        addSchoolData: (state, action: PayloadAction<any>) => {
            state.schoolData.push(action.payload);
        },
        setSkills: (state, action: PayloadAction<any>) => {
            state.skills = action.payload;
        },
        addSkill: (state, action: PayloadAction<any>) => {
            state.skills.push(action.payload);
        }
    },
})

export const { setEgitimSeviyesi, setSchoolData, setSkills, addSchoolData, addSkill } = educationSlice.actions;

export default educationSlice.reducer;
