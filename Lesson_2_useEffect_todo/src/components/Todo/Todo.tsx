import { useEffect, useState } from "react"


interface ITodo {
    id: number;
    todo: string;
    completed: boolean;
    userId: number
}


function Todo() {
    const [todos, setTodos] = useState<ITodo[]>([])

    async function fetchTodos() {
        try {
            const todos = await fetch("https://dummyjson.com/todos?limit=3&skip=10")
            const response = await todos.json()

            setTodos(response.todos)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    function deleteTodo(id: number) {
        setTodos(todos.filter((todo) => todo.id != id))
    }

    return (
        <>
            {todos.map((todo, i) => (
                <div key={i}>
                    <h1>{todo.todo}</h1>
                    <button onClick={() => deleteTodo(todo.id)}>delete</button>
                </div>
            ))}
        </>
    )
}

export default Todo