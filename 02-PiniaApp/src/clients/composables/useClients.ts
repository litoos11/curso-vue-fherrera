import clientsApi from '@/api/clients-api';
import type { Client } from '@/clients/interfaces/client';
import { useClientsStore } from '@/store/clients';
import { useQuery } from '@tanstack/vue-query';
import { storeToRefs } from 'pinia';
import { computed, watch } from 'vue';

const getClients = async (page: number): Promise<Client[]> => {
  //await new Promise((resolve) => {
  //setTimeout(() => resolve(true), 2500);
  //});
  const { data } = await clientsApi.get<Client[]>(`/clients?_page=${page}`);

  return data;
};

const useClients = () => {
  const store = useClientsStore();
  const { currentPage, clients, totalPages } = storeToRefs(store);

  const { isLoading, data } = useQuery(
    ['clients?page=', currentPage],
    () => getClients(currentPage.value),
    {
      // staleTime: 1000 * 60
    }
  );

  watch(
    data,
    (clients) => {
      if (clients) store.setClients(clients);
    },
    { immediate: true }
  );

  return {
    //Props
    clients,
    isLoading,
    currentPage,
    totalPages,

    // Methods
    getPage(page: number) {
      store.setPage(page);
    },

    // Getters
    totalPageNumbers: computed(() =>
      [...new Array(totalPages.value)].map((value, index) => index + 1)
    )
  };
};

export default useClients;
