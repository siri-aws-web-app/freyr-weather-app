<script>
	import { onMount } from "svelte";

    let CurrentTime = new Date();
    $: time = CurrentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    $: day = CurrentTime.toLocaleDateString('en-US', { weekday: 'long' });
    $: date = CurrentTime.toLocaleDateString('de-DE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    onMount(() => {
        const interval = setInterval(() => {
            CurrentTime = new Date();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });
</script>

<!-- <div class="absolute right-[-6.5%] bottom-24 grid grid-rows-1 col-span-1 mt-6">
    <div class="card rounded-[1.5rem] shadow-md grid grid-rows-4 items-center">
        <div class="bg-gradient-to-br variant-gradient-error-warning p-5 h-full w-full rounded-2xl row-span-2 flex justify-center items-center">
            <h2 class="font-bold text-2xl">{time}</h2>
        </div>

        <div class="flex items-center space-x-2 row-span-2 rounded-lg px-6 py-3">
            <div class="text-white">
                <h2 class="font-bold text-2xl text-center">{day}</h2>
                <p class="text-lg text-center font-bold">{date}</p>
            </div>
        </div>
    </div>
</div> -->

<div class="absolute right-[-10%] bottom-32 grid grid-rows-1 col-span-1 mt-6">
    <div class="card rounded-[1.5rem] shadow-md grid grid-cols-5 gap-4 items-center">
        <div class="bg-gradient-to-br variant-gradient-error-warning h-full rounded-3xl p-8 col-span-2 flex justify-center items-center">
            <h2 class="font-bold text-2xl">{time}</h2>
        </div>
        <!-- Left Section - Weather Info -->
        <div class="flex items-center justify-end space-x-2 p-4 col-span-3 rounded-lg">
            <!-- Day & Weather Type -->
            <div class="text-white">
                <h2 class="font-bold text-2xl text-right">{day}</h2>
                <p class="text-lg text-right">{date}</p>
            </div>
        </div>
    </div>
</div>