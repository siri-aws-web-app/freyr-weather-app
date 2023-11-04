<script lang="ts">
    import { scale } from "svelte/transition";

    export let city: string;
    export let image: Promise<typeof import("*.png")>;
</script>

{#await image}
    <div></div>
    {:then image}
        <a href="/cities/{city.toLowerCase()}">
            <button class="block card card-hover hover:brightness-125" transition:scale={{ duration: 750}}>
                <img class="h-auto rounded-t-lg shadow-xl" src="{image.default}" alt="{city}">
                <h3 class="h3 font-mono m-2 font-semibold">{city}</h3>
            </button>
        </a>
{/await}
