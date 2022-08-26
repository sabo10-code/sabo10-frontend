<script lang="ts">
	import FormInput from '$lib/components/FormInput.svelte';
	import Form from '$lib/components/Form.svelte';
	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	export let newsletterFormProps;
	const {  buttonLabel, icon } = newsletterFormProps;
</script>

<Form name="Newsletter" halfWidth>
	<FormInput required type="email" label="Email" id="newsletterEmail" attachedButton />
	<Button type="submit" attachedInput>{buttonLabel}<Icon {icon} /></Button>
</Form>
