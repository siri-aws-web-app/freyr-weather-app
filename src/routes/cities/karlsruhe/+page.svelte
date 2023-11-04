<script>
	import SvelteHead from "$lib/components/header/svelte-head.svelte";
	import WeatherDashboard from "$lib/components/weather-dashboard/weather-dashboard.svelte";
	import KaCover from "$lib/images/banners/ka-cover.png";

	const snapshots1 = [
		{ image: import('$lib/images/snapshots/karlsruhe/1.png') },
		{ image: import('$lib/images/snapshots/karlsruhe/2.png') },
		{ image: import('$lib/images/snapshots/karlsruhe/4.png') },
	];

	const snapshots2 = [
		{ image: import('$lib/images/snapshots/karlsruhe/6.png') },
		{ image: import('$lib/images/snapshots/karlsruhe/3.png') },
		{ image: import('$lib/images/snapshots/karlsruhe/5.png') },
	];

</script>

<SvelteHead city="Karlsruhe" metaName="karlsruhe" metaContent="Karlsruhe Weather"/>

<WeatherDashboard 
	city={"KARLSRUHE"} 
	cityDescription={"THE FAN-CITY"} 
	cityBanner={KaCover}
	citySnapshots1={snapshots1}
	citySnapshots2={snapshots2}
/>