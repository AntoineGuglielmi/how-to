<script lang="ts" setup>
	import { TopicsStore } from '~/store';
	import { useTopicsFilter } from '~/composables';

	const topicFilter = useTopicsFilter();

	const {
		tags,
		setTag
	} = topicFilter;

	const {
		topics: topicsRaw
	} = TopicsStore();

	const topics = computed(() => {
		return topicsRaw.filter((topic: any) => {
			return tags.value.length ? topic.tags.some((tag: string) => {
				return tags.value.includes(tag);
			}) : true;
		})
	});
</script>

<template>

	<Head>
		<Title>How to</Title>
	</Head>

	<Hero />

	<div class="mb-[1rem]" v-if="tags.length">
		Topics corresponding to tags
		<ul class="inline-flex gap-1">
			<li
				v-for="(tag, index) in tags"
				:key="index"
			>
				<button
					class="border border-white/50 px-2 py-0.5 rounded-full"
					@click="setTag(tag)"
				>{{ tag }}
					<span><Icon name="material-symbols:close" /></span>
				</button>
			</li>
		</ul>.</div>

	<List
		class="gap-6"
		:items="topics"
		itemsNick="topic"
	>
		<template v-slot="{ topic }">
			<TopicIndex :topic="topic" :filter="topicFilter" />
		</template>
	</List>

</template>
