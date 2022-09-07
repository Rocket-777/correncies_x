import {manageCurrencySlice} from "./curSlice";
import {AppDispatch} from "../store";
import {fetchCur} from "../../requests/requests";

export const fetchData = (base: string) => async (dispatch: AppDispatch) => {
    try{
        dispatch(manageCurrencySlice.actions.fetchingData());
        const response = await fetchCur(base);
        dispatch(manageCurrencySlice.actions.fetchingDataSuccess(response.rates))
    }
    catch(error){
        if(error instanceof Error)
        dispatch(manageCurrencySlice.actions.fetchingFailed(error.message))
    }
}

