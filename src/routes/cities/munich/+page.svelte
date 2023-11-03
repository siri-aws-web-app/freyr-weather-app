<script>
	import SvelteHead from "$lib/components/header/svelte-head.svelte";
	import WeatherDashboard from "$lib/components/weather-dashboard/weather-dashboard.svelte";
</script>

<SvelteHead city="Munich" metaName="munich" metaContent="Munich Weather"/>

<WeatherDashboard city={"MUNICH"} cityDescription={"JUST MUNICH & OKTOBERFEST"} />