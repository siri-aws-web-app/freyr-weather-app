<script>
    import CityCardsFilter from "$lib/components/cards/city-cards.svelte";

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

<div >
    <!-- First row with 3 cities -->
    <div class="flex justify-center">
        {#each cities.slice(0, 3) as city}
            <div class="w-1/4 p-2">
                <CityCardsFilter city={city.name} image={city.image} />
            </div>
        {/each}
    </div>

    <!-- Second row with 4 cities -->
    <div class="flex justify-center">
        {#each cities.slice(3, 7) as city}
            <div class="w-1/4 p-2">
                <CityCardsFilter city={city.name} image={city.image} />
            </div>
        {/each}
    </div>

    <!-- Third row with 3 cities -->
    <div class="flex justify-center">
        {#each cities.slice(7, 10) as city}
            <div class="w-1/4 p-2">
                <CityCardsFilter city={city.name} image={city.image} />      
            </div>
        {/each}
    </div>
</div>
