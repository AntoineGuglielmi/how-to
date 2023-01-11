<script lang="ts" setup>
const colorPalette1 = {
	100: "#9793e6",
	200: "#7a73d6",
	300: "#665cc2",
	400: "#5440ad",
	500: "#483490",
	600: "#3e2973",
	700: "#342159",
	800: "#301947",
	900: "#2c1636",
};

const colorPalette2 = {
	100: '#f5b5b5',
	200: '#f1a3a3',
	300: '#dc8f8f',
	400: '#c77a7a',
	500: '#b36666',
	600: '#9c4d4d',
	700: '#8a3b3b',
	800: '#6e200c',
	900: '#471308'
}

</script>

<template>
	<Hero />
<!--	<template v-for="(value, key) in [...Object.values(colorPalette1), ...Object.values(colorPalette2)]">-->
<!--		<div class="w-[50px] h-[50px]" :style="`background-color: ${value};`">-->

<!--		</div>-->
<!--	</template>-->
	<p
		v-for="x in 10" class="my-8"
	>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda corporis eaque eos facere iusto,
		maxime minima necessitatibus non nostrum odio quia quibusdam quis reprehenderit saepe sequi similique temporibus voluptatem.</p>
</template>
