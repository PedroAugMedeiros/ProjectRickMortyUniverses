import { createContext, useState } from "react";
import { RickMortyContextType, RickMortyContextProps } from '../types';

const initialValue = {
  showDetails: false, 
  characterSelected: 0,
  setShowDetails: () => {},
  setCharacterSelected: () => {},
};

export const RickMortyContext = createContext<RickMortyContextType>(initialValue);

export const RickMortyContextProvider = ({ children } : RickMortyContextProps) => {
  const [ showDetails, setShowDetails ] = useState(initialValue.showDetails)
  const [ characterSelected, setCharacterSelected ] = useState(initialValue.characterSelected)

  return (
    <RickMortyContext.Provider value={{ characterSelected, showDetails, setShowDetails, setCharacterSelected }}> { children }</RickMortyContext.Provider>
  )
};
