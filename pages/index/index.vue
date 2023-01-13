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
		:items="topics"
		itemsNick="topic"
	>
		<template v-slot="{ topic }">
			<NuxtLink
				:to="topic.to"
				class="block text-xxl text-white bg-black/25 p-8 rounded-[0.25rem]"
			>
				<h2>{{ topic.title }}</h2>
			</NuxtLink>
		</template>
	</List>

</template>
