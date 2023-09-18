<script setup lang="ts">
import type { Pokemon } from '../interfaces';
import { useRouter } from 'vue-router';
import { useQueryClient } from '@tanstack/vue-query';
import { getPokemon } from '../helpers/get-pokemon';

interface Props {
  pokemon: Pokemon;
}

const props = defineProps<Props>();
const router = useRouter();
const queryCliene = useQueryClient();

const goTo = () => {
  router.push({
    name: 'pokemon-id',
    params: { id: props.pokemon.id }
  });
};

const prefechtPokemon = () => {
  const id = props.pokemon.id.toString();
  queryCliene.prefetchQuery({
    queryKey: ['pokemon', id],
    queryFn: () => getPokemon(id)
  });
};
</script>

<template>
  <div class="pokemon-card" @click="goTo" @mouseenter="prefechtPokemon">
    <img :src="pokemon.frontSprite" alt="pokemon.name" />
    <h3>{{ pokemon.name }}</h3>
  </div>
</template>

<style scoped>
.pokemon-card {
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
}

img {
  width: 150px;
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1);
  transition: all 0.5s;
}
img:hover {
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.5);
  transition: all 0.5s;
}
</style>
