<script lang="ts">
    export let city: string;
    export let metaName: string;
    export let metaContent: string;
</script>

<svelte:head>
	<title>{city}</title>
	<meta name={metaName} content={metaContent} />
	<link rel="icon" href="/freyr-icon.svg" type="image/x-icon">
</svelte:head>