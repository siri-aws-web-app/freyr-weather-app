<script>
	import CityWeatherGallery from '$lib/components/city-weather-carousel/city-weather-gallery.svelte';
</script>

<svelte:head>
	<title>Home - Freyr Weather</title>
	<meta name="Home" content="City Selection" />
	<link rel="icon" href="/src/lib/images/freyr-icon.svg" type="image/x-icon">
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5 text-center flex flex-col items-center">
		<!-- / -->
		<CityWeatherGallery />
	</div>
</div>

<style lang="postcss">
</style>
