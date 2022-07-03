import * as C from './styles';
import { useContext } from 'react';
import { RickMortyContext } from '../../context/RickMortyContext';
import { filters } from '../../helpers/filters'

export const SearchArea = () => {

  const { searchInput, typeFilter, setTypeFilter, setSearchInput } = useContext(RickMortyContext);
  
  const handleClick = (filterNow : string) => {
    setTypeFilter(filterNow);
  }

  const handleChange = (valueInput : string) => {
    setSearchInput(valueInput)
  }
  
  return ( 
  <C.SearchArea data-testid="searchArea">
    <C.InputLabel>
        <C.InputTitle>  
        <p>Buscando Por  {`${typeFilter}`}</p>  
        </C.InputTitle>
         <C.Input 
         value={searchInput}data-testid="input" placeholder='Pesquise Aqui!' onChange={({target})=> handleChange(target.value)}></C.Input>
        </C.InputLabel>
        <C.FilterButtons>
        <C.Button onClick={ () => handleClick(filters.FiltredByName) }>
          Buscar Por Nome  </C.Button>
       <C.Button onClick={ () => handleClick(filters.FiltredBySpecie) }>
          Buscar Por Specie
       </C.Button>
       <C.Button onClick={ () => handleClick(filters.FiltredByStatus) }>
          Buscar Por Status
       </C.Button>
        </C.FilterButtons>
       
    </C.SearchArea>
);
}

export default SearchArea;
