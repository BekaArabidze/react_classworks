import "./style.css"
import { useState } from "react"
import Color from "./Color"


const ColorFlipper = () => {
    const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    const [currentColor, setCurrentColor] = useState("3040FD")

    const getRandomIndex = (): number => {
        return Math.floor(Math.random() * colors.length)
    }

    const changeBgColor = (): void => {
        let newColor = ""
        for (let i = 0; i < 6; i++) {
            newColor += colors[getRandomIndex()]
            setCurrentColor(newColor)
        }

    }


    return (
        <div className="container" style={{ backgroundColor: `#${currentColor}` }}>
           <Color currentColor={currentColor} changeBgColor={changeBgColor} />
        </div>
    )
}

export default ColorFlipper