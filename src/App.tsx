import React, {useState} from 'react';
import './App.css';
import s from "./component/Counter.module.css";
import {CounterPanel} from "./component/CounterPanel";
import {CounterPanelSetter} from "./component/CounterPanelSetter";

function App() {

    const [mode, setMode] = useState<boolean>(true)


    return (
        <div className="App">
            {mode
                ? <CounterPanel
                    settingMode={setMode}/>

                : <CounterPanelSetter
                    settingMode={setMode}/>}
        </div>
    )
}

export default App;
