import { createContext, useState } from "react";
import { RickMortyContextType, RickMortyContextProps } from '../types';

const initialValue = {
  searchInput: '',
  typeFilter: '',
  globalCharactersList: [],
  showDetails: false, 
  characterSelected: 0,
  setGlobalCharactersList: () => {},
  setShowDetails: () => {},
  setCharacterSelected: () => {},
  setTypeFilter: () => {},
  setSearchInput: () => {},
};



export const RickMortyContext = createContext<RickMortyContextType>(initialValue);

export const RickMortyContextProvider = ({ children } : RickMortyContextProps) => {
  const [ showDetails, setShowDetails ] = useState(initialValue.showDetails)
  const [ characterSelected, setCharacterSelected ] = useState(initialValue.characterSelected)
  const [ globalCharactersList, setGlobalCharactersList ] = useState(initialValue.globalCharactersList)
  const [ typeFilter, setTypeFilter ] = useState(initialValue.typeFilter)
  const [ searchInput, setSearchInput ] = useState(initialValue.searchInput)

  return (
    <RickMortyContext.Provider value={{ typeFilter, searchInput, setSearchInput, globalCharactersList, characterSelected, showDetails, setShowDetails, setCharacterSelected, setGlobalCharactersList, setTypeFilter }}> { children }</RickMortyContext.Provider>
  )
};
