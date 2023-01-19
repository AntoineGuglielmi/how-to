<script lang="ts" setup>

const props = withDefaults(defineProps<{
	fileName?: string;
	content?: string;
}>(), {
	fileName: '',
	content: ''
});

const code = ref<null|HTMLElement>(null);

const copy = () => {
	const copiedText = code.value?.outerText ?? '';
	const el = document.createElement('textarea');
	el.value = copiedText;
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
}

</script>

<template>
	<div class="relative bg-black/25 rounded-[0.25rem] p-4 my-4">
		<header class="flex">
			<code class="text-white/50 italic" v-if="fileName">{{ fileName }}</code>
		</header>
		<div class="overflow-x-scroll scrollbar scrollbar-h-[3px] scrollbar-thumb-white/50 scrollbar-track-rounded scrollbar-thumb-rounded scrollbar-track-black/75 pb-2 scrollbar-rounded-[2px]">

			<div class="prose" ref="code">
				<ContentDoc
					:path="content"
					:head="false"
				/>
			</div>

		</div>
	</div>
</template>
