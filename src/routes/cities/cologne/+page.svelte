<script>
	import SvelteHead from "$lib/components/header/svelte-head.svelte";
	import WeatherDashboard from "$lib/components/weather-dashboard/weather-dashboard.svelte";
	import CoCover from "$lib/images/banners/co-cover.png";

	const snapshots1 = [
		{ image: import('$lib/images/snapshots/cologne/1.png') },
		{ image: import('$lib/images/snapshots/cologne/2.png') },
		{ image: import('$lib/images/snapshots/cologne/4.png') },
	];

	const snapshots2 = [
		{ image: import('$lib/images/snapshots/cologne/6.png') },
		{ image: import('$lib/images/snapshots/cologne/3.png') },
		{ image: import('$lib/images/snapshots/cologne/5.png') },
	];
</script>

<SvelteHead city="Cologne" metaName="cologne" metaContent="Cologne Weather"/>

<WeatherDashboard 
	city={"COLOGNE"} 
	cityDescription={"KÖLLE"} 
	cityBanner={CoCover}
	citySnapshots1={snapshots1}
	citySnapshots2={snapshots2}
/>