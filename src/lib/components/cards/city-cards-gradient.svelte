<script lang="ts">
    export let city: string;
    export let image: Promise<typeof import("*.png")>;
</script>

{#await image}
    <div class="placeholder-circle w-16"></div>
    {:then image}
        <a href="/cities/{city.toLowerCase()}">
            <button class="block card card-hover hover:brightness-125 bg-black bg-gradient-to-br variant-gradient-warning-error" >
                <img class="h-auto rounded-t-lg shadow-xl" src="{image.default}" alt="{city}">
                <h3 class="h3 font-mono m-2 font-semibold">{city}</h3>
            </button>
        </a>
{/await}
