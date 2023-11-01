<script lang="ts">
	import SvelteHead from '$lib/components/header/svelte-head.svelte';
	import SpanGradient from '$lib/components/typography/span-gradient.svelte';
	import { fade } from 'svelte/transition';
    import KaBanner from '$lib/images/banners/ka-b.png';

</script>

<SvelteHead city="About" metaName="about" metaContent="About this app" />

<article class="prose prose-xl prose-invert mx-auto my-8" in:fade={{ duration:400 }}>
	<h1 class="text-center text">
		<SpanGradient text="Karlsruhe" />
	</h1>
</article>

<section class="w-3/5 mx-auto" in:fade={{ duration:400 }}>
    <div class="grid grid-cols-3 gap-4 container h-full mx-auto justify-center items-center">
        <div class="drop-shadow-xl col-span-3">
            <img class="h-auto rounded-[2rem] brightness-50" src="{KaBanner}" alt="{"Karlsruhe"}">
            <div class="absolute inset-0 flex justify-center items-center">
                <div class="card p-10 bg-gradient-to-br variant-gradient-error-warning rounded-[2rem] grid grid-cols-2">
                    <h1 class="text-white text-8xl font-bold text-center col-span-2 justify-self-center">
                        21°C
                    </h1>
                    <h1 class="text-white text-3xl font-bold text-center col-span-2 justify-self-center mt-2">
                        Partially cloudy and rainy.
                    </h1>
                </div>
            </div>
        </div>
        <div class="card p-4 shadow-xl">
            <h2 class="text-center text">
                <SpanGradient text="Air" />
            </h2>
        </div>
        <div class="card p-4 shadow-xl">
            <h2 class="text-center text">
                <SpanGradient text="Co2" />
            </h2>
        </div>
        <div class="card p-4 shadow-xl">
            <h2 class="text-center text">
                <SpanGradient text="Stuff" />
            </h2>
        </div>
    </div>
</section>