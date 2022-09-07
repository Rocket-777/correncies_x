import React from 'react';
import {SwapButton} from "../swapButton";
import {Container} from "./styles";
import {CurInp} from "../curInput";
import {useEffect} from "react";
import {fetchData} from "../../store/slices/ActionThunk";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";

function Layout() {
    const dispatch = useAppDispatch();
    const currState = useAppSelector(state => state.currencyManage)
    useEffect(() => {
        dispatch(fetchData(currState.from));
    }, [currState.from])

    return (
        <Container>
            <CurInp type='from' />
            <SwapButton/>
            <CurInp type='to' />
        </Container>
    );

}

export default Layout;
