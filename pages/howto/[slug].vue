<script lang="ts" setup>
	import { TopicsStore } from '~/store';
	const {
		getTopicFromRoute
	} = TopicsStore();
	const route = useRoute();
	const topic = getTopicFromRoute(route);
	const title = computed(() => {
		return topic.title;
	});
	const metaTitle = computed(() => {
		return title.value.slice(0,1).toLowerCase() + title.value.slice(1);
	});
	const component = defineAsyncComponent(() => import(`../../components/howto/${topic.component}.vue`))
	const contentPath = computed(() => {
		return `howto/${topic.component}`;
	});
</script>

<template>
	<Head>
		<Title>How to {{ metaTitle }}</Title>
	</Head>
	<Title1 class="text-center lg:text-left">{{ title }}</Title1>
<!--	<component-->
<!--		:is="component"-->
<!--	/>-->
	<ContentDoc
		:head="false"
		:path="contentPath"
		class="howto--content prose flex flex-col gap-4"
	>
		<template #not-found>
			Page non trouvée
		</template>
	</ContentDoc>
</template>
