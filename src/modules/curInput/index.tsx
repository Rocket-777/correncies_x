import {
    StyledTextField, InputBase, CurrLabel, TextFieldContainer,
    MenuProps, StyledSkeleton, HeadLabel, StyledMenuItem
} from "./styles";
import {CurrSelect} from "./styles";
import {ReactComponent as DropArrow} from "../../assets/DropArrow.svg"
import {ReactComponent as Selected} from "../../assets/Selected.svg"
import {useAppSelector, useAppDispatch} from "../../hooks/hooks";
import {manageCurrencySlice} from "../../store/slices/curSlice";
import {ChangeEvent, FC, useEffect} from "react"

interface ICurInpProps {
    type: 'from' | 'to'
}
export const CurInp: FC<ICurInpProps> = ({type}) => {
    const currState = useAppSelector(state => state.currencyManage)
    const dispatch = useAppDispatch();
    const {changeFrom, changeTo, updateFromNumb, updateToNumb} = manageCurrencySlice.actions;
    const selectArray = Object.keys(currState.currencyData);
    const coefficient = currState.currencyData[currState.to];

    const menuList = selectArray.map(item => <StyledMenuItem value={item} key={item}>
        {item}
        <Selected/>
    </StyledMenuItem>);

    useEffect(()=>{
        const calculated = (parseFloat(currState.fromNumb) * coefficient);
        const result = isNaN(calculated) ? '' : calculated.toFixed(4);
        dispatch(updateToNumb(result.toString()));
    },[currState.from, currState.isLoading])


    useEffect(()=>{
        const calculated = (parseFloat(currState.toNumb) / coefficient);
        const result = isNaN(calculated) ? '' : calculated.toFixed(4);
        dispatch(updateFromNumb(result.toString()));
    }, [currState.to])

    function handleChange(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, fork: 'from' | 'to') {
        const numb = e.target.value.replace(/,/g, '.') as string;
        if (fork === 'from') {
            const calculated = (parseFloat(numb) * coefficient);
            const result = isNaN(calculated) ? '' : calculated.toFixed(4);
            dispatch(updateFromNumb(isNaN(parseFloat(numb)) ? '' : numb));
            dispatch(updateToNumb(result.toString()));
        }
        if (fork === 'to') {
            const calculated = (parseFloat(numb) / coefficient);
            const result = isNaN(calculated) ? '' : calculated.toFixed(4)
            dispatch(updateToNumb(isNaN(parseFloat(numb)) ? '' : numb));
            dispatch(updateFromNumb(result.toString()));
        }

    }

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
                    <TextFieldContainer key={currState.from}>
                        <StyledTextField autoComplete='off' value={currState.fromNumb} onChange={(e) => {
                            handleChange(e, 'from');
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
                    <TextFieldContainer key={currState.to}>
                        <StyledTextField value={currState.toNumb}
                                         autoComplete='off' onChange={(e) => {
                            handleChange(e, 'to');
                        }}/>
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
