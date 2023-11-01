<script>
	import CityWeatherGallery from '$lib/components/city-weather-carousel/city-weather-gallery.svelte';
	import SvelteHead from '$lib/components/header/svelte-head.svelte';
</script>

<SvelteHead city="Home" metaName="Home" metaContent="City Quick Selection" />

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5 text-center flex flex-col items-center">
		<!-- / -->
		<CityWeatherGallery />
	</div>
</div>

<style lang="postcss">
</style>
