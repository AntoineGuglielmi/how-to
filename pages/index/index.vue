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
				<h2 class="mb-2 text-[1.5rem] lg:text-[3rem] text-white text-center lg:text-left font-thin">{{ topic.title }}</h2>
				<ul class="flex gap-[0.75em] justify-center lg:justify-start text-[0.9rem]">
					<li
					v-for="(tag, index) in topic.tags"
					:key="index"
				><span class="border border-white/50 py-[0.125em] px-[0.5em] rounded-full text-white/50 text-[0.8em]">{{ tag }}</span></li>
				</ul>
			</NuxtLink>
		</template>
	</List>

</template>
