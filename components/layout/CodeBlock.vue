<script lang="ts" setup>
import { CodesStore } from '~/store';
const {
	code: getCode
} = CodesStore();

const props = withDefaults(defineProps<{
	fileName?: string;
	content?: string;
}>(), {
	fileName: '',
	content: ''
});

const code = ref<null|HTMLElement>(null);

const copy = () => {
	console.log({
		code
	});
	const copiedText = code.value?.outerText ?? '';
	console.log({
		copiedText
	});
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
			<code class="text-white/50 text-[0.75rem] italic" v-if="fileName">{{ fileName }}</code>
<!--			<button-->
<!--				class="ml-auto"-->
<!--				@click.prevent="copy"-->
<!--			>Copy</button>-->
		</header>
		<div class="overflow-x-scroll scrollbar scrollbar-h-[4px] scrollbar-thumb-howToPurple-700 scrollbar-track-howToPurple-800 pb-2 scrollbar-rounded-[2px]">
<!--			<code-->
<!--				ref="code"-->
<!--			>{{ getCode(content) }}</code>-->

			<div class="prose" ref="code">
				<ContentDoc
					:path="content"
				/>
			</div>

		</div>
	</div>
</template>
