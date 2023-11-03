<script>
	import SvelteHead from "$lib/components/header/svelte-head.svelte";
	import WeatherDashboard from "$lib/components/weather-dashboard/weather-dashboard.svelte";
</script>

<SvelteHead city="Dortmund" metaName="dortmund" metaContent="Dortmund Weather"/>

<WeatherDashboard city={"DORTMUND"} cityDescription={"GREEN METROPOLIS"} />