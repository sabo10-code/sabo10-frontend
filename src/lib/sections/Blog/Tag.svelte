<script lang="ts">
	export let colour: string;
</script>

<li style="--backgroundColour: {colour}"><slot /></li>

<style>
	li {
		font-family: var(--font-family-body);
		font-weight: var(--font-weight-bold);
		font-size: var(--font-size-xs);
		color: var(--colour-white);
		background-color: var(--backgroundColour);
		border-radius: 0.375rem;
		padding: 0.25rem 0.5rem;
	}
</style>
