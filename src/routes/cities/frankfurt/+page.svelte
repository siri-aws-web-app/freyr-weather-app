<script>
	import SvelteHead from "$lib/components/header/svelte-head.svelte";
	import WeatherDashboard from "$lib/components/weather-dashboard/weather-dashboard.svelte";
	import FraCover from "$lib/images/banners/fra-cover.png";

	const snapshots1 = [
		{ image: import('$lib/images/snapshots/frankfurt/1.png') },
		{ image: import('$lib/images/snapshots/frankfurt/2.png') },
		{ image: import('$lib/images/snapshots/frankfurt/4.png') },
	];

	const snapshots2 = [
		{ image: import('$lib/images/snapshots/frankfurt/6.png') },
		{ image: import('$lib/images/snapshots/frankfurt/3.png') },
		{ image: import('$lib/images/snapshots/frankfurt/5.png') },
	];
</script>

<SvelteHead city="Frankfurt" metaName="frankfurt" metaContent="Frankfurt Weather"/>

<WeatherDashboard 
	city={"FRANKFURT"} 
	cityDescription={"MAINCITY"} 
	cityBanner={FraCover}
	citySnapshots1={snapshots1}
	citySnapshots2={snapshots2}
/>