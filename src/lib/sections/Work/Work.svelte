<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Section from '$lib/components/Section.svelte';
	import Heading from '$lib/components/Heading.svelte';
	export let workProps;
	const { heading } = workProps;
</script>

<Section backgroundColour="var(--colour-primary-100)">
	<Container>
		<Heading>{heading}</Heading>
	</Container>
</Section>
