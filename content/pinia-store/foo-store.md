```typescript
import { defineStore } from 'pinia';

import {
  ComputedRef,
  Ref
} from '@vue/reactivity';

interface IFooStore {
  foos: Ref;
  getFoo: ComputedRef;
  getFooBy: ComputedRef<(key: any) => any>;
  setFoo: (foo: any) => void;
}

export const FooStore = defineStore('foo', (): IFooStore => {

  // Any ref constant will be part of the store state
  const foos: Ref = ref([]);

  // Any computed constant will be getters
  const getFoo = computed(() => {
    return foos.value;
  });

  // Composables/getters can return functions with parameters too
  const getFooBy = computed(() => {
    return (key: any) => {
      // ...
    }
  });

  // Any function constant will be actions
  const setFoo = (foo: any) => {
    foos.value.push(foo);
  }

  // Any returned value will be available in components
  return {
    foos,
    getFoo,
    getFooBy,
    setFoo
  }

});
```
