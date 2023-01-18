<script lang="ts" setup>
	const props = defineProps<{
		topic: any;
		filter: any;
	}>();

	const cutTitle = computed(() => {
		return (lines: number = 2) => {
			const titleArray = props.topic.title.split(' ');
			const words = titleArray.length;
			const wordsPerLine = Math.ceil(words / lines);
			const arrayOfArray = [];
			for (let i = 0; i < words; i += wordsPerLine) {
				arrayOfArray.push(titleArray.slice(i, i + wordsPerLine).join(' '))
			}
			return arrayOfArray.join('<br>');
		}
	});

</script>

<template>
	<div
		class="bg-gray-100/10 lg:hover:shadow-reg-1 rounded-[0.25rem] cursor-pointer transition-all duration-200 scale-100 lg:hover:scale-[1.005]"
	>

		<NuxtLink
			:to="topic.to"
			class="block TopicIndex-padding"
		>
<!--			<h2 class="text-[1.5rem] lg:text-[3rem] text-white text-center lg:text-left font-thin" v-html="cutTitle()" />-->
			<h2 class="text-[1.5rem] lg:text-[3rem] text-white text-center lg:text-left font-thin">{{ topic.title }}</h2>

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
		</NuxtLink>


	</div>
</template>
