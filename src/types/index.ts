import { ReactNode } from "react";

export type RickMortyContextProps = { 
  children: ReactNode;
}

export type RickMortyContextType = {
  globalCharactersList: any[];
  showDetails: boolean;
  characterSelected: number;
  setGlobalCharactersList: (newState: []) => void;
  setShowDetails: (newState: boolean) => void;
  setCharacterSelected: (newState: number) => void;
}
