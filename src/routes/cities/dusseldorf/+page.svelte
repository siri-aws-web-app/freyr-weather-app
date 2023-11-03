<script>
	import SvelteHead from "$lib/components/header/svelte-head.svelte";
	import WeatherDashboard from "$lib/components/weather-dashboard/weather-dashboard.svelte";
</script>

<SvelteHead city="Dusseldorf" metaName="dusseldorf" metaContent="Dusseldorf Weather"/>

<WeatherDashboard city={"DUSSELDORF"} cityDescription={"THE FASHION CITY"} />