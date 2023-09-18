import type { Pokemon } from '@/pokemons/interfaces';
import { reactive } from 'vue';

interface Store {
  // State
  pokemons: {
    list: Pokemon[];
    count: number;
    isLoading: boolean;
    hasError: boolean;
    errroMessage?: string;
  };

  //Actions/Methjods
  startLoadingPokemons: () => Promise<void>;
  loadedPokemons: (data: Pokemon[]) => void;
  loadPokemonsFailed: (error: string) => void;
}

const store = reactive<Store>({
  pokemons: {
    list: [],
    count: 0,
    isLoading: false,
    hasError: false,
    errroMessage: undefined
  },
  startLoadingPokemons: async function (): Promise<void> {
    this.pokemons = {
      ...this.pokemons,
      isLoading: true,
      hasError: false,
      errroMessage: undefined
    };
  },
  loadedPokemons: function (data: Pokemon[]): void {
    this.pokemons = {
      list: data,
      count: data.length,
      isLoading: false,
      hasError: false,
      errroMessage: undefined
    };
  },
  loadPokemonsFailed: function (error: string): void {
    this.pokemons = {
      ...this.pokemons,
      isLoading: false,
      hasError: true,
      errroMessage: error
    };
  }
});

export default store;
