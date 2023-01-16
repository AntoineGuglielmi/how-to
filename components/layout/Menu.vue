<script lang="ts" setup>

	import { TopicsStore } from '~/store';
	import { Ref } from '@vue/reactivity';

	const {
		getTopicsBySearch
	} = TopicsStore();

	const show = ref(false);
	const search = ref('');

	const topics = computed(() => {
		return getTopicsBySearch(search.value);
	});

	const button: Ref<HTMLElement|null> = ref(null);

	const blur = (event: any) => {
		!event.relatedTarget && (show.value = false);
	}

	const clickLink = () => {
		button.value?.focus();
		show.value = !show.value;
		search.value = '';
	}

</script>

<template>
  <button
		@click="show = !show"
		@blur="blur"
		class="flex gap-0.5 items-center border border-white/25 rounded-[0.25rem] p-2 text-[1.25rem]"
		ref="button"
	>
		<Icon name="ph:dots-six-vertical-bold" />
	</button>

	<div
		v-if="show"
		class="absolute top-[calc(100%+2rem)] bg-howToPurple-700/50 rounded-[0.25rem] shadow-reg w-full max-w-[600px] animate-menu backdrop-blur-[9px]"
		@focusout="blur"
	>
		<ul>
			<li>
				<input
					type="search"
					placeholder="Search for topic..."
					v-model="search"
					class="bg-transparent block p-4 outline-0 w-full"
				>
			</li>
			<li
				v-for="(topic, index) in topics"
				:key="index"
			>
				<NuxtLink
					@click="clickLink"
					:to="topic.to"
					class="block p-4 border-t border-t-white/25"
				>
					<p>{{ topic.title }}</p>
				</NuxtLink>
			</li>
		</ul>
	</div>

</template>
