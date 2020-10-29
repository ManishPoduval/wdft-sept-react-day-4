import React, {useEffect, useState, useCallback} from 'react'
import axios from 'axios'

function PokemonDetail(props) {

    const [pokemon, setPokemon] = useState({})

    const getData = () => {
        let id = props.match.params.pokemonId
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => {
                //response.data
                const {name, height, weight, sprites} = response.data
                let pokemonData = {
                    name: name,
                    height: height,
                    id: id,
                    weight: weight,
                    image: sprites.other.dream_world.front_default
                }
                //setting state here 
                setPokemon(pokemonData)
            })
    }

    // componentDidMount 
    useEffect(() => {
        getData()
    }, [])

    //componentDidUpdate
    useEffect(() => {
        console.log('Component did update here')
        // necessary to avoid infinte loops
        if (pokemon.id !== props.match.params.pokemonId) {
            getData()
        }
    })

    return (
        <div>
            Pokemon Detail
            <img style={{width: '200px', height: '200px'}} src={pokemon.image} />
            <h6>Height {pokemon.height} </h6>
            <h6>Weight {pokemon.weight} </h6>
        </div>
    )
}


export default PokemonDetail