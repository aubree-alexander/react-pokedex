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

  const getPokemon = () => {
    setError(null)
    setLoading(true)
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
      .then(res => res.json())
      .then(json => setPokemon(json))
      .catch(err => {
        setError('Pokemon not found')
        setPokemon(null)
        setSearchTerm('')
      })
      .finally(() => setLoading(false))
  }

  const handleInputChange = e => {
    setSearchTerm(e.target.value)
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    // !! looks for truthy values
    if (!!searchTerm) {
      getPokemon()
    }
  }

  const reset = () => {
    setSearchTerm('')
    setError(null)
    setPokemon(null)
  }

  //conditionally render data
  const renderUI = () => {
    if (loading)
      return <Spinner />
    else if (error) 
      return <p className='error'>{error}</p>
    else if (pokemon)
      return <PokemonDetails pokemon={pokemon}/>
    else if (!searchTerm)
      return <p>Search a pokemon to get started.</p>
    else 
      return null
  }

  return (
    <>
    <Header />
    <SearchForm 
      searchTerm={searchTerm}
      handleInputChange={handleInputChange}
      handleFormSubmit={handleFormSubmit}
      reset={reset}
    />
    { renderUI() }
    </>
  );
}

export default App;
