import { useQuery } from '@tanstack/vue-query';
import { getPokemon } from '../helpers/get-pokemon';
import { watchEffect } from 'vue';

export const usePokemon = (id: string) => {
  const {
    isLoading,
    data: pokemon,
    isError,
    error
  } = useQuery(['pokemon', id], () => getPokemon(id), {
    retry: 0
  });

  watchEffect(() => {
    console.log('isLoading pokemon', isLoading);
  });

  return {
    //Props
    pokemon,
    isLoading,
    isError,
    error
  };
};
