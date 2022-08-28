<script lang="ts">
	import NewsletterForm from './NewsletterForm.svelte';
	import Copyright from './Copyright.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	export let newsletterProps;
	const { newsletterText, newsletterFormProps } = newsletterProps;
</script>

<Paragraph bold marginTop="2.5rem" marginBottom="2rem" halfWidth>{newsletterText}</Paragraph>
<NewsletterForm {newsletterFormProps} />
<Copyright />
