<script lang="ts" setup>

  const props = withDefaults(defineProps<{
		close?: boolean;
		tag: string;
		reactive: any;
	}>(), {
		close: false
	});

	const {
		setTag
	} = props.reactive;

	const tagClasses = computed(() => {
		return (tag: string) => {
			return {
				'border-[#00DC82] text-[#00DC82]': tag === 'Nuxt3',
				'border-t-[#4285F4] border-r-[#34A853] border-b-[#FBBC05] border-l-[#EA4335] text-white': tag === 'Google',
				'border-t-[#FFC83F] border-r-[#FFC83F] border-b-[#76DF88] border-l-[#76DF88] text-white': tag === 'Pinia',
				'border-[#38bdf8] text-[#38bdf8]': tag === 'Tailwind',
				'border-white/75 text-white/75': !['Nuxt3', 'Google', 'Pinia', 'Tailwind'].includes(tag)
			}
		}
	});

</script>

<template>
	<button
		class="border py-[0.125em] px-[0.5em] rounded-full"
		:class="tagClasses(tag)"
		@click.prevent="setTag(tag)"
	>
		{{ tag }}
		<span v-if="close"><Icon name="material-symbols:close" /></span>
	</button>
</template>
