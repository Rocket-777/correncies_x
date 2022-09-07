import {StyledButton, StyledSwapIcon} from "./styles";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {manageCurrencySlice} from "../../store/slices/curSlice";

export const SwapButton = () => {
    const dispatch = useAppDispatch();
    const {swapCurrencies} = manageCurrencySlice.actions;

    function handleClick() {
        dispatch(swapCurrencies());
    }

    return (
        <StyledButton onClick={() => handleClick()}>
            <StyledSwapIcon/>
        </StyledButton>
    );
}
