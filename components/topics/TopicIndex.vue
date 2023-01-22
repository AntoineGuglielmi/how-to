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
		class="TopicIndex-2"
	>

		<NuxtLink
			:to="topic.to"
			class="block TopicIndex-padding-link-2"
		>
			<h2 class="text-white text-[1.75em] text-center lg:text-left font-thin">{{ topic.title }}</h2>

			<List
				:items="topic.tags"
				nick="tag"
				class="flex gap-[0.75em] justify-center lg:justify-start text-[0.75em]"
			>
				<template #tag="{ tag }">
					<TopicTag
						:tag="tag"
						:reactive="filter"
					/>
				</template>
			</List>
		</NuxtLink>


	</div>
</template>
