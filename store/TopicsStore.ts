import { defineStore } from 'pinia';

interface ITopicsStore {
  topics: Array<any>;
  getTopicFromRoute: any;
}

export const TopicsStore = defineStore('topics', (): ITopicsStore => {
  const topics = [
    {
      title: 'Import and use Google fonts in Nuxt3/Tailwind project',
      component: 'GoogleFont',
      to: {
        name: 'howto-slug',
        params: {
          slug: 'import-and-use-google-fonts-nuxt3-tailwind',
        }
      }
    },
    {
      title: 'Fill Pinia store on server side and use it on client side',
      component: 'ServerStoreClient',
      to: {
        name: 'howto-slug',
        params: {
          slug: 'fill-store-server-use-client',
        }
      }
    }
  ];

  const getTopicFromRoute = computed(() => {
    return (route: any) => {
      return topics.filter((topic: any) => {
        return route.params.slug === topic.to.params.slug;
      })[0];
    }
  });

  return {
    topics,
    getTopicFromRoute
  }
})
