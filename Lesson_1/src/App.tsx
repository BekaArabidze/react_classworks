import { useState } from 'react'
import "./style.css"
import Counter from './components/Counter'


function App() {
    const [count, setCount] = useState(0)


    let string = "string"
    let number = 0
    let array = [1, 2, 3, 4]
    let obj = {
        name: "Sam",
        age: 20
    }

    return (
        <div className="App">

            <h1>{string}</h1>

            <h1>{number}</h1>

            <h1>{array.map((el, i) => (
                <h1>{el}</h1>
            ))}
            </h1>

            <p>{obj.name}</p>
            <p>{obj.age}</p>


            {/* our state  */}
            {count}
            {/* we increment state with one.  */}
            <button onClick={() => setCount(count + 1)}>inc</button>

            <Counter />
        </div>
    )
}

export default App
