import {configureStore} from "@reduxjs/toolkit";
import manageCurrencySlice from "./slices/curSlice";
const store = configureStore({
    reducer:{
        currencyManage: manageCurrencySlice
    }
})
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
