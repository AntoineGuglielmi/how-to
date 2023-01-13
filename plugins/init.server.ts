import { defineNuxtPlugin } from '#app'
import { CodesStore } from '~/store';

export default defineNuxtPlugin(async (nuxtApp) => {
  console.log(`Trying to load all codes`);
  await CodesStore(nuxtApp.$pinia).init();
});
