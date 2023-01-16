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

		<ul class="flex gap-[0.75em] justify-center lg:justify-start text-[0.9rem]">
			<li
				v-for="(tag, index) in topic.tags"
				:key="index"
			>
				<button
					class="border border-white/50 py-[0.125em] px-[0.5em] rounded-full text-white/50 text-[0.8em]"
					@click.prevent="setTag(tag)"
				>{{ tag }}</button>
			</li>
		</ul>

	</div>
</template>
