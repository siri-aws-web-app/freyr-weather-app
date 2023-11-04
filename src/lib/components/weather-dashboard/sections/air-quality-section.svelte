<script lang="ts">
	import SpanGradient from "../../typography/span-gradient.svelte";
    import type { AirQuality } from '$lib/interfaces';

    export let airQuality: AirQuality;
</script>

<div class="prose prose-xl prose-invert px-10">
    <div class="flex justify-between">
        <h4 class="text my-0">
            CO:
        </h4>
        <h4 class="text my-0">
            <SpanGradient text="{airQuality.co.toString()} μg/m3" />
        </h4>
    </div>
    <hr class="!border-t-2 my-2" />
    <div class="flex justify-between">
        <h4 class="text my-0">
            PM2.5:
        </h4>
        <h4 class="text my-0">
            <SpanGradient text="{airQuality.pm2_5.toString()} μg/m3" />
        </h4>
    </div>
    <hr class="!border-t-2 my-2" />
    <div class="flex justify-between">
        <h4 class="text my-0">
            PM10:
        </h4>
        <h4 class="text my-0">
            <SpanGradient text="{airQuality.pm10.toString()} μg/m3" />
        </h4>
    </div>
    <hr class="!border-t-2 my-2" />
    <div class="flex justify-between">
        <h4 class="text my-0">
            Quality:
        </h4>
        <h4 class="text my-0">
            <SpanGradient text={airQuality.us_epa_index} />
        </h4>
    </div>
</div>