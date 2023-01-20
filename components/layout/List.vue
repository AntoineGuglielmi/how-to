<script lang="ts" setup>

  const props = withDefaults(defineProps<{
		items: any; // The items to list
		itemsNick?: string; // The items nickname defines the name under which items will be accessible
	}>(), {
		itemsNick: 'item' // By default, the items will be individually accessible by item property
	});

	// Create an object that groups nickname and index
	const bound = computed(() => {
		return (thing: any, index: number) => {
			return {
				[props.itemsNick]: thing,
				index
			}
		}
	});

	// The list slots
	const slots = useSlots();

	// Returns a boolean to display or not the separation items
	const showSepa = computed(() => {
		return (index: number) => {
			return (index < (props.items.length - 1)) && slots.sepa;
		}
	});

</script>

<template>
	<ul>

		<template
			v-for="(item, index) in items"
			:key="index"
		>

			<li>
				<slot v-bind="bound(item, index)"/>
			</li>

			<li v-if="showSepa(index)">
				<slot name="sepa" :index="index"/>
			</li>

		</template>

	</ul>
</template>
