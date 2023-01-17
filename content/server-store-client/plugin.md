```typescript
import { CodesStore } from '~/store';

export default defineNuxtPlugin(async (nuxtApp) => {
  await CodesStore(nuxtApp.$pinia).init();
});
```