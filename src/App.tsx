import React, {useState} from 'react';
import './App.css';
import s from "./component/Counter.module.css";
import {CounterPanel} from "./component/CounterPanel";
import {CounterPanelSetter} from "./component/CounterPanelSetter";

function App() {

    const [maxValue, setMaxValue] = useState<number>(5)
    const [minValue, setMinValue] = useState<number>(0)
    const [value, setValue] = useState(minValue)
    const [error, setError] = useState<boolean>(false)
    const [mode, setMode] = useState<boolean>(true)


    return (
        <div className="App">
            {mode
                ? <CounterPanel
                    maxValue={maxValue}
                    minValue={minValue}
                    error={error}
                    value={value}
                    mode={mode}

                    callbackForMaxValue={setMaxValue}
                    callbackForMinValue={setMinValue}
                    callbackForError={setError}
                    callbackForValue={setValue}
                    callbackForSettingMode={setMode}/>

                : <CounterPanelSetter
                    maxValue={maxValue}
                    minValue={minValue}
                    error={error}
                    value={value}
                    mode={mode}

                    callbackForMaxValue={setMaxValue}
                    callbackForMinValue={setMinValue}
                    callbackForError={setError}
                    callbackForValue={setValue}
                    callbackForSettingMode={setMode}/>}
        </div>
    )
}

export default App;
