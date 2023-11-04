<script>
	import SvelteHead from "$lib/components/header/svelte-head.svelte";
	import WeatherDashboard from "$lib/components/weather-dashboard/weather-dashboard.svelte";
	import LeiCover from "$lib/images/banners/lei-cover.png";

	const snapshots1 = [
		{ image: import('$lib/images/snapshots/leipzig/1.png') },
		{ image: import('$lib/images/snapshots/leipzig/2.png') },
		{ image: import('$lib/images/snapshots/leipzig/4.png') },
	];

	const snapshots2 = [
		{ image: import('$lib/images/snapshots/leipzig/6.png') },
		{ image: import('$lib/images/snapshots/leipzig/3.png') },
		{ image: import('$lib/images/snapshots/leipzig/5.png') },
	];
</script>

<SvelteHead city="Leipzig" metaName="leipzig" metaContent="Leipzig Weather"/>

<WeatherDashboard 
	city={"LEIPZIG"} 
	cityDescription={"CITY OF HEROES"} 
	cityBanner={LeiCover}
	citySnapshots1={snapshots1}
	citySnapshots2={snapshots2}
/>