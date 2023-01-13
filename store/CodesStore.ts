import { defineStore } from 'pinia';
import { Ref } from '@vue/reactivity';

export const CodesStore = defineStore('main', () => {

  const codesDirectory = './code';
  const codes: Ref<{[key: string]: string}> = ref({});

  const init = async () => {
    await scan(codesDirectory);
  }

  const scan = async (dir: string) => {
    const fs = await import('fs');
    const scandir = fs.readdirSync(dir);
    for (const item of scandir) {
      const itemLong = `${dir}/${item}`;
      if (fs.lstatSync(itemLong).isDirectory()) {
        await scan(itemLong);
      } else {
        const itemName = itemLong
          .split('/').slice(2).join('/')
          .split('.').slice(0,-1).join('.');
        codes.value[itemName] = fs.readFileSync(itemLong).toString();
      }
    }
  }

  const code = computed(() => {
    return (key: string) => {
      return codes.value[key] ?? '';
    }
  });

  return {
    codes,
    init,
    code
  }
})
