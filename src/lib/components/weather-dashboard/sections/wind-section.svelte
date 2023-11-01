<script lang="ts">
	import SpanGradient from "../../typography/span-gradient.svelte";
    import type { Wind } from '$lib/interfaces';

    export let wind: Wind;
</script>

<div class="prose prose-xl prose-invert px-10">
    <div class="flex justify-between">
        <h4 class="text my-0">
            Speed:
        </h4>
        <h4 class="text my-0">
            <SpanGradient text="{wind.wind_kph.toString()} km/h" />
        </h4>
    </div>
    <hr class="!border-t-2 my-2" />
    <div class="flex justify-between">
        <h4 class="text my-0">
            Gust:
        </h4>
        <h4 class="text my-0">
            <SpanGradient text="{wind.gust_kph.toString()} km/h" />
        </h4>
    </div>
    <hr class="!border-t-2 my-2" />
    <div class="flex justify-between">
        <h4 class="text my-0">
            Direction:
        </h4>
        <h4 class="text my-0">
            <SpanGradient text={wind.wind_dir.toString()} />
        </h4>
    </div>
    <hr class="!border-t-2 my-2" />
    <div class="flex justify-between">
        <h4 class="text my-0">
            Degree:
        </h4>
        <h4 class="text my-0">
            <SpanGradient text="{wind.wind_degree.toString()}°" />
        </h4>
    </div>
</div>