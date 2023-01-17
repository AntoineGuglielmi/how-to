import {
  ComputedRef,
  Ref
} from '@vue/reactivity';
import { TopicsStore } from '~/store';

const {
  topics
} = TopicsStore();

interface ITopicsFilter {
  tags: Ref<Array<string>>;
  tagsCount: ComputedRef<Array<[string,number]>>;
  setTag: (newTag: string) => void;
  topTags: any;
}

export const useTopicsFilter = (): ITopicsFilter => {

  const tags: Ref<Array<string>> = ref([]);

  const tagsCount = computed(() => {
    return topics.reduce((count: Array<[string,number]>, topic: any) => {
      for (const tag of topic.tags) {
        const indexInCount = count.findIndex((pair: [string,number]) => {
          return pair[0] === tag;
        });
        if (indexInCount === -1) {
          count.push([tag, 1]);
        } else {
          count[indexInCount][1] = count[indexInCount][1] + 1;
        }
      }
      return count;
    }, []);
  });

  const topTags = (howMany: number) => {
    return tagsCount.value.sort((a,b) => {
      return b[1] - a[1];
    }).slice(0,howMany);
  }

  const setTag = (newTag: string): void => {
    const indexIfInTags = tags.value.findIndex((tag: string) => tag === newTag);
    indexIfInTags === -1 ? tags.value.push(newTag) : tags.value.splice(indexIfInTags,1);
  }

  return {
    tags,
    tagsCount,
    setTag,
    topTags
  }

}
