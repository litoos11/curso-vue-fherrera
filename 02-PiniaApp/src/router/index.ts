import { createRouter, createWebHistory } from 'vue-router';
import Counter1PageVue from '@/counter/pages/Counter1Page.vue';
import CounterSetupPage from '@/counter/pages/CounterSetupPage.vue';
import ClientsLayout from '@/clients/layout/ClientsLayout.vue';
import ClientListPage from '@/clients/pages/ClientListPage.vue';
import ClientPage from '@/clients/pages/ClientPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/counter-1',
      name: 'counter-1',
      component: Counter1PageVue
    },
    {
      path: '/counter-2',
      name: 'counter-2',
      component: CounterSetupPage
    },
    {
      path: '/clients',
      name: 'clients',
      component: ClientsLayout,
      redirect: { name: 'list' },
      children: [
        { path: 'list', name: 'list', component: ClientListPage },
        { path: '/clients/:id', name: 'client-id', component: ClientPage }
      ]
    }
  ]
});
export default router;
