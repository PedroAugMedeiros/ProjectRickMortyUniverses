import { ReactNode } from "react";

export type RickMortyContextProps = { 
  children: ReactNode;
}

export type RickMortyContextType = {
  showDetails: boolean;
  characterSelected: number;
  setShowDetails: (newState: boolean) => void;
  setCharacterSelected: (newState: number) => void;
}
