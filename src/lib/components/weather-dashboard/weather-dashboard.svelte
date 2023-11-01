<script lang="ts">
	import SvelteHead from '$lib/components/header/svelte-head.svelte';
	import SpanGradient from '$lib/components/typography/span-gradient.svelte';
	import { fade } from 'svelte/transition';
</script>

<SvelteHead city="About" metaName="about" metaContent="About this app" />

<article class="prose prose-xl prose-invert mx-auto my-8" in:fade={{ duration:400 }}>
	<h1 class="text-center text">
		<SpanGradient text="Karlsruhe" />
	</h1>
</article>