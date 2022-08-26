<script lang="ts">
	import Form from '$lib/components/Form.svelte';
	import FormInput from '$lib/components/FormInput.svelte';
	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';

	export let button;
	const { label, icon } = button;
</script>

<Form name="Contact" column marginTop="2.5rem">
	<FormInput required type="text" label="Name" id="contactName" />
	<FormInput required type="email" label="Email" id="contactEmail" />
	<FormInput type="text" label="Website" id="contactWebsite" />
	<FormInput required type="textarea" label="Message" id="contactMessage" />
	<Button type="submit" pill shrink>
		{label}<Icon {icon} />
	</Button>
</Form>
