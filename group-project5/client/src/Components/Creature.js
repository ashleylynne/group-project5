import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"

function Creature(){
    const {creatureId} = useParams()
    const [creatureInfo, setCreatureInfo] = useState({})
    useEffect(() => {
        axios.get(`/monsters/${creatureId}`)
            .then(res => setCreatureInfo(res.data))
            .catch(err => console.log(err))
        //setCreatureInfo(creatures.find(creature => creature.species === creatureId))
    },[creatureId])

    return(
        <div className="creature">
            <div className="creatureIntro">
                <h1>{creatureInfo.species}</h1>
                <h2>{creatureInfo.shortDesc}</h2>
            </div>
            <img className="creatureImg" src={creatureInfo.imgUrl} alt=""/>
            <p className="creatureDesc">{creatureInfo.description}</p>

            {creatureInfo.isHostile ? 
            <div className="dangerTrue">
                <h1>THIS CREATURE IS DANGEROUS</h1>
                <p>Approaching this creature would be an unwise idea. No matter how cautious you are, likeliness is that you will be attacked or worse.</p>
            </div>
            :
            <div className="dangerFalse">
                <h1>This creature is safe</h1>
                <p>Assuming that this creature is treated with respect, and blah blah blah. You should be fine to approach this creature.</p>
            </div>}
        </div>
    )
}
export default Creature