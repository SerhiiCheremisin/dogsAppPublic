import { createSlice } from '@reduxjs/toolkit';

const initState  = {
    appWidth : 0,
    isDarkTheme: false
}

const appReducer = createSlice({
    name: 'appReducer',
    initialState : initState,
    reducers: {
         setWidth (state, action):void {
              state.appWidth = action.payload
         },
         setTheme (state, action): void {
           state.isDarkTheme = action.payload
         }
    }
})

export const { setWidth, setTheme } = appReducer.actions;

export default appReducer.reducer;