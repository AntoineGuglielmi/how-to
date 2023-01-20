import { defineStore } from 'pinia';
import { Topics } from '~/data';
import {
  ComputedRef,
  Ref
} from '@vue/reactivity';

interface ITopicsStore {
  topics: Ref<Array<any>>;
  getTopicFromRoute: ComputedRef<(route: any) => any>;
  getTopicsBySearch: ComputedRef<(search: string) => any>;
  getTopicsByTopic: ComputedRef<(topic: string) => any>;
}

export const TopicsStore = defineStore('topics', (): ITopicsStore => {

  const randomNumberBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const shuffleArray = (arr: Array<any>) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

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

  const getTopicsBySearch = computed(() => {
    return (search: string) => {
      return topics.value.filter((topic: any) => {
        return topic.title.toLowerCase().includes(search.toLowerCase()) || topic.tags.some((tag: string) => {
          return tag.toLowerCase().includes(search.toLowerCase());
        });
      })
    }
  });

  const getTopicsByTopic = computed(() => {
    return (tag: string) => {
      return topics.value.filter((topic: any) => {
        return tag ? topic.tags.includes(tag) : true;
      })
    }
  });

  const getTopicFromRoute = computed(() => {
    return (route: any) => {
      return topics.value.filter((topic: any) => {
        return route.params.slug === topic.slug;
      })[0];
    }
  });

  return {
    topics,
    getTopicFromRoute,
    getTopicsBySearch,
    getTopicsByTopic
  }

});
