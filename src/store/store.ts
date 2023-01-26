import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import { AppStore } from './types'

export const store: AppStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
