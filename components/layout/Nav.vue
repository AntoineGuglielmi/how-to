<script lang="ts" setup>

const displayTopTags = ref(false);

const navLinks = [
	{
		text: 'About',
		href: '/about'
	}
];

const topicsTagFilter = inject('topicsTagFilter');

const {
	topTags
} = topicsTagFilter;
</script>

<template>
  <nav class="sticky top-0 py-4 text-white shadow-reg bg-howToPurple-900 z-50 text-[1.5em]">
		<Container>
			<div class="flex justify-between relative">
				<div class="flex gap-6 items-center">

					<NuxtLink to="/">
						<p class=""><Icon name="ic:round-home" /></p>
					</NuxtLink>

					<Menu/>

					<div
						v-if="displayTopTags"
						class="flex items-center"
					>
						Top tags:
						<List
							:items="topTags(4)"
							nick="pair"
							class="flex gap-1 ml-1 items-center"
						>
							<template #pair="{ pair }">
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
					nick="link"
					class="flex gap-4 items-center font-responsive"
				>
					<template
						#link="{ link }"
					>
						<NuxtLink :to="link.to">{{ link.text }}</NuxtLink>
					</template>
				</List>
			</div>
		</Container>
	</nav>
</template>
