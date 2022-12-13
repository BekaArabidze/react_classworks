import { useEffect, useState } from "react"



function UseEffectTest() {
    const [count, setcount] = useState(0)
    const [mouse, setMouse] = useState({ x: 0, y: 0 })


    function cursor(e) {
        console.log(e);
        setMouse({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        window.addEventListener("mousemove", cursor)

        setcount(prev => prev + 1)
        console.log(count);

        return () => {
            window.removeEventListener("mousemove", cursor)
        }
    }, [])


    return (
        <>
            <div
                style={{
                    backgroundColor: "red",
                    width: "5rem", height: "5rem",
                    position: "absolute",
                    transform: `translateX(${mouse.x - 50}px) 
                    translateY(${mouse.y - 50}px)`,
                }}
            />

        </>
    )
}

export default UseEffectTest;