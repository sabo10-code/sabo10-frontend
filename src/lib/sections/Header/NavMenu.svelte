<script lang="ts">
	import { navOpen } from '$lib/stores/navOpen';
	import Hamburger from './Hamburger.svelte';
</script>

<Hamburger />
<nav id="primaryNavigation" aria-expanded={$navOpen}>
	<ul>
		<slot />
	</ul>
</nav>

<style>
	nav {
		position: fixed;
		inset: 0;
		background-color: var(--colour-white);
		transition: transform 250ms ease-in;
		display: flex;
	}
	nav[aria-expanded='false'] {
		transform: translateX(100%);
	}
	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		flex: 1;
	}

	@media screen and (min-width: 768px) {
		nav {
			position: static;
			border: none;
			background-color: transparent;
		}
		ul {
			flex-direction: row;
			gap: 1.5rem;
		}
		nav[aria-expanded='false'] {
			transform: translateX(0%);
		}
	}
</style>
