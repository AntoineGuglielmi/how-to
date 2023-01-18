<script lang="ts" setup>

</script>

<template>
	<NuxtErrorBoundary>
		<Title1 class="text-center lg:text-left flex flex-col">
			<span class="text-[0.5em]">How to</span>Display a page that does not exist
		</Title1>
		<ContentDoc
			:head="false"
			class="howto--content prose flex flex-col gap-8"
			path="page-not-found"
		/>
	</NuxtErrorBoundary>
</template>
