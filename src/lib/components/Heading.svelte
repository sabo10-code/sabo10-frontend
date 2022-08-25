<script lang="ts">
	export let tag = 'h2';
	const small = tag === 'h3';
	export let reduce = false;
</script>

<svelte:element this={tag} class="heading" class:small class:reduce><slot /></svelte:element>

<style>
	.heading {
		font-family: var(--font-family-heading);
		font-weight: var(--font-weight-bold);
		font-size: var(--font-size-4xl);
		color: var(--colour-neutral-900);
	}
	.small,
	.reduce {
		font-size: var(--font-size-2xl);
	}
	.reduce.small {
		font-size: var(--font-size-l);
	}
</style>
