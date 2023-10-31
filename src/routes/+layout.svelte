<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import GithubLogo from '$lib/images/github-mark-white.svg';
	import FreyrLogo from '$lib/images/freyr-logo.svg';
	import { IconChevronDown } from '@tabler/icons-svelte';
	import CitiesDropdownMenu from '$lib/components/appbar/dropdown-menu.svelte';

	export let show:boolean = false;
	function handleDropDownMenu() {
		show = !show
	}
</script>

<!-- App Shell -->
<AppShell >
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<a href="/">
					<img class=" w-48" src="{FreyrLogo}" alt="freyr-logo">
				</a>	
			</svelte:fragment>
			<svelte:fragment>
					<div class="logo-cloud grid-flow-col bg-gradient-to-br variant-gradient-warning-error">
						<form action="/">
							<button class="btn p-0">
								<div class="logo-item variant-soft hover:brightness-150 w-48">
								<span>Home</span>
								</div>
							</button>
						</form>
						<form on:mouseenter={handleDropDownMenu} on:mouseleave={handleDropDownMenu}>
							<button class="btn p-0">
								<div class="logo-item variant-soft hover:brightness-150 w-48">
								<span>Cities</span>
								<IconChevronDown />
								</div>
							</button>
							{#if show}
								<CitiesDropdownMenu />	
							{/if}
						</form>
						<form action="/about">
							<button class="btn p-0">
								<div class="logo-item variant-soft hover:brightness-150 w-48">
								<span>About</span>
								</div>
							</button>
						</form>
					</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a href="https://github.com/orgs/siri-aws-web-app/repositories" target="_blank">
						<img class="w-10" src="{GithubLogo}" alt="github-logo">
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
