<script lang="ts">
	export let pill = false;
	export let type = 'button';
	export let href = '';
	export let shrink = false;
	export let attachedInput = false;
	export let noFill = false;
	export let centre = false;
	export let reduce = false;

	const tag = href !== '' ? 'a' : 'button';

	let hovering = false;
	function enter() {
		hovering = true;
	}
	function leave() {
		hovering = false;
	}
</script>

<svelte:element
	this={tag}
	{type}
	{href}
	class="button"
	class:pill
	class:shrink
	class:attachedInput
	class:noFill
	class:centre
	class:reduce
	on:mouseenter={enter}
	on:mouseleave={leave}
	on:focus={enter}
	on:blur={leave}
	><slot {hovering} />
</svelte:element>

<style>
	.button {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		color: var(--colour-white);
		background-color: var(--colour-primary-500);
		border: none;
		padding: 0.5rem 1rem;
		font-family: var(--font-family-heading);
		font-weight: var(--font-weight-bold);
		font-size: var(--font-size-m);
		border-radius: var(--border-radius);
		cursor: pointer;
		text-decoration: none;
		transition: color 250ms ease, background-color 250ms ease, border-color 250ms ease;
		border: 1px solid transparent;
	}
	.button:where(:hover, :focus-visible) {
		color: var(--colour-primary-500);
		background-color: var(--colour-white);
		border-color: currentColor;
	}

	.shrink {
		align-self: flex-start;
	}
	.reduce {
		font-size: var(--font-size-s);
	}
	.attachedInput {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
	.centre {
		margin-inline: auto;
	}

	.pill {
		border-radius: 100vmax;
	}
	.noFill {
		background-color: transparent;
		color: var(--colour-neutral-900);
		padding: 0;
	}
	.button.noFill:where(:hover, :focus-visible) {
		border-color: transparent;
	}
</style>
