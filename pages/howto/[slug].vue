<script lang="ts" setup>
 import { TopicsStore } from '~/store';
 const {
	 getTopicFromRoute
 } = TopicsStore();
 const route = useRoute();
 const topic = getTopicFromRoute(route);
 const component = defineAsyncComponent(() => import(`../../components/howto/${topic.component}.vue`))
</script>

<template>
	<Title1>{{ topic.title }}</Title1>
	<component
		:is="component"
	/>
</template>
