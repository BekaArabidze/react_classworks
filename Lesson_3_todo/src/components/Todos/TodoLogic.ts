import { Itodos } from "./Todos"
import { Dispatch, SetStateAction } from "react"

export function deleteTodo(
    id: number,
    setTodos: Dispatch<SetStateAction<Itodos[]>>,
    todos: Itodos[]) {
    const deleteTodo = todos.filter(todo => todo.id != id)
    setTodos(deleteTodo)
    localStorage.setItem('todos', JSON.stringify(deleteTodo))
}


export function toggleTodo(
    id: number,
    setTodos: Dispatch<SetStateAction<Itodos[]>>,
    todos: Itodos[]) {
    const toggleTodo = todos.map((todo) => (
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
    setTodos(toggleTodo)
    localStorage.setItem('todos', JSON.stringify(toggleTodo))
}