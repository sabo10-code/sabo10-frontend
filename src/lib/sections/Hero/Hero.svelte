<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Container from '$lib/components/Container.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Section from '$lib/components/Section.svelte';

	export let heroProps: {
		heading: string;
		body: string;
		button: { href: string; label: string; icon: string };
	};
	const { heading, body, button } = heroProps;
	const { href, label, icon } = button;
</script>

<Section backgroundColour="var(--colour-primary-100)">
	<Container>
		<div>
			<h2>{@html heading}</h2>
			<Paragraph halfWidth>{body}</Paragraph>
			<Button {href} pill shrink let:hovering
				>{label}<Icon {icon} {hovering} animation="pointing" /></Button
			>
			<span><Icon icon="cactus" width="88px" /></span>
		</div>
	</Container>
</Section>

<style>
	div {
		background-color: var(--colour-white);
		padding: 1rem;
		border-radius: 0.75rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		position: relative;
		isolation: isolate;
	}
	h2 {
		font-family: var(--font-family-heading);
		font-size: var(--font-size-5xl);
		font-weight: var(--font-weight-extra-bold);
		color: var(--colour-neutral-900);
		line-height: 1.15;
	}
	span {
		color: var(--colour-primary-100);
		position: absolute;
		bottom: 0;
		right: 0.75rem;
		z-index: -1;
	}
	@media screen and (min-width: 768px) {
		div > * {
			max-width: 50%;
		}
		span {
			transform: scale(3);
			transform-origin: right bottom;
		}
	}
</style>
