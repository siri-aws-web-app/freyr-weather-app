<script>
	import { scale } from "svelte/transition";
	import { quintOut } from "svelte/easing";
    import CityCardsScroll from "$lib/components/img-components/city-cards-scroll.svelte";
</script>

<div class="card p-4 w-3/4 shadow-xl absolute m-auto left-0 right-0" transition:scale={{ duration: 350, easing: quintOut }}>
    <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">
        <CityCardsScroll />
    </div>
</div>