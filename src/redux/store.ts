import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'

import authSlice from "./reducers/Auth";
import countrySlice from "./reducers/Country";
import educationSlice from "./reducers/Education";
import rootSaga from "./saga/RootSaga";
import jobSlice from "./reducers/Job";
import projectSlice from "./reducers/Project";



const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        auth: authSlice,
        country: countrySlice,
        education: educationSlice,
        job: jobSlice,
        project: projectSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch