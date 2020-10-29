import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import PokemonDetail from './components/PokemonDetail'
//import 'bulma/css/bulma.css'

function App() {

  const [pokemons, setPokemons] = useState([])

  //componentDidMount
  useEffect(() => {
    console.log('Use effect getting called')

    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
            // response.data
          setPokemons(response.data.results)
      })
  }, [])

  return (
      <div style={{display: 'flex'}} >
          <div style={{display: 'flex', flexDirection: 'column'}} >
            <h4>Gotta Catch 'Em All</h4>
            {
              pokemons.map((pokemon, index) => {
                return (
                  <Link to={`/pokemon/${index+1}`}>
                    <p>{pokemon.name}</p>
                  </Link>
                )
              })
            }
          </div>  
          <div >
            <Route path="/pokemon/:pokemonId" component={PokemonDetail} />
          </div>  
      </div>
  )
}

export default App


//Multiple routes with Switch

//import React, { Component } from 'react'
// import Nav from './components/Nav'
// import {Route, Switch } from 'react-router-dom'
// import Home from './components/Home'
// import About from './components/About'
// import User from './components/User'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/user" component={User} />
//         </Switch>
//       </div>
//     )
//   }
// }
