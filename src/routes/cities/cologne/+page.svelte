<script>
	import SvelteHead from "$lib/components/header/svelte-head.svelte";
	import WeatherDashboard from "$lib/components/weather-dashboard/weather-dashboard.svelte";
</script>

<SvelteHead city="Cologne" metaName="cologne" metaContent="Cologne Weather"/>

<WeatherDashboard city={"COLOGNE"} cityDescription={"KÖLLE"} />