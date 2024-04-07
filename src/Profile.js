import './Profile.css';
import { getImageURL } from "./utils";

export function Profile({person, size}) {

    // example for reactCSS
    // const person = {
    //     name: "Hedy Lamarr",
    //     inventions: 5,
    //     theme: {
    //         backgroundColor: 'black',
    //         color: 'pink',
    //     }
    // }

    return (
        <div>
            <h2>{person.name}</h2>
        <section className="Profile">
            <img
                src={getImageURL(person.imageID)}
                alt={person.name}
                width={size}
                height={size}
            ></img>
            <ul>
          <li>
            <b>Profession: </b>
            {person.profession}
          </li>
          <li>
            <b>Awards: {person.numberOfAwards} </b> 
            <br></br>
            {person.awards.join(', ')}
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovery}
          </li>
        </ul>
        </section>
        </div>
    )
}