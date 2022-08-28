<script lang="ts">
	import Form from '$lib/components/Form.svelte';
	import FormInput from '$lib/components/FormInput.svelte';
	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { notifications } from '$lib/stores/notifications';

	export let contactFormProps;
	const {
		newsletterSignupLabel,
		button: { label, icon },
		successNotification: { text, newsletterSignupText }
	} = contactFormProps;

	function renderText(text, name, newsletterSignup) {
		text = text.replace('{{Name}}', name);
		if (newsletterSignup === 'on') {
			text = `${text} ${newsletterSignupText}`;
		}
		return text;
	}
	const formSuccessHandler = (data) => {
		const name = data.get('name');
		const newsletterSignup = data.get('newsletter-signup');
		const renderedText = renderText(text, name, newsletterSignup);
		$notifications = [...$notifications, { content: renderedText }];
	};
</script>

<Form name="contact" column marginTop="2.5rem" {formSuccessHandler}>
	<FormInput required type="text" label="Name" name="name" id="contactName" />
	<FormInput required type="email" label="Email" name="email" id="contactEmail" />
	<FormInput type="text" label="Website" name="website" id="contactWebsite" />
	<FormInput required type="textarea" label="Message" name="message" id="contactMessage" />
	<FormInput
		type="checkbox"
		label={newsletterSignupLabel}
		name="newsletter-signup"
		id="contactNewsletterSignup"
	/>
	<Button type="submit" pill shrink>
		{label}<Icon {icon} />
	</Button>
</Form>
