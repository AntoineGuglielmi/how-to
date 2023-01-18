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
		<Error/>
	</NuxtLayout>
</template>
