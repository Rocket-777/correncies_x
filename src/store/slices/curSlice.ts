import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface manageCurrencyState{
    currencyData: {[index: string]: any},
    menuList: string[],
    from: string,
    fromNumb: string,
    to: string,
    isLoading: boolean,
    error: string
}

const initialState: manageCurrencyState = {
    currencyData: {},
    menuList: [],
    from: 'RUB',
    fromNumb: '',
    to: 'USD',
    isLoading: true,
    error: ''
}

export const manageCurrencySlice = createSlice({
    name: 'currencyManage',
    initialState,
    reducers:{
        fetchingData(state){
            state.isLoading = true;
        },
        fetchingDataSuccess(state, action: PayloadAction<Object>){
            state.currencyData = action.payload;
            state.isLoading = false;
        },
        fetchingFailed(state, action: PayloadAction<string>){
            state.error = action.payload;
            state.isLoading = false;
        },
        changeFrom(state, action: PayloadAction<string>){
            state.from = action.payload;
        },
        changeTo(state, action: PayloadAction<string>){
            state.to = action.payload;
        },
        updateFromNumb(state, action: PayloadAction<string>) {
            state.fromNumb = action.payload
        },
        swapCurrencies(state){
            const from = state.from;
            state.from = state.to;
            state.to = from;

        }
    }
})


export default manageCurrencySlice.reducer;
