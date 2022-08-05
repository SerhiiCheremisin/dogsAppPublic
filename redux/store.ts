import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/appReducer';

const store = configureStore({
    reducer: {
        appReducer
    }
})

export type RootState = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;