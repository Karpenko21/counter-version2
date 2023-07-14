import React, {ChangeEvent, useEffect} from 'react';
import s from "./Counter.module.css"
import {Button} from "./Button";
import {CounterPropsType} from "./CounterPanel";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {changeMaxValueAC, changeMinValueAC, changeValuesAC, CounterVariablesType} from "../state/counterReducer";


export const CounterPanelSetter = (props: CounterPropsType) => {

    const counterVariables = useSelector<AppRootStateType, CounterVariablesType>(state => state.counterVariables)
    const dispatch = useDispatch()

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxValueAC(Number(e.currentTarget.value)))
       /* let newMaxValue = Number(e.currentTarget.value)
        callbackForMaxValue(newMaxValue)
        if (newMaxValue <= minValue || newMaxValue < 0) {
            callbackForError(true)
        } else {
            callbackForError(false)
        }*/
    }
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMinValueAC(Number(e.currentTarget.value)))
       /* let newMinValue = Number(e.currentTarget.value)
        callbackForMinValue(newMinValue)
        if (newMinValue >= 0 && newMinValue < maxValue) {
            callbackForError(false)
        } else {
            callbackForError(true)
        }*/
    }


    const ChangeValues = () => {
      /*  localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
        localStorage.setItem('counterMinValue', JSON.stringify(minValue))
        localStorage.setItem('counterValue', JSON.stringify(minValue))*/
        props.settingMode(true)
        dispatch(changeValuesAC())
    }
    return (
        <div className={s.counter}>
            <div className={s.panel}>
                <div className={s.panelInputValue}>
                    <span>Max value:
                        <input type={"number"}
                               value={counterVariables.maxValue}
                               className={counterVariables.error ? s.error : s.input}
                               onChange={onChangeMaxValueHandler}/></span>
                </div>
                <div className={s.panelInputValue}>
                    <span>Start value:
                        <input type={"number"}
                               value={counterVariables.minValue}
                               className={counterVariables.error ? s.error : s.input}
                               onChange={onChangeMinValueHandler}/></span>
                </div>
            </div>
            <div className={s.buttonsContainer}>
                <Button name={'Set'}
                        callback={ChangeValues}
                        disabled={counterVariables.error}
                        className={counterVariables.error ? s.disabled : s.button}/>

            </div>
        </div>
    )
}

