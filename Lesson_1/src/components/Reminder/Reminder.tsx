import { useState } from "react"
import "./style.css"
import UsersInfo from "./UsersInfo"



const Reminder = () => {
    const [users, setUsers] = useState([
        {
            name: "Bertie Yates",
            age: 29,
            pic: "1.jpg"
        },
        {
            name: "Hester Hogan",
            age: 32,
            pic: "1.jpg"
        },
        {
            name: "Larry Little",
            age: 25,
            pic: "1.jpg"
        }
    ])


    return (
        <>
            <h1>{users.length} birthdays today</h1>


            <UsersInfo users={users} />

            {/* DELETES USERS  */}
            <button onClick={() => setUsers([])}>Clear All</button>
        </>
    )
}

export default Reminder