<script lang="ts">
	import BlogList from './BlogList.svelte';

	import Button from '$lib/components/Button.svelte';
	import Container from '$lib/components/Container.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Section from '$lib/components/Section.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Watermark from '$lib/components/Watermark.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	import BlogItem from './BlogItem.svelte';

	export let blogProps;
	const {
		heading,
		blogList,
		button: { href, label, icon },
		watermark
	} = blogProps;
</script>

<Section
	backgroundColour="linear-gradient(180deg, var(--colour-primary-100) 50%, var(--colour-white) 100%);"
>
	<Container>
		<Heading>{heading}</Heading>
		<Spacer block="1.5rem">
			<BlogList>
				{#each blogList as blogItemProps, index}
					<BlogItem {index} {blogItemProps} />
				{/each}
			</BlogList>
		</Spacer>
		<Button {href} pill centre let:hovering
			>{label}<Icon {icon} {hovering} animation="pointing" /></Button
		>
	</Container>
	<Watermark text>{watermark}</Watermark>
</Section>
