import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { retrieveClass } from '../../utils/classColor'
/**import bug from '../../assets/icons/bug.webp'
import dark from '../../assets/icons/dark.webp'
import dragon from '../../assets/icons/dragon.webp'
import eletric from '../../assets/icons/electric.webp'
import fairy from '../../assets/icons/fairy.webp'
import fighting from '../../assets/icons/fighting.webp'
import fire from '../../assets/icons/fire.png'
import flying from '../../assets/icons/flying.webp'
import ghost from '../../assets/icons/ghost.webp'
import grass from '../../assets/icons/grass.webp'
import ground from '../../assets/icons/ground.webp'
import ice from '../../assets/icons/ice.webp'
import normal from '../../assets/icons/normal.webp'
import poison from '../../assets/icons/poison.png'
import psychic from '../../assets/icons/psychic.webp'
import rock from '../../assets/icons/rock.webp'
import steel from '../../assets/icons/steel.webp'
import water from '../../assets/icons/water.webp'
 */

export default function Type(props) {
  
    useEffect(() => {
       
    
        getTypes()
    }, [])
  
    const [types, setTypes ] = useState([])
    const [pokemonsByType,setPokemonsByType] = useState([])
    
    const getTypes = async () => {
        const url = 'https://pokeapi.co/api/v2/type/'
        const fetchTypes = await fetch(url)
        const data = await fetchTypes.json()
        console.log(data.results)
        setTypes(data.results)
    }
    
    useEffect(() => {
        const typesSelector= document.querySelector('.types-selector')
        typesSelector.classList.add('show')
        return () => {
            typesSelector.classList.remove('show')
        }
    }, [])
    console.log(pokemonsByType)
    return (
        <div className="by-types">
            <div className="links">
               {types.map((element, idx)=>{
               return ( <button key={idx+1}  className="btn-types" onClick={async ()=>{
                   const url = `https://pokeapi.co/api/v2/type/${idx+1}`
                   const byType = await fetch(url)
                   const dataByType = await byType.json()
                   setPokemonsByType(dataByType.pokemon)

               }}  style={{'backgroundColor':retrieveClass(element.name)}}>{element.name}<div className={element.name}></div></button>)
               })}
               
            
            </div>
            <div className="types-screen">
               {pokemonsByType.map((element,idx)=>{
                      let url= element.pokemon.url.split('/')
                   return( <div key={idx + 1}>
                    <Link to={`/pokemon/${url[6]}`}>
                        <div className="pokemon" style={{ 'backgroundColor': (props.color) }}>
                            <div className="card">
                                <h2>{element.pokemon.name}</h2>
                                <img className="pokemon-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${url[6]}.png`} alt={element.pokemon.name}></img>
                            </div>
                        </div>
                    </Link>
                </div>)
               })}
       
            </div>
        </div>
    )
}
