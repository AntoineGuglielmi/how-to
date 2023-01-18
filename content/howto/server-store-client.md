Let's have a store:

```typescript
import { defineStore } from 'pinia';
import { Ref } from '@vue/reactivity';

export const CodesStore = defineStore('main', () => {

  // It has to be a ref to be a state
  const storeState: Ref<{ [key: string]: any }> = ref({});

  const init = () => {
    // Fill storeState
  }

  return {
    storeState,
    init
  }
})
```

Then create a `./plugins/init.server.ts` file:

```typescript
import { CodesStore } from '~/store';

export default defineNuxtPlugin(async (nuxtApp) => {
  await CodesStore(nuxtApp.$pinia).init();
});
```
