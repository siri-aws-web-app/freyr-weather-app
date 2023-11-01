<script lang="ts">
	export let col1: any;
	export let col2: any;
</script>

<section class="grid grid-cols-2 gap-2">
	<div class="grid gap-3">
		{#each col1 as { image }}
			{#await image}
				<p>Loading...</p>
			{:then image}
				<img class="h-auto max-w-full rounded-lg" src={image.default} alt="" />
			{:catch error}
				<p>{error.message}</p>
			{/await}
		{/each}
	</div>

	<div class="grid gap-3">
		{#each col2 as { image }}
			{#await image}
				<p>Loading...</p>
			{:then image}
				<img class="h-auto max-w-full rounded-lg" src={image.default} alt="" />
			{:catch error}
				<p>{error.message}</p>
			{/await}
		{/each}
	</div>
</section>
