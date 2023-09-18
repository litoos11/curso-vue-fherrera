<script setup lang="ts">
import { useRoute } from 'vue-router';
import { usePokemon } from '../composables/usePokemon';
import { useQueryClient } from '@tanstack/vue-query';

const route = useRoute();
const queryCliene = useQueryClient();

const { id } = route.params;
const { isLoading, isError, pokemon, error } = usePokemon(id.toString());

const invalidateQuerys = () => {
  queryCliene.invalidateQueries(['pokemon', id]);
};
</script>

<template>
  <button @click="invalidateQuerys">Invalidad query</button>
  <h3 v-if="isLoading">Cargando...</h3>
  <div v-else-if="isError">{{ error }}</div>

  <div v-else-if="pokemon">
    <h1>{{ pokemon.name }}</h1>
    <div class="character-container">
      <img :src="pokemon.frontSprite" :alt="pokemon.name" />
    </div>
  </div>
</template>
<style scoped>
.charecter-container {
  display: flex;
  flex-direction: row;
}

img {
  widows: 150px;
  border-radius: 5px;
}
</style>
