

// create interface to make typed props
interface ICounter {
    count: number;
    increment: () => void
}

const Counter = ({ count, increment }: ICounter) => {
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => increment()}>inc</button>
        </>
    )
}

export default Counter