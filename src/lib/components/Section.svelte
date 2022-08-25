<script lang="ts">
	export let tag = 'section';
	export let borderBottom = false;
	export let borderTop = false;
	export let sticky = false;
	export let backgroundColour = 'var(--colour-white)';
</script>

<svelte:element
	this={tag}
	class="section"
	class:sticky
	class:borderBottom
	class:borderTop
	style="--background-colour: {backgroundColour}"
>
	<slot />
</svelte:element>

<style>
	.section {
		padding-block: 1.5rem;
		padding-inline: 1.25rem;
		background: var(--background-colour);
		isolation: isolate;
		position: relative;
		overflow: hidden;
	}
	.borderBottom {
		border-bottom: 1px solid var(--colour-primary-500);
	}
	.borderTop {
		border-top: 1px solid var(--colour-primary-500);
	}
	.sticky {
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		z-index: 999;
		padding-block: 0.75rem;
	}
	@media screen and (min-width: 768px) {
		.section {
			padding-inline: 3.75rem;
		}
	}

	@media screen and (min-width: 1440px) {
		.section {
			padding-inline: 7.5rem;
		}
	}
</style>
