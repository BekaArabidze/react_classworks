
interface IColor {
    currentColor:string;
    changeBgColor: () => void
}

const Color = ({currentColor,changeBgColor}:IColor) => {
    return (
        <>
            <div className="color_switch">
                <h1>Background Color: {`#${currentColor}`}</h1>
                <button onClick={changeBgColor}>change color</button>
            </div>
        </>
    )
}

export default Color