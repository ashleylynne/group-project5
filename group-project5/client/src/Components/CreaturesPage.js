import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import axios from "axios"

function CreaturesPage() {
    const [creaturesList, setCreaturesList] = useState([])
    useEffect(() => {
        axios.get("/monsters")
            .then(res => {
                setCreaturesList(res.data.map(creature => 
                    <div key={creature._id}>
                        <h3><Link to={`creatures/${creature._id}`}>{creature.species}</Link></h3>
                        <p>{creature.shortDesc}</p>
                    </div>
                ))
            })
            .catch(err => console.log(err))

    }, [])
    return(
        <div>
            <h1>Creatures Page</h1>
            <h2>Behold all of these wonderful creatures!</h2>
            {creaturesList}
        </div>
    )
}

export default CreaturesPage

        /*const creaturesMap = creatures.map(creature => {
            <div>
                <h3><Link to={`creatures/${creature.species}`}>{creature.species}</Link></h3>
                <p>{creature.shortDesc}</p>
            </div>
        })*/