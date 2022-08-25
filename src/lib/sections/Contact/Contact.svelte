<script lang="ts">
	import ContactForm from './ContactForm.svelte';
	import Container from '$lib/components/Container.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Section from '$lib/components/Section.svelte';
	import Heading from '$lib/components/Heading.svelte';

	export let contactProps;
	const { heading, body, button } = contactProps;
</script>

<Section>
	<Container>
		<Heading>{heading}</Heading>
		<Paragraph>{@html body}</Paragraph>
		<ContactForm {button} />
	</Container>
</Section>
