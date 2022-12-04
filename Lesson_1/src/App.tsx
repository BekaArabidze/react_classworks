import "./style.css"
import { useState } from 'react'
import Counter from './components/Counter'
import ColorFlipper from './components/ColorFlipper/ColorFlipper'
import Reminder from './components/Reminder/Reminder'

function App() {
    return (
        <div className="App">



            {/* passing props to Counter component */}
            {/* <Counter count={count} increment={increment} /> */}


            {/* JUST IMPORT COMPONENET AND MOUNT HERE */}
            {/* <ColorFlipper /> */}
            {/* <Reminder/> */}
        </div>
    )
}

export default App
