import { ReactNode } from "react";

export type RickMortyContextProps = { 
  children: ReactNode;
}

export type RickMortyContextType = {
  globalCharactersList: any[];
  showDetails: boolean;
  characterSelected: number;
  typeFilter: string;
  searchInput: string;
  setGlobalCharactersList: (newState: []) => void;
  setShowDetails: (newState: boolean) => void;
  setCharacterSelected: (newState: number) => void;
  setTypeFilter: (newState: string) => void;
  setSearchInput: (newState: string) => void;
}

export type filtersArray = {
  FiltredBySpecie: string;
  FiltredByName: string;
  FiltredByStatus: string;
}
