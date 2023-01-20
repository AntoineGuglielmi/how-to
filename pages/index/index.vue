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

	<div class="mb-[1em] text-center lg:text-left border-b border-gray-100/10 pb-[1em]" v-if="tags.length">
		{{ topics.length }} topics correspond to following the tags:
		<List
			class="flex justify-center mt-1 lg:mt-0 lg:inline-flex gap-2 ml-2"
			itemsNick="tag"
			:items="tags"
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
		class="gap-[0.5em]"
		:items="topics"
		itemsNick="topic"
	>
		<template v-slot="{ topic }">
			<TopicIndex
				:topic="topic"
				:filter="topicsTagFilter"
			/>
		</template>
		<template #sepa>
			<hr class="h-[1px] w-full border-none bg-gradient-to-r from-gray-100/0 via-gray-100/10 to-gray-100/0 lg:from-gray-100/10 lg:to-gray-100/0">
		</template>
	</List>

</template>
