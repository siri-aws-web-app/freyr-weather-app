<script lang="ts">
	import SvelteHead from '$lib/components/header/svelte-head.svelte';
	import SpanGradient from '$lib/components/typography/span-gradient.svelte';
	import { fade } from 'svelte/transition';
    import KaBanner from '$lib/images/banners/ka-cover.png';
    import ForecastSection from './sections/forecast-section.svelte';
	import ClockSection from './sections/clock-section.svelte';
	import SideSection from './sections/side-section.svelte';
	import SnapshotsSection from './sections/snapshots-section.svelte';

    export let city: string;
    export let cityDescription: string;
</script>

<SvelteHead city="About" metaName="about" metaContent="About this app" />

<!-- Page Heading -->
<article class="prose prose-xl prose-invert mx-auto my-8" in:fade={{ duration:400 }}>
	<h1 class="text-center text mb-0">
		<SpanGradient text="{city}" />
	</h1>
    <h2 class="text-center mt-1">
        {cityDescription}
    </h2>
</article>

<section class="w-4/5 mx-auto" in:fade={{ duration:400 }}>

    <div class="grid grid-cols-5 gap-4 container h-full mx-auto">
        <div class="col-span-5 relative mb-24">
            <div class="drop-shadow-xl relative">
                <img class="h-auto rounded-[2rem] brightness-100" src="{KaBanner}" alt="{"Karlsruhe"}">
            </div>
            
            <div class="absolute bottom-0 transform translate-y-1/2 w-full flex justify-center">
                    <div class="card p-8 bg-gradient-to-br variant-gradient-error-warning rounded-[1.5rem] grid grid-cols-2">
                        <h7 class="text-white text-7xl font-bold text-center col-span-2 justify-self-center">
                            21°C
                        </h7>
                        <h1 class="text-white text-2xl font-bold text-center col-span-2 justify-self-center mt-2">
                            Partially cloudy and rainy.
                        </h1>
                    </div>
            </div>

            <ForecastSection />

            <ClockSection />
        </div>


        <div class="grid grid-rows-[4rem_1fr] col-span-1 gap-3 my-6 items-start">
            <!-- Forecast section -->
            <div class="prose prose-xl prose-invert p-0">
                <h3 class="text-center text">
                    AIR <SpanGradient text="QUALITY" />
                </h3>
            </div>
            <div class="card variant-surface-filled py-5">
                <SideSection />
            </div>
        </div>

        <div class="grid grid-rows-[4rem_1fr] col-span-3 gap-3 my-6">
            <!-- Forecast section -->
            <div class="prose prose-xl prose-invert p-0">
                <h3 class="text-center text">
                    CITY IN <SpanGradient text="SNAPSHOTS" />
                </h3>
            </div>
            <div>
                <SnapshotsSection />
            </div>
        </div>

        <div class="grid grid-rows-[4rem_1fr] col-span-1 gap-3 my-6 items-start">
            <!-- Forecast section -->
            <div class="prose prose-xl prose-invert p-0">
                <h3 class="text-center text">
                    CURRENT <SpanGradient text="WIND" />
                </h3>
            </div>
            <div class="card variant-surface-filled py-5">
                <SideSection />
            </div>
        </div>
    </div>
</section>