import { defineNuxtPlugin } from '#app'
import { MainStore } from '~/store';

export default defineNuxtPlugin(async (nuxtApp) => {
  await MainStore(nuxtApp.$pinia).init();
});
