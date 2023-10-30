<script lang="ts">
    export let city: string;
    export let image: Promise<typeof import("*.png")>;
</script>

<a href="/cities/{city.toLowerCase()}">
    <button class="block card card-hover hover:brightness-125 bg-black" >
        {#await image}
        <div class="placeholder-circle w-16"></div>
        {:then image}
        <img class="h-auto rounded-t-lg shadow-xl" src="{image.default}" alt="{city}">
        {/await}
        <h3 class="h3 font-mono m-2 font-semibold">{city}</h3>
    </button>
</a>