<script>
	import SvelteHead from "$lib/components/header/svelte-head.svelte";
	import WeatherDashboard from "$lib/components/weather-dashboard/weather-dashboard.svelte";
	import BerCover from "$lib/images/banners/ber-cover.png";

	const snapshots1 = [
		{ image: import('$lib/images/snapshots/berlin/1.png') },
		{ image: import('$lib/images/snapshots/berlin/2.png') },
		{ image: import('$lib/images/snapshots/berlin/4.png') },
	];

	const snapshots2 = [
		{ image: import('$lib/images/snapshots/berlin/6.png') },
		{ image: import('$lib/images/snapshots/berlin/3.png') },
		{ image: import('$lib/images/snapshots/berlin/5.png') },
	];
</script>

<SvelteHead city="Berlin" metaName="berlin" metaContent="Berlin Weather"/>

<WeatherDashboard 
	city={"BERLIN"} 
	cityDescription={"THE METROPOLITAN CAPITAL"} 
	cityBanner={BerCover}
	citySnapshots1={snapshots1}
	citySnapshots2={snapshots2}
/>