<script lang="ts" setup>
const navLinks = [
	// {
	// 	text: 'About',
	// 	href: '/about'
	// }
]
</script>

<template>
  <nav class="py-4 text-white shadow-reg sticky top-0 bg-howToPurple-900 z-50">
		<Container>
			<div class="flex justify-between">
				<div class="flex gap-6 items-center">
					<NuxtLink to="/">
						<p class="text-xl"><Icon name="ic:round-home" /></p>
					</NuxtLink>
					<Menu/>
				</div>
				<ul v-if="navLinks.length" class="flex gap-4">
					<li
						v-for="(link, index) in navLinks"
						:key="index"
					>
						<NuxtLink :to="link.to">{{ link.text }}</NuxtLink>
					</li>
				</ul>
			</div>
		</Container>
	</nav>
</template>
