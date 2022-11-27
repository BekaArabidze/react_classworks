import { useState } from "react"
import "./style.css"

const Reminder = () => {
    const [users, setUsers] = useState([
        {
            name: "Bertie Yates",
            age:29,
            pic:"1.jpg"
        },
        {
            name: "Hester Hogan",
            age:32,
            pic:"1.jpg"
        },
        {
            name: "Larry Little",
            age:25,
            pic:"1.jpg"
        }
    ])


    return (
        <>
        <h1>{users.length} birthdays today</h1>

        {/* USING MAP TO DISPLAY ARRAY OF USERS */}
            {users.map((user,i) => (
                <div key={i}>
                    <img src={user.pic} alt={user.name} className="pic" />
                    <h1>{user.name}</h1>
                    <h1>{user.age}</h1>
                </div>
            ))}


            {/* DELETES USERS  */}
            <button onClick={() => setUsers([])}>Clear All</button>
        </>
    )
}

export default Reminder