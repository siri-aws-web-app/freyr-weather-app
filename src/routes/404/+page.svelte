<script>
	import SvelteHead from "$lib/components/header/svelte-head.svelte";
	import { fade } from "svelte/transition";
</script>

<!-- 404.svelte -->
<SvelteHead city="404" metaName="NotFound" metaContent="Page not found." />

<div class="container h-full mx-auto flex justify-center items-center">
    <article class="prose prose-xl prose-invert mx-auto" in:fade={{ duration:300}}>
		<h1 class="text-center text">
            It's a 404. Nothing to see here. Move along. 😇
		</h1>
    </article>
</div>