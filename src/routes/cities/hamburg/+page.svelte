<script>
	import SvelteHead from "$lib/components/header/svelte-head.svelte";
	import WeatherDashboard from "$lib/components/weather-dashboard/weather-dashboard.svelte";
	import HamCover from "$lib/images/banners/ham-cover.png";

	const snapshots1 = [
		{ image: import('$lib/images/snapshots/hamburg/1.png') },
		{ image: import('$lib/images/snapshots/hamburg/2.png') },
		{ image: import('$lib/images/snapshots/hamburg/4.png') },
	];

	const snapshots2 = [
		{ image: import('$lib/images/snapshots/hamburg/6.png') },
		{ image: import('$lib/images/snapshots/hamburg/3.png') },
		{ image: import('$lib/images/snapshots/hamburg/5.png') },
	];
</script>

<SvelteHead city="Hamburg" metaName="hamburg" metaContent="Hamburg Weather"/>

<WeatherDashboard 
	city={"HAMBURG"} 
	cityDescription={"FREE & HANSEATIC CITY"} 
	cityBanner={HamCover}
	citySnapshots1={snapshots1}
	citySnapshots2={snapshots2}
/>