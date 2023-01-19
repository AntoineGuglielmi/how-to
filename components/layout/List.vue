<script lang="ts" setup>
  const props = withDefaults(defineProps<{
		items: any;
		itemsNick?: string;
		listStyle?: {
			[key: string]: boolean
		};
	}>(), {
		itemsNick: 'item',
		listStyle: {
			'flex flex-col': true
		}
	});

	const bound = computed(() => {
		return (thing: any, index: number) => {
			return {
				[props.itemsNick]: thing,
				index
			}
		}
	});
</script>

<template>
	<ul
		:class="listStyle"
	>
		<li
			v-for="(item, index) in items"
			:key="index"
		>
			<slot v-bind="bound(item, index)"/>
		</li>
	</ul>
</template>
