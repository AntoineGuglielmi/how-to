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
    Fill
  }
})
```