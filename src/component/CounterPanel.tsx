import React, {useEffect} from 'react';
import s from "./Counter.module.css"
import {Button} from "./Button";


export type CounterPropsType = {
    value: number
    maxValue: number
    minValue: number
    error: boolean
    mode: boolean

    callbackForValue: (value: number) => void
    callbackForMaxValue: (maxValue: number) => void
    callbackForMinValue: (minValue: number) => void
    callbackForError: (error: boolean) => void
    callbackForSettingMode: (b: boolean) => void;
}

export const CounterPanel: React.FC<CounterPropsType> = (
    {
        value,
        maxValue,
        minValue,
        error,

        callbackForValue,
        callbackForMaxValue,
        callbackForMinValue,
        callbackForSettingMode,
    }
) => {
    const onClickIncHandler = () => {
        callbackForValue(value + 1)
    }

    const onClickResetHandler = () => {
        callbackForValue(minValue)
    }

    useEffect(() => {
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

    }, [])

    const ChangeValues = () => {
        callbackForSettingMode(false)
    }

    return (
        <div className={s.counter}>
            <div className={s.panel}>
                <div className={
                    value === maxValue
                        ? s.maxValue
                        : s.value}
                >
                    {value}
                </div>
            </div>
            <div className={s.buttonsContainer}>
                <Button name={"Inc"}
                        callback={onClickIncHandler}
                        disabled={value === maxValue}
                        className={value === maxValue
                            ? s.disabled
                            : error
                                ? s.disabled
                                : s.button}/>
                <Button name={"Reset"}
                        callback={onClickResetHandler}
                        disabled={value === minValue}
                        className={value === minValue
                            ? s.disabled
                            : error
                                ? s.disabled
                                : s.button}/>
                <Button name={'Set'}
                        callback={ChangeValues}
                        className={s.button}/>
            </div>
        </div>
    )
}