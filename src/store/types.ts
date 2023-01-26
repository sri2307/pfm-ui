import { AnyAction, Store } from '@reduxjs/toolkit'
import { ThunkDispatch } from 'redux-thunk'
import rootReducer from './rootReducer'

export type RootState = ReturnType<typeof rootReducer>

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>
export type AppStore = Omit<Store<RootState, AnyAction>, 'dispatch'> & {
    dispatch: AppThunkDispatch
}
