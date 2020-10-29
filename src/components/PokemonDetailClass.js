import React, { Component } from 'react'
import axios from 'axios'

export default class PokemonDetail extends Component {

    state ={
        pokemon: {}
    }

    getData = () => {
        let id = this.props.match.params.pokemonId
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
                this.setState({
                    pokemon: pokemonData
                })
            })
    }

    componentDidMount(){
        this.getData()
    }

    componentDidUpdate() {
        console.log('Component did update here')
        // necessary to avoid infinte loops
        if (this.state.pokemon.id !== this.props.match.params.pokemonId) {
            this.getData()
        }
    }

    render() {

        return (
            <div>
                Pokemon Detail
                <img src={this.state.pokemon.image} />
            </div>
        )
    }
}