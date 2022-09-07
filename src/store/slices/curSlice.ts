import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface manageCurrencyState{
    currencyData: {[key: string]: any},
    menuList: string[],
    from: string,
    fromNumb: string,
    to: string,
    coef: number
    toNumb: string,
    isLoading: boolean,
    error: string
}

const initialState: manageCurrencyState = {
    currencyData: {},
    menuList: [],
    from: 'RUB',
    fromNumb: '',
    to: 'USD',
    toNumb: '',
    coef: 0,
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
        fetchingDataSuccess(state, action: PayloadAction<any>){
            state.currencyData = action.payload;
            state.coef = action.payload[state.to];
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
        updateToNumb(state, action: PayloadAction<string>){
            state.toNumb = action.payload
        },
        swapCurrencies(state, action: PayloadAction<number>){
            const from = state.from;
            state.from = state.to;
            state.to = from;
            const result = (parseFloat(state.fromNumb) / action.payload);
            state.toNumb = isNaN(result) ? '' : result.toFixed(4);
        },



    }
})


export default manageCurrencySlice.reducer;
