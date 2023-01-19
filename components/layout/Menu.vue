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
	const links: Ref<Array<HTMLElement>> = ref([]);
	const inputSearch: Ref<HTMLElement|null> = ref(null);

	const blur = async (event: any) => {
		const isLink = links.value.some(link => {
			return link.$el === event.relatedTarget;
		});
		const isInput = (inputSearch.value === event.relatedTarget);
		if (!isLink && !isInput) {
			show.value = false;
		}
		return;
	}

	const clickLink = () => {
		show.value = !show.value;
		search.value = '';
	}

	const magnifyingClicked = async () => {
		show.value = !show.value;
	}

</script>

<template>
  <button
		@click="show = !show"
		@blur="blur"
		class="flex gap-0.5 items-center"
		ref="button"
	>
		<Icon name="heroicons-solid:magnifying-glass" />
	</button>

	<div
		v-show="show"
		class="absolute top-[calc(100%+2rem)] bg-howToPurple-700/50 rounded-[0.25rem] shadow-reg w-full animate-menu backdrop-blur-[9px] font-responsive"
		@focusout="blur"
	>
		<ul>
			<li>
				<input
					ref="inputSearch"
					type="search"
					@blur="blur"
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
					ref="links"
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
