<script lang="ts" setup>
const props = withDefaults(defineProps<{
	isAlone?: boolean;
	code?: string
}>(), {
	isAlone: true,
	code: ''
});

const codeClasses = computed(() => {
	return {
		'font-code text-[0.9rem]': true,
		'bg-howToBrown-900 rounded-[0.25rem] px-1 py-[0.075rem] inline': props.isAlone
	}
});
</script>

<template>
	<code
		:class="codeClasses"
	><slot/></code>
</template>
