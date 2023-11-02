<script lang="ts">
	import SvelteHead from '$lib/components/header/svelte-head.svelte';
	import SpanGradient from '$lib/components/typography/span-gradient.svelte';
	import { fade } from 'svelte/transition';
    import KaBanner from '$lib/images/banners/ka-b.png';
    import ForecastSection from './forecast-section.svelte';
	import ClockSection from './clock-section.svelte';
</script>

<SvelteHead city="About" metaName="about" metaContent="About this app" />

<!-- Page Heading -->
<article class="prose prose-xl prose-invert mx-auto my-8" in:fade={{ duration:400 }}>
	<h1 class="text-center text mb-0">
		<SpanGradient text="KARLSRUHE" />
	</h1>
    <h2 class="text-center mt-0">
        THE FAN-CITY
    </h2>
</article>

<section class="w-4/5 mx-auto" in:fade={{ duration:400 }}>

    <div class="grid grid-cols-5 gap-4 container h-full mx-auto justify-center items-center">
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


        <div class="grid grid-rows-[4rem_1fr_1fr] col-span-1 gap-3 mt-6">
            <!-- Forecast section -->
            <div class="prose prose-xl prose-invert p-0">
                <h3 class="text-center text">
                    The <SpanGradient text="Air Quality" />
                </h3>
            </div>
            <div class="card">
                
            </div>
        </div>

        <div class="grid grid-rows-[4rem_1fr_1fr] col-span-3 gap-3 mt-6">
            <!-- Forecast section -->
            <div class="prose prose-xl prose-invert p-0">
                <h3 class="text-center text">
                    Places To <SpanGradient text="Visit" />
                </h3>
            </div>
        </div>

        <div class="grid grid-rows-[4rem_1fr_1fr] col-span-1 gap-3 mt-6">
            <!-- Forecast section -->
            <div class="prose prose-xl prose-invert p-0">
                <h3 class="text-center text">
                    Current <SpanGradient text="Wind" />
                </h3>
            </div>
        </div>
    </div>
</section>