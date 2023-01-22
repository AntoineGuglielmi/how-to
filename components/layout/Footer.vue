<script lang="ts" setup>
	const footerLinks = [
		{
			icon: 'mdi:github',
			href: 'https://github.com/AntoineGuglielmi/how-to',
		}
	]
</script>

<template>
  <footer class="py-[3em] lg:py-[2em] border-t border-gray-100/10 text-[1.5em]">
		<Container>
			<List
				:items="footerLinks"
				nick="link"
			>
				<template #link="{ link }">
					<a
						:href="link.href"
						target="_blank"
						class="flex items-center"
					>
						<Icon v-if="link.icon" :name="link.icon"/>
					</a>
				</template>
			</List>
		</Container>
	</footer>
</template>
