
import ReminderJson from './Reminder.json';
interface IUsers {
    users:typeof ReminderJson
}


const UsersInfo = ({users}:IUsers) => {
    return (
        <>
            {/* USING MAP TO DISPLAY ARRAY OF USERS */}
            {users.map((user, i) => (
                <div key={i}>
                    <img src={user.pic} alt={user.name} className="pic" />
                    <h1>{user.name}</h1>
                    <h1>{user.age}</h1>
                </div>
            ))}
        </>
    )
}

export default UsersInfo