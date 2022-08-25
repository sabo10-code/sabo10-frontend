<script lang="ts">
	export let bold = false;
	export let halfWidth = false;
	export let marginTop = '';
	export let marginBottom = '';
</script>

<p class:bold class:halfWidth style="--margin-top: {marginTop}; --margin-bottom: {marginBottom};">
	<slot />
</p>

<style>
	p {
		font-family: var(--font-family-body);
		font-size: var(--font-size-m);
		color: var(--colour-neutral-900);
		margin-top: var(--margin-top);
		margin-bottom: var(--margin-bottom);
	}
	.bold {
		font-weight: var(--font-weight-bold);
	}
	@media screen and (min-width: 768px) {
		.halfWidth {
			max-width: 50%;
		}
	}
</style>
