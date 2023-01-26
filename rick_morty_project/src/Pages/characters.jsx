import { useLoaderData, Link } from "react-router-dom"

export default function CharactersPage () {
    const characterData= useLoaderData() 
    console.log(characterData)
    return(
     <>
     {
        characterData ? (
            <>
            <ul>
                {
                    characterData.map((character)=> (
                           <li>{console.log(character.id)}
                            <Link to={`/characters/${character.id}`}>
                            {character.name}
                            </Link>
                           
                            </li> 
                    ))
                 }
            </ul>
            </>
        )
        :
        (<div>Loading</div>)
     }
     </>   
    )
    }
