<script setup lang="ts">
import ClientList from '@/clients/components/ClientList.vue';
import PaginationNumber from '@/clients/components/PaginationNumber.vue';
import LoadingModal from '@/shared/components/LoadingModal.vue';
import useClients from '../composables/useClients';

const { isLoading, clients, currentPage, totalPages, getPage } = useClients();
</script>

<template>
  <div>
    <h1>Listado de clientes</h1>
    <!-- Client List -->
    <ClientList :clients="clients" />

    <!-- PaginationNumbers -->
    <PaginationNumber
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-changed="(page) => getPage(page)"
    />

    <!-- LoadingModal -->
    <LoadingModal v-if="isLoading" />
  </div>
</template>

<style scoped></style>
