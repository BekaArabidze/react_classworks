import "./style.css"
import { useState } from 'react'
import Counter from './components/Counter'
import ColorFlipper from './components/ColorFlipper/ColorFlipper'
import Reminder from './components/Reminder/Reminder'
import RandomPerson from "./components/RandomPerson/RandomPerson"
import UseEffectTest from "./components/UseEffectTest/UseEffect"
import Todo from "./components/Todo/Todo"

function App() {
    return (
        <div className="App">



            {/* passing props to Counter component */}
            {/* <Counter count={count} increment={increment} /> */}


            {/* JUST IMPORT COMPONENET AND MOUNT HERE */}
            {/* <ColorFlipper /> */}
            {/* <Reminder/> */}

            {/* <RandomPerson /> */}
            {/* <UseEffectTest /> */}
            <Todo />
        </div>
    )
}

export default App
