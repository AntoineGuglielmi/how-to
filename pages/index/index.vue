<script lang="ts" setup>
	import { TopicsStore } from '~/store';
	const {
		topics
	} = TopicsStore();
</script>

<template>
	<Head>
		<Title>How to</Title>
	</Head>
	<Hero />
	<List
		class="flex flex-col gap-4"
		:items="topics"
		itemsNick="topic"
	>
		<template v-slot="{ topic }">
			<NuxtLink
				:to="topic.to"
				class="block bg-black/25 p-8 rounded-[0.25rem]"
			>
				<h2 class="text-[1.5rem] xl:text-xxl text-white">{{ topic.title }}</h2>
			</NuxtLink>
		</template>
	</List>

</template>
