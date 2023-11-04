<script lang="ts">
	import SvelteHead from '$lib/components/header/svelte-head.svelte';
	import SpanGradient from '$lib/components/typography/span-gradient.svelte';
	import { fade, fly } from 'svelte/transition';
    import ForecastSection from './sections/forecast-section.svelte';
	import ClockSection from './sections/clock-section.svelte';
	import SnapshotsSection from './sections/snapshots-section.svelte';
	import { callApiServiceAndParceValue } from '$lib/utils/get-weather-data';
	import { onMount } from 'svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
    import type { AirQuality, CurrentWeather, Forecast, Wind } from '$lib/interfaces';
	import AirQualitySection from './sections/air-quality-section.svelte';
	import WindSection from './sections/wind-section.svelte';

    export let city: string;
    export let cityDescription: string;
    export let cityBanner: any;
    export let citySnapshots1: any;
    export let citySnapshots2: any;

    let loadingState = true;

    let fullForecastData: any;
    let parsedForecastData: Forecast[];

    let fullWeatherData: any;
    let currentWeather: CurrentWeather;

    let airQuality: AirQuality;

    let wind: Wind;

    // Build forecast data
    $: if (fullForecastData) {
        parseForecastData(fullForecastData);
    }

    $: if (fullWeatherData) {
        parseCurrentWeatherData(fullWeatherData);
        parseAirQualityData(fullWeatherData);
        parseWindData(fullWeatherData);
    }

    onMount(() => {
        loadWeatherData();
    });

    async function loadWeatherData () {
        try{
            fullWeatherData = await callApiServiceAndParceValue("getCurrentWeatherData", city);
            fullForecastData = await callApiServiceAndParceValue("getForecastData", city);
        } catch (error) {
            console.log(error);
        } finally {
            loadingState = false;
        }
    }

    function parseCurrentWeatherData(fullWeatherDataObject: any) {
        currentWeather = {
            temperatureC: fullWeatherDataObject.current.temp_c,
            description: fullWeatherDataObject.current.condition.text
        };
    }

    function parseForecastData(fullForecastDataObject: any) {
        let forecastDays = fullForecastDataObject.forecast.forecastday.slice(1, 3);
        
        parsedForecastData = [
            {
                date: getWeekDayFromDate(forecastDays[0].date),
                temperatureC: forecastDays[0].day.avgtemp_c,
                description: forecastDays[0].day.condition.text
            },
            {
                date: getWeekDayFromDate(forecastDays[1].date),
                temperatureC: forecastDays[1].day.avgtemp_c,
                description: forecastDays[1].day.condition.text
            }
        ];
    }

    function parseAirQualityData(fullWeatherDataObject: any) {
        interface UsEpaIndexToHuman {
            [index: number]: string;
        }

        const usEpaIndexToHuman: UsEpaIndexToHuman = {
            1: "Good",
            2: "Moderate",
            3: "Borderline",
            4: "Unhealthy",
            5: "Wear Mask",
            6: "Passive Smoking"
        }

        airQuality = {
            co: fullWeatherDataObject.current.air_quality.co,
            pm2_5: fullWeatherDataObject.current.air_quality.pm2_5,
            pm10: fullWeatherDataObject.current.air_quality.pm10,
            us_epa_index: usEpaIndexToHuman[fullWeatherDataObject.current.air_quality["us-epa-index"]]
        }
    }

    function parseWindData(fullWeatherDataObject: any) {
        wind = {
            wind_kph: fullWeatherDataObject.current.wind_kph,
            wind_dir: fullWeatherDataObject.current.wind_dir,
            wind_degree: fullWeatherDataObject.current.wind_degree,
            gust_kph: fullWeatherDataObject.current.gust_kph
        }
    }

    function getWeekDayFromDate(dateStr: string): string {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    }
</script>

<SvelteHead city="About" metaName="about" metaContent="About this app" />

{#if loadingState}
    <div class="flex justify-center items-center h-screen">
        <ProgressRadial value={undefined} />    
    </div>
{:else}
    <div in:fade={{ duration:400 }}>
        <!-- Page Heading -->
        <article class="prose prose-xl prose-invert mx-auto my-8" in:fly={{ y:100, duration:1000 }}>
            <h1 class="text-center text mb-0">
                <SpanGradient text="{city}" />
            </h1>
            <h2 class="text-center mt-1">
                {cityDescription}
            </h2>
        </article>
    
        <section class="w-4/5 mx-auto" in:fly={{ y:100, duration:1000 }}>
    
            <div class="grid grid-cols-7 gap-4 container h-full mx-auto">
                <div class="col-span-7 relative mb-24">
                    <div class="drop-shadow-xl relative">
                        <img class="h-auto rounded-[2rem] brightness-100" src="{cityBanner}" alt="{"Karlsruhe"}">
                    </div>
                    
                    <div class="absolute bottom-0 transform translate-y-1/2 flex justify-center w-full" in:fly={{ y:100, duration:1000 }}>
                            <div class="card p-8 bg-gradient-to-br variant-gradient-error-warning rounded-[1.5rem] grid grid-cols-2">
                                <h7 class="text-white text-7xl font-bold text-center col-span-2 justify-self-center">
                                    { currentWeather.temperatureC }°C
                                </h7>
                                <h1 class="text-white text-2xl font-bold text-center col-span-2 justify-self-center mt-2 px-24">
                                    { currentWeather.description }
                                </h1>
                            </div>
                    </div>
                    
                    <div in:fly={{ x:-200, duration:1000 }}>
                        <ForecastSection parsedForecastData={parsedForecastData}/>
                    </div>
                    
                    <div in:fly={{ x:200, duration:1000 }}>
                        <ClockSection />
                    </div>
                </div>
    
    
                <div class="grid grid-rows-[4rem_1fr] col-span-2 gap-3 my-6 items-start">
                    <!-- Forecast section -->
                    <div class="prose prose-xl prose-invert p-0">
                        <h3 class="text-center text">
                            AIR <SpanGradient text="QUALITY" />
                        </h3>
                    </div>
                    <div class="card variant-surface-filled py-5">
                        <AirQualitySection airQuality={airQuality}/>
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
                        <SnapshotsSection col1={citySnapshots1} col2={citySnapshots2} />
                    </div>
                </div>
    
                <div class="grid grid-rows-[4rem_1fr] col-span-2 gap-3 my-6 items-start">
                    <!-- Forecast section -->
                    <div class="prose prose-xl prose-invert p-0">
                        <h3 class="text-center text">
                            CURRENT <SpanGradient text="WIND" />
                        </h3>
                    </div>
                    <div class="card variant-surface-filled py-5">
                        <WindSection wind={wind}/>
                    </div>
                </div>
            </div>
        </section>
    </div>
{/if}