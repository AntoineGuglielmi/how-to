<script lang="ts" setup>

	import { TopicsStore } from '~/store';

	const show = ref(false);
	const search = ref('');

	const topics = computed(() => {
		return [].concat(...TopicsStore().topics.filter((topic: any) => {
			return topic.title.toLowerCase().includes(search.value.toLowerCase());
		}).map((topic: any) => {
			return [
				{
					type: 'sepa',
					value: ''
				},
				{
					type: 'topic',
					value: topic
				}
			];
		}));
	});

	const link = ref(null);
	const button = ref(null);

	const blur = (event: any) => {
		!event.relatedTarget && (show.value = false);
	}

	const clickLink = () => {
		if (button !== null) {
			button.value.focus();
		}
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
<!--		<span class="h-1 w-1 bg-white block rounded-full"></span>-->
<!--		<span class="h-1 w-1 bg-white block rounded-full"></span>-->
<!--		<span class="h-1 w-1 bg-white block rounded-full"></span>-->
		<Icon name="ph:dots-six-vertical-bold" />
	</button>

	<div
		v-if="show"
		class="absolute top-[calc(100%+15px)] bg-howToPurple-900 border border-white/25 rounded-[0.25rem] shadow-reg w-[calc(full-1rem)] max-w-[450px]"
		@focusout="blur"
	>
		<ul>
			<li>
				<input
					type="search"
					placeholder="Search for subject..."
					v-model="search"
					class="bg-transparent block p-4 outline-0 w-full"
				>
			</li>
			<li
				v-for="(topic, index) in topics"
				:key="index"
			>
				<NuxtLink
					v-if="topic.type === 'topic'"
					@click="clickLink"
					:to="topic.value.to"
					class="block p-4"
					ref="link"
				>
					<p>{{ topic.value.title }}</p>
				</NuxtLink>
				<div v-else class="h-[1px] bg-white/25"></div>
			</li>
		</ul>
	</div>
</template>
