import { useState, useEffect } from 'react'
import Header from './components/header'
import SearchForm from './components/searchForm'
import PokemonDetails from './components/pokemonDetails'
import Spinner from './components/spinner'

function App() {
  //usestate
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('ninetales')

  //useeffect
  //use empty array below to ensure this only runs once
  useEffect(() => {
    getPokemon()
  }, [])

  const getPokemon = () =>{
    setLoading(true)
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
      .then(res => res.json())
      //save data into state
      .then(json => setPokemon(json))
      .catch(err => setError('Pokemon not found.'))
      //no matter if .success or .catch runs, .finally will always run
      .finally(() => setLoading(false))
  }

  return (
    <>
    <Header />
    <SearchForm />
    <PokemonDetails />
    <Spinner />
    </>
  );
}

export default App;
