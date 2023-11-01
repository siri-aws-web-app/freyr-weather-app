<script>
	import SvelteHead from "$lib/components/header/svelte-head.svelte";
	import WeatherDashboard from "$lib/components/weather-dashboard/weather-dashboard.svelte";
	import MunCover from "$lib/images/banners/mun-cover.png";

	const snapshots1 = [
		{ image: import('$lib/images/snapshots/munich/1.png') },
		{ image: import('$lib/images/snapshots/munich/2.png') },
		{ image: import('$lib/images/snapshots/munich/4.png') },
	];

	const snapshots2 = [
		{ image: import('$lib/images/snapshots/munich/6.png') },
		{ image: import('$lib/images/snapshots/munich/3.png') },
		{ image: import('$lib/images/snapshots/munich/5.png') },
	];
</script>

<SvelteHead city="Munich" metaName="munich" metaContent="Munich Weather"/>

<WeatherDashboard 
	city={"MUNICH"} 
	cityDescription={"JUST MUNICH & OKTOBERFEST"} 
	cityBanner={MunCover}
	citySnapshots1={snapshots1}
	citySnapshots2={snapshots2}
/>