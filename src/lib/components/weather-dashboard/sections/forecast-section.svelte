<script lang="ts">
    import type { Forecast } from '$lib/interfaces';

    export let parsedForecastData: Forecast[];
</script>

<div class="absolute left-[-10%] bottom-20 grid grid-rows-1 col-span-1 gap-1 mt-6">
    {#each parsedForecastData as forecast}
    <div class="card rounded-[1.5rem] shadow-md grid grid-cols-5 gap-4 items-center">
        <!-- Left Section - Weather Info -->
        <div class="flex items-center space-x-2 p-4 col-span-3 rounded-lg">
            <!-- Day & Weather Type -->
            <div class="text-white">
                <h2 class="font-bold text-2xl">{forecast.date}</h2>
                <p class="text-lg">{forecast.description}</p>
            </div>
        </div>
        
        <!-- Right Section - Temperature -->
        <div class="bg-gradient-to-br variant-gradient-error-warning h-full rounded-3xl col-span-2 flex justify-center items-center">
            <h2 class="font-bold text-2xl">{forecast.temperatureC}°C</h2>
        </div>
    </div>
    {/each}
</div>