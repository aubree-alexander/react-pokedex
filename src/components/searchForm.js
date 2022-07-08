import Container from './container'

const SearchForm = props => {
    return (
       <form onSubmit={props.handleFormSubmit}>
        <Container>
            <input 
                value={props.searchTerm}
                onChange={props.handleInputChange}
                placeholder='Search Pokemon...'
                type='text'
            /> 
            {/* conditional rendering */}
            {props.searchTerm && (
                <button
                    onClick={props.reset}
                    type='button'
                >
                    Clear
                </button>
            )}
        </Container>
       </form>
    )
}

export default SearchForm