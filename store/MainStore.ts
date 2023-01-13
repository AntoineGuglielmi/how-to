import { defineStore } from 'pinia';

export const MainStore = defineStore('main', () => {

  const codesDirectory = './code';
  const codes: {[key: string]: string} = {};

  const init = async () => {
    if (process.server) {
      await scan(codesDirectory);
      console.log({
        codes
      });
    }
  }

  const scan = async (dir: string) => {
    const fs = await import('fs');
    const scandir = fs.readdirSync(dir);
    for (const item of scandir) {
      const itemLong = `${dir}/${item}`;
      if (fs.lstatSync(itemLong).isDirectory()) {
        await scan(itemLong);
      } else {
        codes[item] = fs.readFileSync(itemLong).toString();
      }
    }
  }

  const code = (key: string) => {
    return codes[key] ?? '';
  }

  return {
    codes,
    init,
    code
  }
})
