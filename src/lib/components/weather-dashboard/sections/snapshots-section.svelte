<script>
	const cover1 = [
		{ image: import('$lib/images/snapshots/karlsruhe/1.png') },
		{ image: import('$lib/images/snapshots/karlsruhe/2.png') },
    ];
	const cover2 = [
		{ image: import('$lib/images/snapshots/karlsruhe/3.png') },
		{ image: import('$lib/images/snapshots/karlsruhe/6.png') },
	];
	const cover3 = [
		{ image: import('$lib/images/snapshots/karlsruhe/4.png') },
		{ image: import('$lib/images/snapshots/karlsruhe/5.png') },
	]
</script>

<section class="grid grid-cols-3 gap-2">
	<div class="grid gap-3">
		{#each cover1 as { image }}
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
		{#each cover2 as { image }}
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
		{#each cover3 as { image }}
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
