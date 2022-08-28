<script lang="ts">
	import FormInput from '$lib/components/FormInput.svelte';
	import Form from '$lib/components/Form.svelte';
	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { notifications } from '$lib/stores/notifications';
	export let newsletterFormProps;
	const { button: { label, icon }, successNotificationText } = newsletterFormProps;

	function renderText(text, email) {
		return text.replace('{{Email}}', )
	}
	
	function formSuccessHandler(data) {
		const email = data.get('email');
		const renderedText = renderText(successNotificationText, email)
		$notifications = [...$notifications, { content: renderedText }];
	};
</script>

<Form name="newsletter" halfWidth {formSuccessHandler}>
	<FormInput required type="email" label="Email" name="email" id="newsletterEmail" attachedButton />
	<Button type="submit" attachedInput>{label}<Icon {icon} /></Button>
</Form>
