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
	const contentPath = computed(() => {
		return `howto/${topic.component}`;
	});
</script>

<template>
	<Head>
		<Title>How to {{ metaTitle }}</Title>
	</Head>
	<Title1 class="text-center lg:text-left">{{ title }}</Title1>
	<ContentDoc
		:head="false"
		:path="contentPath"
		class="howto--content prose flex flex-col gap-8"
	>
		<template #not-found>
			<p class="text-[2rem]">Sorry, we're still confused on this topic <Icon name="twemoji:person-shrugging" /></p>
		</template>
	</ContentDoc>
</template>
