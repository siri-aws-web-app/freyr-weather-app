<script>
	import SvelteHead from "$lib/components/header/svelte-head.svelte";
	import WeatherDashboard from "$lib/components/weather-dashboard/weather-dashboard.svelte";
</script>

<SvelteHead city="Stuttgart" metaName="stuttgart" metaContent="Stuttgart Weather"/>

<WeatherDashboard city={"STUTTGART"} cityDescription={"HOME OF MERCEDES & PORSCHE"} />