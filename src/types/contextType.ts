import { ReactNode } from 'react';

export type RickMortyContextProps = {
  children: ReactNode;
}

export type RickMortyContextType = {
  showDetails: boolean;
  characterSelected: number;
  typeFilter: string;
  searchInput: string;
  setShowDetails: (newState: boolean) => void;
  setCharacterSelected: (newState: number) => void;
  setTypeFilter: (newState: string) => void;
  setSearchInput: (newState: string) => void;
}
