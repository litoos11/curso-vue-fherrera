import { computed, onMounted, ref } from 'vue';
import type { Pokemon } from '../interfaces';
import { getPokemons } from '../helpers/get-pokemons';

const pokemons = ref<Pokemon[]>([]);
const isLoading = ref<boolean>(true);

export const usePokemons = () => {
  // if (pokemons.value.length === 0) {
  // getPokemons().then((data) => {
  // pokemons.value = data;
  // isLoading.value = false;
  // });
  // }
  onMounted(async () => {
    const data = await getPokemons();
    pokemons.value = data;
    isLoading.value = false;
  });

  return {
    pokemons,
    isLoading,
    count: computed(() => pokemons.value.length)
  };
};
