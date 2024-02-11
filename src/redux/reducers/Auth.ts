import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Storage } from "../../utils/Storage";

export interface AuthState {
    isAuth: boolean;
    userData: any;
    gender: string;
}

const initialState: AuthState = {
    isAuth: false,
    userData: {
        image: "",
        name: "",
        surname: "",
        country: "",
        city: "",
        idNumber: "",
        phoneNumber: "",
        birthDate: "",
        gender: "",
        jobStatus: "",
        jobTitle: "",
        eduLevel: "",
        eduInfo: [],
        skills: [],
        projectInfo: [],
    },
    gender: ""
};

export const authSlice = createSlice({
    name: "authState",
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
        setUserData: (state, action: PayloadAction<any>) => {
            state.userData = action.payload;
        },
        updateUserData: (state, action: PayloadAction<any>) => {
            if (action.payload.projectInfo) {
                state.userData = {
                    ...state.userData,
                    ...action.payload
                }
                Storage.set("userData", state.userData)
                Storage.set("isAuth", true)
            } else {
                state.userData = {
                    ...state.userData,
                    ...action.payload
                }
            }
        },
        getUserData: (state) => {
            return state.userData
        },
        setGender: (state, action: PayloadAction<string>) => {
            state.gender = action.payload;
        }
    },
})

export const { setAuth, setUserData, updateUserData, getUserData, setGender } = authSlice.actions;

export default authSlice.reducer;
