import { createContext, useState } from 'react';
import { RickMortyContextType, RickMortyContextProps } from '../types';

const initialValue = {
  searchInput: '',
  typeFilter: '',
  showDetails: false, 
  characterSelected: 0,
  setShowDetails: () => {},
  setCharacterSelected: () => {},
  setTypeFilter: () => {},
  setSearchInput: () => {},
};

export const RickMortyContext = createContext<RickMortyContextType>(initialValue);

export const RickMortyContextProvider = ({ children } : RickMortyContextProps) => {
  const [ showDetails, setShowDetails ] = useState(initialValue.showDetails)
  const [ characterSelected, setCharacterSelected ] = useState(initialValue.characterSelected)
  const [ typeFilter, setTypeFilter ] = useState(initialValue.typeFilter)
  const [ searchInput, setSearchInput ] = useState(initialValue.searchInput)

  return (
    <RickMortyContext.Provider value={{ typeFilter, searchInput, setSearchInput, characterSelected, showDetails, setShowDetails, setCharacterSelected, setTypeFilter }}> { children }</RickMortyContext.Provider>
  )
};
