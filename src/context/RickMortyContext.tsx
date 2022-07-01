import { createContext, useState } from "react";
import { RickMortyContextType, RickMortyContextProps } from '../types';

const initialValue = {
  globalCharactersList: [],
  showDetails: false, 
  characterSelected: 0,
  setGlobalCharactersList: () => {},
  setShowDetails: () => {},
  setCharacterSelected: () => {},
};



export const RickMortyContext = createContext<RickMortyContextType>(initialValue);

export const RickMortyContextProvider = ({ children } : RickMortyContextProps) => {
  const [ showDetails, setShowDetails ] = useState(initialValue.showDetails)
  const [ characterSelected, setCharacterSelected ] = useState(initialValue.characterSelected)
  const [ globalCharactersList, setGlobalCharactersList ] = useState(initialValue.globalCharactersList)

  return (
    <RickMortyContext.Provider value={{ globalCharactersList, characterSelected, showDetails, setShowDetails, setCharacterSelected, setGlobalCharactersList }}> { children }</RickMortyContext.Provider>
  )
};
