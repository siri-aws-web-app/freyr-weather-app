<script>
	import SvelteHead from "$lib/components/header/svelte-head.svelte";
	import WeatherDashboard from "$lib/components/weather-dashboard/weather-dashboard.svelte";
	import StuCover from "$lib/images/banners/stu-cover.png";

	const snapshots1 = [
		{ image: import('$lib/images/snapshots/stuttgart/1.png') },
		{ image: import('$lib/images/snapshots/stuttgart/2.png') },
		{ image: import('$lib/images/snapshots/stuttgart/4.png') },
	];

	const snapshots2 = [
		{ image: import('$lib/images/snapshots/stuttgart/6.png') },
		{ image: import('$lib/images/snapshots/stuttgart/3.png') },
		{ image: import('$lib/images/snapshots/stuttgart/5.png') },
	];
</script>

<SvelteHead city="Stuttgart" metaName="stuttgart" metaContent="Stuttgart Weather"/>

<WeatherDashboard 
	city={"STUTTGART"} 
	cityDescription={"AUTOMOTIVE HEART OF GERMANY"} 
	cityBanner={StuCover}
	citySnapshots1={snapshots1}
	citySnapshots2={snapshots2}
/>