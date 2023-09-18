<script setup lang="ts">
import { usePokemons } from '../composables/usePokemons';
import PokemonCardList from '../components/PokemonCardList.vue';

const { count, pokemons, isLoading, isError, error } = usePokemons();
</script>

<template>
  <h3 v-if="isLoading">Cargando...</h3>
  <div v-else-if="isError">{{ error }}</div>

  <div v-else>
    <h1>Pokemon List ({{ count }})</h1>
    <PokemonCardList :pokemons="pokemons ?? []" />
  </div>
</template>
