<script>
	import SvelteHead from "$lib/components/header/svelte-head.svelte";
	import WeatherDashboard from "$lib/components/weather-dashboard/weather-dashboard.svelte";
	import DusCover from "$lib/images/banners/dus-cover.png";

	const snapshots1 = [
		{ image: import('$lib/images/snapshots/dusseldorf/1.png') },
		{ image: import('$lib/images/snapshots/dusseldorf/2.png') },
		{ image: import('$lib/images/snapshots/dusseldorf/4.png') },
	];

	const snapshots2 = [
		{ image: import('$lib/images/snapshots/dusseldorf/6.png') },
		{ image: import('$lib/images/snapshots/dusseldorf/3.png') },
		{ image: import('$lib/images/snapshots/dusseldorf/5.png') },
	];
</script>

<SvelteHead city="Dusseldorf" metaName="dusseldorf" metaContent="Dusseldorf Weather"/>

<WeatherDashboard 
	city={"DUSSELDORF"} 
	cityDescription={"THE FASHION CITY"} 
	cityBanner={DusCover}
	citySnapshots1={snapshots1}
	citySnapshots2={snapshots2}
/>