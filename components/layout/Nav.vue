<script lang="ts" setup>
const navLinks = [
	{
		text: 'About',
		href: '/about'
	}
]
</script>

<template>
  <nav class="py-4 text-white shadow-reg sticky top-0 bg-howToBrown-800 z-50">
		<Container>
			<div class="flex justify-between">
				<NuxtLink to="/">
					<p class="text-xl">Home</p>
				</NuxtLink>
				<ul class="flex gap-4">
					<li
						v-for="(link, index) in navLinks"
						:key="index"
					>
						<NuxtLink :to="link.href">{{ link.text }}</NuxtLink>
					</li>
				</ul>
			</div>
		</Container>
	</nav>
</template>
