import { combineReducers } from '@reduxjs/toolkit'
import testReducer from './features/testSlice'

const rootReducer = combineReducers({
    test: testReducer,
})

export default rootReducer
