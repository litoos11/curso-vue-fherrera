<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counter-options';
import { storeToRefs } from 'pinia';
import CounterOptionsValue from '../components/CounterOptionsValue.vue';

const counterStore = useCounterOptionsStore();
const { count, squareCount } = storeToRefs(counterStore);
const { increment, incrementBy } = counterStore;
</script>

<template>
  <h1>Pinia Options</h1>
  <h4>Counter: {{ count }}</h4>
  <h4>Squere: {{ squareCount }}</h4>
  <br />
  <button @click="increment()">+1</button>
  <button @click="incrementBy(2)">+2</button>
  <button @click="incrementBy(3)">+3</button>
  <button @click="counterStore.$reset()">Reset</button>

  <br />
  <CounterOptionsValue />
</template>

<style scoped>
button {
  margin-right: 5px;
}
</style>
