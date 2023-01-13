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
      href: '/howto/import-and-use-google-fonts-nuxt3-tailwind',
      to: {
        name: 'howto-slug',
        params: {
          slug: 'import-and-use-google-fonts-nuxt3-tailwind',
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
