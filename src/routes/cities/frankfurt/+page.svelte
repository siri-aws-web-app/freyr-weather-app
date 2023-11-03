<script>
	import SvelteHead from "$lib/components/header/svelte-head.svelte";
	import WeatherDashboard from "$lib/components/weather-dashboard/weather-dashboard.svelte";
</script>

<SvelteHead city="Frankfurt" metaName="frankfurt" metaContent="Frankfurt Weather"/>

<WeatherDashboard city={"FRANKFURT"} cityDescription={"MAINCITY"} />