<script lang="ts" setup>
	import { useTopicsFilter } from '~/composables';
	const topicsTagFilter = useTopicsFilter();
	provide('topicsTagFilter', topicsTagFilter);

	const props = defineProps<{
		error: Object
	}>();

	const error = props.error;

	console.log({
		error
	});
</script>

<template>
	<Head>
		<Title>Page not found</Title>
	</Head>
	<NuxtLayout>
		<Title1 class="text-center lg:text-left flex flex-col">
			<span class="text-[0.5em]">How to</span>Display a page that does not exist
		</Title1>
		<div class="howto--content prose flex flex-col gap-8">
			<p>Sorry, the page <code>{{ error.url }}</code> does not exist, and we don't have a solution for this issue.</p>
			<p>You can go back to <NuxtLink href="/">home</NuxtLink>.</p>
		</div>
	</NuxtLayout>
</template>
