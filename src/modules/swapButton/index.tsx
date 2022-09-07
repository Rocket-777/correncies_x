import {StyledButton, StyledSwapIcon} from "./styles";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {manageCurrencySlice} from "../../store/slices/curSlice";


export const SwapButton = () => {
    const dispatch = useAppDispatch();
    const {swapCurrencies} = manageCurrencySlice.actions;
    const state = useAppSelector(state => state.currencyManage)
    const coefficient = state.currencyData[state.to];

    function handleClick() {
        dispatch(swapCurrencies(coefficient));
    }

    return (
        <StyledButton onClick={() => handleClick()}>
            <StyledSwapIcon/>
        </StyledButton>
    );
}
