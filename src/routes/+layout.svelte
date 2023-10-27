<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import GithubLogo from '$lib/images/github-mark-white.svg';
	import FreyrLogo from '$lib/images/freyr-logo.svg';
	import { IconChevronDown } from '@tabler/icons-svelte';
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
					<div class="logo-cloud grid-cols-3">
						<div class="logo-item variant-soft hover:bg-surface-700 px-20">
							<a href="/">Home</a>
						</div>
						<div class="logo-item variant-soft hover:bg-surface-700 px-20">
							<a href="/cities">Cities</a><span><IconChevronDown/></span>
							<div class="card p-4 w-60 shadow-xl">

							</div>
						</div>
						<div class="logo-item variant-soft hover:bg-surface-700 px-20">
							<a href="/about">About</a>
						</div>
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
