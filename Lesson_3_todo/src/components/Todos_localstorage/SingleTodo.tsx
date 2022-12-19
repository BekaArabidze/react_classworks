
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


type ITodo = {
    id: number;
    todo: string;
    completed?: boolean;
}



const SingleTodo = () => {
    const { id } = useParams();
    const [todos, setTodos] = useState<ITodo>()

    const getTodos = async () => {

        try {
            const todos = await fetch(`https://dummyjson.com/todos/${id}`)
            const response = await todos.json()

            console.log(response);

            setTodos(response)
            return response
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getTodos()
    }, [id])


    return (
        <div>
            <h1>{id}</h1>
            <h1>
                {todos?.todo}
            </h1>


            <style >
                {`
                h1 {
                    color: yellow;
                }
                `}
            </style>
        </div>
    )
}

export default SingleTodo