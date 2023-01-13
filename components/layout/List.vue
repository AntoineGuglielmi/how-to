<script lang="ts" setup>
  const props = withDefaults(defineProps<{
		items: any,
		itemsNick?: string,
		listStyle?: {
			[key: string]: boolean
		}
	}>(), {
		itemsNick: 'item',
		listStyle: {
			'flex flex-col gap-2': true
		}
	});

	const bound = computed(() => {
		return (thing: any) => {
			return {
				[props.itemsNick]: thing
			}
		}
	});
</script>

<template>
	<ul
		:class="listStyle"
	>
		<li v-for="item in items">
			<slot v-bind="bound(item)"/>
		</li>
	</ul>
</template>
