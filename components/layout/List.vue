<script lang="ts" setup>

  const props = withDefaults(defineProps<{
		items: unknown[]; // The items to list
		nick?: string; // The items nickname defines the name under which items will be accessible
		sepaOutter?: number; // Defines if separation slot has to be at the beginning and the end
	}>(), {
		nick: 'item',
		sepaOutter: 0
	});

	// The list slots
	const slots = useSlots();

	// Returns a boolean to display or not the separation items
	const showSepa = computed(() => {
		return (index: number) => {
			return (index < (props.items.length - 1)) && slots.sepa;
		}
	});

	const showSepaOutterBefore = computed(() => {
		return [11,10].includes(props.sepaOutter) && slots.sepa;
	});

	const showSepaOutterAfter = computed(() => {
		return [1,11].includes(props.sepaOutter) && slots.sepa;
	});

	const showItemBefore = computed(() => {
		return !!slots.before;
	});

	const showItemAfter = computed(() => {
		return !!slots.after;
	});

</script>

<template>
	<ul>

		<li v-if="showSepaOutterBefore">
			<slot name="sepa"/>
		</li>

		<li v-if="showItemBefore">
			<slot name="before" />
		</li>

		<template
			v-for="(item, index) in items"
			:key="index"
		>

			<li v-if="showSepa(index) || showItemBefore">
				<slot name="sepa" :index="index"/>
			</li>

			<li>
				<slot :name="nick" v-bind="{ [nick]: item, index }"/>
			</li>

			<li v-if="showSepa(index) || showSepaOutterAfter">
				<slot name="sepa" :index="index"/>
			</li>

		</template>

		<li v-if="showItemAfter">
			<slot name="after" />
		</li>

		<li v-if="showSepaOutterAfter">
			<slot name="sepa"/>
		</li>

	</ul>
</template>
