<script>
	import SvelteHead from "$lib/components/header/svelte-head.svelte";
	import WeatherDashboard from "$lib/components/weather-dashboard/weather-dashboard.svelte";
</script>

<SvelteHead city="Leipzig" metaName="leipzig" metaContent="Leipzig Weather"/>

<WeatherDashboard city={"LEIPZIG"} cityDescription={"CITY OF HEROES"} />