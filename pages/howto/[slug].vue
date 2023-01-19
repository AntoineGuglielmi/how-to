<script lang="ts" setup>
	import { TopicsStore } from '~/store';
	const {
		getTopicFromRoute
	} = TopicsStore();
	const route = useRoute();
	const topic = getTopicFromRoute(route);
	const title = computed(() => {
		return topic?.title ?? 'Display a topic that does not exist';
	});
	const metaTitle = computed(() => {
		return topic ? title.value.slice(0,1).toLowerCase() + title.value.slice(1) : `Topic not found`;
	});
	const contentPath = computed(() => {
		return `howto/${topic?.component ?? ''}`;
	});
</script>

<template>
	<Head>
		<Title v-if="topic">How to {{ metaTitle }}</Title>
		<Title v-else>{{ metaTitle }}</Title>
	</Head>
	<Title1 class="text-center lg:text-left flex flex-col">
		<span class="text-[0.5em]">How to</span>{{ title }}
	</Title1>

	<div v-if="!topic" class="howto--content prose flex flex-col gap-8">
		<p class="">Sorry, we don't have a solution to share in this topic. Actually, the topic doesn't exist either.</p>
	</div>

	<ContentDoc
		v-else
		:head="false"
		:path="contentPath"
		class="howto--content prose flex flex-col gap-8"
	>
		<template #empty>
			<div class="howto--content prose flex flex-col gap-8">
				<p class="">Sorry, we're still confused on this topic <!--<Icon name="twemoji:person-shrugging" />-->
					<Icon name="fluent-emoji:face-with-open-eyes-and-hand-over-mouth"/>
				</p>
			</div>
		</template>
	</ContentDoc>
</template>
