<script lang="ts" setup>
	const props = defineProps<{
		topic: any;
		filter: any;
	}>();

	const {
		setTag
	} = props.filter;

</script>

<template>
	<div
		class="bg-black/25 p-8 rounded-[0.25rem]"
	>

		<NuxtLink
			:to="topic.to"
			class="mb-2 block"
		>
			<h2 class="text-[1.5rem] lg:text-[3rem] text-white text-center lg:text-left font-thin">{{ topic.title }}</h2>
		</NuxtLink>

		<List
			:items="topic.tags"
			itemsNick="tag"
			:listStyle="{
				'flex gap-[0.75em] justify-center lg:justify-start text-[0.9rem]': true
			}"
		>
			<template v-slot="{ tag }">
				<TopicTag
					:tag="tag"
					:reactive="filter"
				/>
			</template>
		</List>

	</div>
</template>
