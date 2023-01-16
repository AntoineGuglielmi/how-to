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
		class="masonry sm:masonry-sm md:masonry-md"
		:items="topics"
		itemsNick="topic"
	>
		<template v-slot="{ topic }">
			<NuxtLink
				:to="topic.to"
				class="block bg-black/25 p-8 rounded-[0.25rem]"
			>
				<h2 class="text-[1.5rem] lg:text-[3rem] text-white text-center lg:text-left font-thin">{{ topic.title }}</h2>
			</NuxtLink>
		</template>
	</List>

</template>
