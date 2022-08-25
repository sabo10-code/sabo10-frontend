<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Section from '$lib/components/Section.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import OfferingList from './OfferingList.svelte';
	import Button from '$lib/components/Button.svelte';
	import Watermark from '$lib/components/Watermark.svelte';
	import Icon from '$lib/components/Icon.svelte';

	export let servicesProps;
	const { heading, offerings, button } = servicesProps;
	const { label, href } = button;
</script>

<Section>
	<Container>
		<Heading>{heading}</Heading>
		<OfferingList {offerings} />
		<Button {href} pill centre>{label}</Button>
	</Container>
	<Watermark opacity="1"
		><Icon icon="cactus" width="clamp(280px, calc(100vw - 2.5rem), 320px)" /></Watermark
	>
</Section>
