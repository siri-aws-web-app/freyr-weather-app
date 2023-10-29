<script>
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

<div class="card p-4 w-3/4 shadow-2xl absolute m-auto left-0 right-0">
    <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">
        {#each cities as city}
        <div class="snap-start shrink-0 w-80 flex flex-col items-center justify-center bor">
            <a href="/cities/{city.name.toLowerCase()}">
                <button class="block card card-hover hover:brightness-125 bg-black" >
                    {#await city.image}
                    <div class="placeholder-circle w-16"></div>
                    {:then image}
                    <img class="h-auto rounded-t-lg shadow-xl" src="{image.default}" alt="berlin">
                    {/await}
                    <h3 class="h3 font-mono m-2 font-semibold">{city.name}</h3>
                </button>
            </a>
        </div>
        {/each}
    </div>
</div>