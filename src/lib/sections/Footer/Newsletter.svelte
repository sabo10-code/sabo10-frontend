<script lang="ts">
	import NewsletterForm from './NewsletterForm.svelte';
	import Copyright from './Copyright.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	export let newsletterProps;
	const { text, ...newsletterFormProps } = newsletterProps;
</script>

<Paragraph bold marginTop="2.5rem" marginBottom="2rem" halfWidth>{text}</Paragraph>
<NewsletterForm {newsletterFormProps} />
<Copyright />
