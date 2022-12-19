import "./style.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TodosLocalStorage from "./components/Todos_localstorage/Todos"
import Todos from "./components/Todos/Todos";
import ColorFlipper from "./components/ColorFlipper/ColorFlipper";
import SingleTodo from './components/Todos/SingleTodo';



// creates a router with the routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <TodosLocalStorage />,
    },
    {
        path: "/colorflipper",
        element: <ColorFlipper />,
    },
    {
        path: "/todos",
        element: <Todos />,
    },
    {
        //create a dynamic route
        path: "/todos/:id",
        element: <SingleTodo />,
    }
]);


function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App
