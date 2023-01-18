<script lang="ts" setup>
	import { useTopicsFilter } from '~/composables';
	const topicsTagFilter = useTopicsFilter();
	provide('topicsTagFilter', topicsTagFilter);

	const props = defineProps<{
		error: Object
	}>();

	console.log({
		error: props.error
	});
</script>

<template>
	<NuxtLayout>
		<Title1>How to... Oops</Title1>
		<ContentDoc
			:head="false"
			class="howto--content prose flex flex-col gap-8"
			path="404"
		/>
		<pre>{{error}}</pre>
	</NuxtLayout>
</template>
