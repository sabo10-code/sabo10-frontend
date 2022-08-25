<script lang="ts">
	export let text = false;
	export let opacity = '0.5';
	const bottom = text ? '-0.16667em' : '0';
</script>

<div style="--bottom: {bottom}; --opacity: {opacity}">
	<slot />
</div>

<style>
	div {
		position: absolute;
		bottom: var(--bottom);
		left: 50%;
		font-size: clamp(12rem, 60vw, 60rem);
		line-height: 1;
		z-index: -1;
		opacity: var(--opacity);
		color: var(--colour-primary-100);
		transform: translate(-50%, 0);
		pointer-events: none;
	}
</style>
