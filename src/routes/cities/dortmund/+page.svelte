<script>
	import SvelteHead from "$lib/components/header/svelte-head.svelte";
	import WeatherDashboard from "$lib/components/weather-dashboard/weather-dashboard.svelte";
	import DorCover from "$lib/images/banners/dor-cover.png";

	const snapshots1 = [
		{ image: import('$lib/images/snapshots/dortmund/1.png') },
		{ image: import('$lib/images/snapshots/dortmund/2.png') },
		{ image: import('$lib/images/snapshots/dortmund/4.png') },
	];

	const snapshots2 = [
		{ image: import('$lib/images/snapshots/dortmund/6.png') },
		{ image: import('$lib/images/snapshots/dortmund/3.png') },
		{ image: import('$lib/images/snapshots/dortmund/5.png') },
	];
</script>

<SvelteHead city="Dortmund" metaName="dortmund" metaContent="Dortmund Weather"/>

<WeatherDashboard 
	city={"DORTMUND"} 
	cityDescription={"GREEN METROPOLIS"} 
	cityBanner={DorCover}
	citySnapshots1={snapshots1}
	citySnapshots2={snapshots2}
/>