<script lang="ts">
	export let type: string;
	export let label: string;
	export let id: string;
	export let required = false;
	export let attachedButton = false;
	const textarea = type === 'textarea';
</script>

<span>
	{#if textarea}
		<textarea {type} {required} placeholder={label} name={label} {id} />
	{:else}
		<input {type} {required} placeholder={label} name={label} {id} class:attachedButton />
	{/if}
	<label for={id}>{label}</label>
</span>

<style>
	span {
		position: relative;
		display: flex;
		flex: 1;
	}
	input,
	textarea {
		display: flex;
		padding: 0.5rem 1rem;
		width: 100%;
		border-radius: var(--border-radius);
		border: none;
		background-color: var(--colour-primary-50);
		font-family: var(--font-family-body);
		font-weight: var(--font-weight-regular);
		font-size: var(--font-size-m);
		color: var(--colour-neutral-900);
		min-width: 0;
		caret-color: var(--colour-primary-500);
	}
	.attachedButton {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
	textarea {
		resize: none;
		min-height: 12.5rem;
	}
	:where(input, textarea)::placeholder {
		opacity: 0;
	}
	label {
		position: absolute;
		top: 1.25rem;
		left: 1rem;
		transform: translateY(-50%);
		pointer-events: none;
		transition: left 250ms ease-in, top 250ms ease-in, transform 250ms ease-in, color 250ms ease-in;
		font-family: var(--font-family-heading);
		font-weight: var(--font-weight-semi-bold);
		font-size: var(--font-size-m);
		color: var(--colour-neutral-500);
	}
	:where(input, textarea):where(:focus-within, :not(:placeholder-shown)) ~ label {
		display: block;
		left: 0;
		top: 0;
		transform: translateY(-100%);
		color: var(--colour-neutral-900);
	}
</style>
