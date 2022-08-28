<script lang="ts">
	export let type: string;
	export let label: string;
	export let id: string;
	export let name: string;
	export let required = false;
	export let attachedButton = false;
	const textarea = type === 'textarea';
	const input = !textarea;
	const checkbox = type === 'checkbox';
	let tag = textarea ? 'textarea' : 'input';
</script>

<span class:checkbox>
	<svelte:element
		this={tag}
		{type}
		{required}
		placeholder={label}
		{name}
		{id}
		class:attachedButton
		class:input
		class:textarea
	/>
	<label for={id}>{label}</label>
</span>

<style>
	span {
		position: relative;
		display: flex;
		flex: 1;
	}
	.checkbox {
		align-items: baseline;
		position: relative;
	}
	.checkbox .input {
		position: absolute;
		opacity: 0;
	}

	.checkbox .input:checked ~ label::after {
		content: '';
	}
	.checkbox label {
		position: static;
		transform: none;
		margin-left: 1.5rem;
	}
	.checkbox label::before,
	.checkbox label::after {
		position: absolute;
		width: 1em;
		height: 1em;
		left: 0;
		top: 0%;
		transform: translate(0, 50%);
		border-radius: 0.25em;
		cursor: pointer;
	}
	.checkbox label::before {
		content: '';
		position: absolute;
		border: 1px solid var(--colour-primary-500);
		pointer-events: all;
	}
	.checkbox label::after {
		height: 0.5rem;
		width: 0.5rem;
		top: 0.5rem;
		left: 0.25rem;
		border-radius: 0.125em;
		background-color: var(--colour-primary-500);
	}
	.input,
	.textarea {
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
	.textarea {
		resize: none;
		min-height: 12.5rem;
	}
	:where(.input, .textarea)::placeholder {
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
	:where(.input, .textarea):where(:focus-within, :not(:placeholder-shown)) ~ label {
		display: block;
		left: 0;
		top: 0;
		transform: translateY(-100%);
		color: var(--colour-neutral-900);
	}
</style>
