import { defineStore } from 'pinia';
import { Topics } from '~/data';
import { Ref } from '@vue/reactivity';

interface ITopicsStore {
  topics: Ref<Array<any>>;
  getTopicFromRoute: any;
}

export const TopicsStore = defineStore('topics', (): ITopicsStore => {
  const topics = ref(Topics.map((topic: any) => {
    return {
      ...topic,
      to: {
        name: 'howto-slug',
        params: {
          slug: topic.slug
        }
      }
    }
  }));

  const getTopicFromRoute = computed(() => {
    return (route: any) => {
      return topics.value.filter((topic: any) => {
        return route.params.slug === topic.slug;
      })[0];
    }
  });

  return {
    topics,
    getTopicFromRoute
  }
})
