<script lang="ts">
	import { mainContentID } from '$lib/CONSTANTS';
	const href = `#${mainContentID}`;
</script>

<a {href}> Skip to Content </a>

<style>
	a {
		position: absolute;
		left: -999px;
		width: 1px;
		height: 1px;
		top: auto;
		color: var(--colour-neutral-900);
		text-decoration: none;
	}
	a:focus-visible {
		display: inline-block;
		height: auto;
		width: auto;
		position: static;
		padding: 1rem;
		outline-offset: -0.5rem;
		top: 0;
		left: 0;
		margin: auto;
	}
</style>
