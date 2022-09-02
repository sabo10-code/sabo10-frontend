<script lang="ts">
	import { navOpen } from '$lib/stores/navOpen';
	import { browser } from '$app/env';

	function handleClick() {
		$navOpen = !$navOpen;
	}

	$: if (browser) document.body.classList.toggle('noscroll', $navOpen);
</script>

<button
	on:click={handleClick}
	aria-expanded={$navOpen}
	aria-controls="primaryNavigation"
	aria-label="Primary Navigation Toggle"
>
	<span />
	<span />
	<span />
</button>

<style>
	button {
		display: flex;
		flex-direction: column;
		width: 1.5rem;
		height: 1rem;
		background-color: transparent;
		border: none;
		z-index: 2;
		position: relative;
		cursor: pointer;
	}
	span {
		height: 0.25rem;
		background-color: var(--colour-neutral-900);
		border-radius: 100vmax;
		transition: width 250ms ease-out, top 250ms ease-out, transform 250ms ease-out;
		position: absolute;
		right: 0;
		transform: translateY(-50%);
	}
	span:nth-of-type(1) {
		width: 60%;
		top: 0.125rem;
	}
	span:nth-of-type(2) {
		width: 80%;
		top: 50%;
		transform: translateY(-50%);
	}
	span:nth-of-type(3) {
		width: 100%;
		top: calc(100% - 0.125rem);
	}

	button[aria-expanded='true'] span:nth-of-type(2n + 1) {
		width: 80%;
		top: 50%;
		transform: translateY(-50%) rotate(-45deg);
	}

	button[aria-expanded='true'] span:nth-of-type(2) {
		transform: translateY(-50%) rotate(45deg);
	}
	@media screen and (min-width: 768px) {
		button {
			display: none;
		}
	}
</style>
