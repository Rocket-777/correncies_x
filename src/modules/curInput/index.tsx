import {
    StyledTextField, InputBase, CurrLabel, TextFieldContainer,
    MenuProps, StyledSkeleton, HeadLabel
} from "./styles";
import {CurrSelect} from "./styles";
import {MenuItem} from "@mui/material";
import {ReactComponent as DropArrow} from "../../assets/DropArrow.svg"
import {useAppSelector, useAppDispatch} from "../../hooks/hooks";
import {manageCurrencySlice} from "../../store/slices/curSlice";
import {FC} from "react"

interface ICurInpProps {
    type: 'from' | 'to'
}

export const CurInp: FC<ICurInpProps> = ({type}) => {
    const currState = useAppSelector(state => state.currencyManage)
    const dispatch = useAppDispatch();
    const {changeFrom, changeTo, updateFromNumb} = manageCurrencySlice.actions;
    const selectArray = Object.keys(currState.currencyData);
    const coefficient = currState.currencyData[currState.to];
    const toValue = coefficient * parseFloat(currState.fromNumb.replace(/,/g, '.'));
    const menuList = selectArray.map(item => <MenuItem value={item} key={item}>
        {item}
    </MenuItem>);

    if (!currState.isLoading) {
        if (type === 'from')
            return (
                <InputBase size='small'>
                    <HeadLabel>
                        У меня есть
                    </HeadLabel>
                    <CurrSelect MenuProps={MenuProps} IconComponent={DropArrow} value={currState.from}
                                onChange={(event) => {
                                    dispatch(changeFrom(event.target.value as string));
                                }}>
                        {menuList}
                    </CurrSelect>
                    <TextFieldContainer>
                        <StyledTextField autoComplete='off' value={currState.fromNumb} onChange={(e) => {
                            const numb = e.target.value as string
                            dispatch(updateFromNumb(isNaN(parseInt(numb)) ? '' : numb))
                        }}/>
                        <CurrLabel>
                            {`1 ${currState.from} = ${coefficient.toFixed(4)} ${currState.to}`}
                        </CurrLabel>
                    </TextFieldContainer>
                </InputBase>)
        if (type === 'to')
            return (
                <InputBase size='small'>
                    <HeadLabel>
                        Я получу
                    </HeadLabel>
                    <CurrSelect MenuProps={MenuProps} IconComponent={DropArrow} value={currState.to}
                                onChange={(event) => {
                                    dispatch(changeTo(event.target.value as string))
                                }}>
                        {menuList}
                    </CurrSelect>
                    <TextFieldContainer>
                        <StyledTextField aria-readonly value={isNaN(toValue) ? '' : toValue.toFixed(4)}/>
                        <CurrLabel>
                            {`1 ${currState.to} = ${(1 / coefficient).toFixed(4)} ${currState.from}`}
                        </CurrLabel>
                    </TextFieldContainer>
                </InputBase>
            )
    } else if (currState.isLoading) {
        return (
            <StyledSkeleton animation='wave'/>
        )
    }

    return null;
}
