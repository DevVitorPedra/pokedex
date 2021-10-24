
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PokemonsList(props) {
    const description = document.querySelector('.description-text')
    description.innerHTML= `A List with all the pokemons in the world.
    <br/>Choose one to see the stats`
    useEffect(() => {
        getData()
    }, [])
    const [pokemons, setPokemons] = useState([])
    console.log(pokemons)

    const getData = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=600'
        const data = await fetch(url)
        const list = await data.json()
        return setPokemons(list.results)
    }
   
    return (
        <div className="pokedex">
            {pokemons.map((element, idx) => {
                return (
                    <div key={idx + 1}>
                        <Link to={`/pokemon/${idx + 1}`}>
                            <div className="pokemon" style={{ 'backgroundColor': (props.color) }}>
                                <div className="card">
                                    <h2>{element.name}</h2>
                                    <img className="pokemon-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${idx + 1}.png`} alt={element.name}></img>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
