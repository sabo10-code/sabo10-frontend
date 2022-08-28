<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Section from '$lib/components/Section.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import ServiceList from './ServiceList.svelte';
	import ServiceItem from './ServiceItem.svelte';
	import Button from '$lib/components/Button.svelte';
	import Watermark from '$lib/components/Watermark.svelte';
	import Icon from '$lib/components/Icon.svelte';

	export let servicesProps;
	const {
		heading,
		serviceList,
		button: { href, label }
	} = servicesProps;
</script>

<Section>
	<Container>
		<Heading>{heading}</Heading>
		<ServiceList>
			{#each serviceList as serviceItemProps}
				<ServiceItem {serviceItemProps} />
			{/each}
		</ServiceList>
		<Button {href} pill centre>{label}</Button>
	</Container>
	<Watermark opacity="1"
		><Icon icon="cactus" width="clamp(280px, calc(100vw - 2.5rem), 320px)" /></Watermark
	>
</Section>
