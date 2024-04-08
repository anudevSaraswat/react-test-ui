import { Profile } from "./Profile"
import data from "./data/users.json"

export function Gallery() {
    let users = [];
    data.forEach((user) => {
        users.push(<Profile person={user} size={50}></Profile>)
    })
    return (
        <div>
            {users}
        </div>
    )
}