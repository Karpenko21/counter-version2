import React, {useEffect} from 'react';
import s from "./Counter.module.css"
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {clickIncAC, clickResetAC, CounterVariablesType} from "../state/counterReducer";


export type CounterPropsType = {
    settingMode: (b: boolean) => void;
}

export const CounterPanel = (props: CounterPropsType) => {

    const counterVariables = useSelector<AppRootStateType, CounterVariablesType>(state => state.counterVariables)
    const dispatch = useDispatch()

    const onClickIncHandler = () => {
        dispatch(clickIncAC())
    }

    const onClickResetHandler = () => {
        dispatch(clickResetAC())
    }

/*    useEffect(() => {
        let storageMaxValueAsString = localStorage.getItem('counterMaxValue')
        let storageMinValueAsString = localStorage.getItem('counterMinValue')
        let storageValueAsString = localStorage.getItem('counterValue')

        if (storageMaxValueAsString) {
            let storageMaxValue = JSON.parse(storageMaxValueAsString)
            callbackForMaxValue(storageMaxValue)
        }
        if (storageMinValueAsString) {
            let storageMinValue = JSON.parse(storageMinValueAsString)
            callbackForMinValue(storageMinValue)
        }
        if (storageValueAsString) {
            let storageValue = JSON.parse(storageValueAsString)
            callbackForValue(storageValue)
        }

    }, [])*/

    const ChangeValues = () => {
        props.settingMode(false)
    }

    return (
        <div className={s.counter}>
            <div className={s.panel}>
                <div className={
                    counterVariables.value === counterVariables.maxValue
                        ? s.maxValue
                        : s.value}
                >
                    {counterVariables.value}
                </div>
            </div>
            <div className={s.buttonsContainer}>
                <Button name={"Inc"}
                        callback={onClickIncHandler}
                        disabled={counterVariables.value === counterVariables.maxValue}
                        className={counterVariables.value === counterVariables.maxValue
                            ? s.disabled
                            : counterVariables.error
                                ? s.disabled
                                : s.button}/>
                <Button name={"Reset"}
                        callback={onClickResetHandler}
                        disabled={counterVariables.value === counterVariables.minValue}
                        className={counterVariables.value === counterVariables.minValue
                            ? s.disabled
                            : counterVariables.error
                                ? s.disabled
                                : s.button}/>
                <Button name={'Set'}
                        callback={ChangeValues}
                        className={s.button}/>
            </div>
        </div>
    )
}