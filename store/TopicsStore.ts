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
