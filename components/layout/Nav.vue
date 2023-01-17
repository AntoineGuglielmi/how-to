<script lang="ts" setup>

const navLinks = [
	// {
	// 	text: 'About',
	// 	href: '/about'
	// }
];

const topicsTagFilter = inject('topicsTagFilter');

const {
	topTags
} = topicsTagFilter;
</script>

<template>
  <nav class="sticky top-0 py-4 text-white shadow-reg bg-howToPurple-900 z-50">
		<Container>
			<div class="flex justify-between relative">
				<div class="flex gap-6 items-center">

					<NuxtLink to="/">
						<p class="text-xl"><Icon name="ic:round-home" /></p>
					</NuxtLink>

					<Menu/>

					<div class="flex items-center">
						Top tags:
						<List
							:items="topTags(4)"
							itemsNick="pair"
							:listStyle="{
								'flex gap-1 ml-1 items-center': true
							}"
						>
							<template v-slot="{ pair }">
								<TopicTag
									:tag="pair[0]"
									:reactive="topicsTagFilter"
								/>
							</template>
						</List>
					</div>

				</div>

				<List
					v-if="navLinks.length"
					:items="navLinks"
					itemsNick="link"
					:listStyle="{
						'flex gap-4 items-center': true
					}"
				>
					<template
						v-slot="{ link }"
					>
						<NuxtLink :to="link.to">{{ link.text }}</NuxtLink>
					</template>
				</List>
			</div>
		</Container>
	</nav>
</template>
