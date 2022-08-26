<script lang="ts">
	import FormHoneyPot from './FormHoneyPot.svelte';
	export let column = false;
	export let halfWidth = false;
	export let marginTop = '';
	export let name: string;
</script>

<form
	{name}
	data-netlify="true"
	method="POST"
	class:column
	class:halfWidth
	style="--margin-top: {marginTop}"
>
<input type="hidden" name="form-name" value={name} />
	<FormHoneyPot />
	<slot />
</form>

<style>
	form {
		--border-radius: 0.25rem;
		display: flex;
		row-gap: 1.5rem;
		margin-top: var(--margin-top);
	}
	.column {
		flex-direction: column;
	}
	@media screen and (min-width: 768px) {
		.halfWidth {
			max-width: 50%;
		}
	}
</style>
