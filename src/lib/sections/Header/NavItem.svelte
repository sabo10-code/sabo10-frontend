<script lang="ts">
	export let navItemProps;
	const { href, label, icon } = navItemProps;
	import { page } from '$app/stores';
	import Icon from '$lib/components/Icon.svelte';
	import { navOpen } from '$lib/stores/navOpen';
	$: current = href === `/${$page.routeId?.split('/')[0]}`;
	function handleClick() {
		$navOpen = false;
	}
</script>

<li>
	<a
		{href}
		tabindex={$navOpen ? 0 : -1}
		on:click={handleClick}
		aria-current={current ? 'page' : 'false'}
		><span aria-hidden="true"><Icon {icon} width="0.75rem" /></span>{label}</a
	>
</li>

<style>
	a {
		position: relative;
		color: var(--colour-neutral-900);
		text-decoration: none;
		font-family: var(--font-family-heading);
		font-size: var(--font-size-2xl);
		font-weight: var(--font-weight-bold);
	}
	span {
		position: absolute;
		top: -0.125rem;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 12px;
		height: 12px;
		display: none;
	}
	[aria-current='page'] {
		color: var(--colour-primary-500);
	}
	:where([aria-current='page'], a:hover, a:focus-visible) span {
		display: block;
	}
</style>
