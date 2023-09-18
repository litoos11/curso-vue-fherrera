import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useIssuesStore = defineStore('issues', () => {
  //TODO: Crear enum
  const state = ref('');
  const labels = ref<string[]>([]);

  return {
    //State props
    state,
    labels,

    //Getters

    //Actions
    toggleLabel(labelName: string) {
      if (labels.value.includes(labelName)) {
        labels.value = labels.value.filter((label) => label !== labelName);
        return;
      }

      labels.value.push(labelName);
    }
  };
});
