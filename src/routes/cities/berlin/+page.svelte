<script>
	import SvelteHead from "$lib/components/header/svelte-head.svelte";
	import WeatherDashboard from "$lib/components/weather-dashboard/weather-dashboard.svelte";
</script>

<SvelteHead city="Berlin" metaName="berlin" metaContent="Berlin Weather"/>

<WeatherDashboard city={"BERLIN"} cityDescription={"THE METROPOLITAN CAPITOL"} />