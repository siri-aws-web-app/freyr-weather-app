<script>
	import SvelteHead from "$lib/components/header/svelte-head.svelte";
	import WeatherDashboard from "$lib/components/weather-dashboard/weather-dashboard.svelte";
</script>

<SvelteHead city="Hamburg" metaName="hamburg" metaContent="Hamburg Weather"/>

<WeatherDashboard city={"HAMBURG"} cityDescription={"FREE & HANSEATIC CITY"} />