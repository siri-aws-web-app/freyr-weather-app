<script>
	import SvelteHead from "$lib/components/header/svelte-head.svelte";
	import WeatherDashboard from "$lib/components/weather-dashboard/weather-dashboard.svelte";

</script>

<SvelteHead city="Karlsruhe" metaName="karlsruhe" metaContent="Karlsruhe Weather"/>

<WeatherDashboard city={"KARLSRUHE"} cityDescription={"THE FAN-CITY"} />