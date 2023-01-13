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

const code = ref(null);

const copy = () => {
	const copiedText = code?.value.innerText ?? '';
	const el = document.createElement('textarea');
	el.value = copiedText;
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
}

// const test = ref('');
// if(process.server) {
// 	const fs = await import('fs');
// 	test.value = fs.readFileSync(`./code/${props.content}.txt`).toString();
// }

</script>

<template>
	<div class="relative bg-black/25 rounded-[0.25rem] p-4 my-4">
		<header class="flex">
			<code class="text-white/50 text-[0.75rem] italic" v-if="fileName">{{ fileName }}</code>
			<button
				class="ml-auto"
				@click.prevent="copy"
			>Copy</button>
		</header>
		<code
			ref="code"
		>{{getCode(content)}}</code>
	</div>
</template>
