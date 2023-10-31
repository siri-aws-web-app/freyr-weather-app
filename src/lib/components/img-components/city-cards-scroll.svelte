<script>
    import CityCards from "$lib/components/cards/city-cards-gradient.svelte";

    const cities = [
        { name: 'Karlsruhe', image: import('$lib/images/cities/karlsruhe.png') },
        { name: 'Stuttgart', image: import('$lib/images/cities/stuttgart.png') },
        { name: 'Berlin', image: import('$lib/images/cities/berlin.png') },
        { name: 'Munich', image: import('$lib/images/cities/munich.png') },
        { name: 'Cologne', image: import('$lib/images/cities/cologne.png') },
        { name: 'Frankfurt', image: import('$lib/images/cities/frankfurt.png') },
        { name: 'Hamburg', image: import('$lib/images/cities/hamburg.png') },
        { name: 'Dusseldorf', image: import('$lib/images/cities/dusseldorf.png') },
        { name: 'Dortmund', image: import('$lib/images/cities/dortmund.png') },
        { name: 'Leipzig', image: import('$lib/images/cities/leipzig.png') },
    ];
</script>

{#each cities as city}
        <div class="snap-start shrink-0 w-80 flex flex-col items-center justify-center">
            <CityCards city={city.name} image={city.image} />
        </div>
{/each}