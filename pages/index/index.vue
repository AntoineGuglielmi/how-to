<script lang="ts" setup>
	import { TopicsStore } from '~/store';

	const topicsTagFilter = inject('topicsTagFilter');

	const {
		tags,
	} = topicsTagFilter;

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

	<NuxtLink to="/aze">Wrong page</NuxtLink>

	<div class="mb-[1rem] text-center lg:text-left" v-if="tags.length">
		You're seeing a selection of topics corresponding to following tags:
		<List
			itemsNick="tag"
			:items="tags"
			:listStyle="{
				'flex justify-center mt-1 lg:mt-0 lg:inline-flex gap-2 ml-2': true
			}"
		>
			<template v-slot="{ tag }">
				<TopicTag
					:close="true"
					:tag="tag"
					:reactive="topicsTagFilter"
				/>
			</template>
		</List>
	</div>

	<List
		class="gap-6"
		:items="topics"
		itemsNick="topic"
		:listStyle="{
			'flex flex-col lg:gap-[3rem]': true
		}"
	>
		<template v-slot="{ topic }">
			<TopicIndex
				:topic="topic"
				:filter="topicsTagFilter"
			/>
		</template>
	</List>

</template>
