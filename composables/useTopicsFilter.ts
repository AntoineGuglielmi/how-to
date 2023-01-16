import { Ref } from '@vue/reactivity';

interface ITopicsFilter {
  tags: Ref<Array<string>>;
  setTag: (newTag: string) => void;
}

export const useTopicsFilter = (): ITopicsFilter => {

  const tags: Ref<Array<string>> = ref([]);

  const setTag = (newTag: string): void => {
    const indexIfInTags = tags.value.findIndex((tag: string) => tag === newTag);
    indexIfInTags === -1 ? tags.value.push(newTag) : tags.value.splice(indexIfInTags,1);
  }

  return {
    tags,
    setTag
  }

}
