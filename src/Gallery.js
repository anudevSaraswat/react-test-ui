import { Profile } from "./Profile"
import data from "./data/users.json"

export function Gallery() {
    let users = data.filter(user => user.numberOfAwards === 2)
    let listItems = users.map(user => <Profile key={user.id} person={user} size={50}></Profile>) 
    return (
        <div>
            {listItems}
        </div>
    )
}