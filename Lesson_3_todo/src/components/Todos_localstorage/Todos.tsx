import { useEffect, useState } from "react"
import SingleTodo from "./SingleTodo";
import Todo from './Todo';

import { deleteTodo, toggleTodo } from "./TodoLogic"


export interface Itodos {
    id: number,
    todo: string,
    completed: boolean
}

const URL = "https://dummyjson.com"


const Todos = () => {
    let todoList: Itodos[] = JSON.parse(localStorage.getItem('todos') || '[]')
    const [todos, setTodos] = useState<Itodos[]>(todoList || [])
    const [loading, setLoading] = useState(true);
    const [addTodo, setAddTodo] = useState("")
    const [todoLimit, setTodoLimit] = useState(3)

    const getTodos = async () => {
        setLoading(true)

        try {
            const todos = await fetch(`${URL}/todos?limit=${todoLimit}`)
            const response = await todos.json()

            setTodos(response.todos)
            setLoading(false)
            return response
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        // IF YOU WANT TO USE THE API UNCOMMENT THE LINE BELOW
        // getTodos()


        // THIS WILL SET THE TODOS TO LOCAL STORAGE
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    // UPDATE TODO
    function updateTodo(id: number, body: string) {
        const updateTodo = todos.map((todo) => (
            todo.id === id ? { ...todo, todo: body } : todo
        ))
        setTodos(updateTodo)
    }


    // ADD TODO
    function handleFormSubmit(todo: string) {
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            todo: todo,
            completed: false
        }
        setTodos([...todos, newTodo])
        setAddTodo("")
    }



    return (
        <>
            <button onClick={() => setTodoLimit(prev => prev + 1)}>change limit</button>
            <input
                type="text"
                placeholder="add todo"
                onChange={(e) => setAddTodo(e.target.value)}
                value={addTodo}
            />
            <button onClick={() => handleFormSubmit(addTodo)}>Add</button>



            {todos.map((todo, i) => (
                <Todo
                    key={i}
                    id={todo.id}
                    todo={todo.todo}
                    completed={todo.completed}
                    deleteTodo={() => deleteTodo(todo.id, setTodos, todos)}
                    toggleTodo={() => toggleTodo(todo.id, setTodos, todos)}
                    updateTodo={updateTodo}
                />
            ))}
        </>
    )
}

export default Todos