import React, {ChangeEvent, useEffect} from 'react';
import s from "./Counter.module.css"
import {Button} from "./Button";
import {CounterPropsType} from "./CounterPanel";


export const CounterPanelSetter: React.FC<CounterPropsType> = (
    {
        maxValue,
        minValue,
        error,

        callbackForValue,
        callbackForMaxValue,
        callbackForMinValue,
        callbackForError,
        callbackForSettingMode,
    }
) => {
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = Number(e.currentTarget.value)
        callbackForMaxValue(newMaxValue)
        if (newMaxValue <= minValue || newMaxValue < 0) {
            callbackForError(true)
        } else {
            callbackForError(false)
        }
    }
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newMinValue = Number(e.currentTarget.value)
        callbackForMinValue(newMinValue)
        if (newMinValue >= 0 && newMinValue < maxValue) {
            callbackForError(false)
        } else {
            callbackForError(true)
        }
    }


    const ChangeValues = () => {
        localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
        localStorage.setItem('counterMinValue', JSON.stringify(minValue))
        callbackForValue(minValue)
        localStorage.setItem('counterValue', JSON.stringify(minValue))
        callbackForSettingMode(true)
    }
    return (
        <div className={s.counter}>
            <div className={s.panel}>
                <div className={s.panelInputValue}>
                    <span>Max value:
                        <input type={"number"}
                               value={maxValue}
                               className={error ? s.error : s.input}
                               onChange={onChangeMaxValueHandler}/></span>
                </div>
                <div className={s.panelInputValue}>
                    <span>Start value:
                        <input type={"number"}
                               value={minValue}
                               className={error ? s.error : s.input}
                               onChange={onChangeMinValueHandler}/></span>
                </div>
            </div>
            <div className={s.buttonsContainer}>
                <Button name={'Set'}
                        callback={ChangeValues}
                        disabled={error}
                        className={error ? s.disabled : s.button}/>

            </div>
        </div>
    )
}

