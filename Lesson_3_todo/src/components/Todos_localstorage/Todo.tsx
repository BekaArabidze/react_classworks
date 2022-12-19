import { useState } from "react"



interface ITodo {
    id: number;
    todo: string;
    completed?: boolean;
    deleteTodo: () => void;
    toggleTodo: () => void;
    updateTodo: (id: number, body: string) => void;
}


const Todo = ({ id, todo, deleteTodo, completed, toggleTodo, updateTodo }: ITodo) => {
    const [isEdit, setIsEdit] = useState(false)
    const [update, setUpate] = useState(todo)

    function isUpdate() {
        updateTodo(id, update)
        setIsEdit(false)
    }

    return (
        <>
            {isEdit ?
                <div>
                    <input
                        type="text"
                        placeholder="update todo"
                        onChange={(e) => setUpate(e.target.value)}
                        value={update}
                    />
                    <button onClick={() => isUpdate()}>Edit</button>
                </div>
                :
                <>
                    <h4 style={!completed ? { color: "red" } : { color: "green" }}  >
                        {todo}
                    </h4>

                    <button onClick={deleteTodo}>delete</button>
                    <button onClick={toggleTodo}>toggle todo</button>
                    <button onClick={() => setIsEdit(true)}>Edit</button>
                </>


            }


        </>
    )
}

export default Todo