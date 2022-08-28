<script lang="ts">
	import FormHoneyPot from './FormHoneyPot.svelte';
	export let column = false;
	export let halfWidth = false;
	export let marginTop = '';
	export let name: string;

	export let formSuccessHandler;

	function handleResponse(response, formData) {
		switch (response.status) {
			case 200:
				formSuccessHandler(formData);
				break;
			default:
				handleFailure(response, formData);
		}
	}

	function handleFailure(response, formData) {
		const data = [...formData.entries()];
		console.log('Request failed', { response }, { data });
	}

	function handleError(error) {
		console.error(error);
	}

	function handleSubmit() {
		let formData = new FormData(this);
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData).toString()
		})
			.then((response) => handleResponse(response, formData))
			.catch((error) => handleError(error));
	}
</script>

<form
	{name}
	data-netlify="true"
	method="POST"
	class:column
	class:halfWidth
	style="--margin-top: {marginTop}"
	on:submit|preventDefault={handleSubmit}
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
