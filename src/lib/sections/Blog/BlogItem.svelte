<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Image from '$lib/components/Image.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import TagList from './TagList.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	export let blog, index;
	const { title, imageSrc: src, body, tags, button } = blog;
	const { label, href, icon } = button;
	const featured = index === 0;
</script>

<article class:featured>
	<Image {src} maxHeight="50%" />
	<div class="content">
		<div>
			<Heading tag="h3" reduce={!featured}>{title}</Heading>
			<TagList {tags} />
		</div>
		<Spacer block={featured ? '1rem' : '0.5rem'}>
			{#if featured}
				<Paragraph>{body}</Paragraph>
			{/if}
		</Spacer>
		<Button noFill shrink reduce={!featured} {href} let:hovering
			>{label}<Icon {icon} {hovering} animation="pointing" />
		</Button>
	</div>
</article>

<style>
	article {
		background-color: var(--colour-white);
		border-radius: 0.75rem;
		box-shadow: var(--shadow-outer-m);
		overflow: hidden;
		grid-row: 2;
		display: flex;
		flex-direction: column;
		transition: transform 100ms ease-in, box-shadow 100ms ease-in;
	}
	article:where(:hover, :focus-within) {
		transform: translate(0.125rem, 0.125rem);
		box-shadow: var(--shadow-outer-xs);
	}
	.featured {
		grid-row: 1;
		grid-column: span 2;
	}
	.content {
		padding: 0.75rem 1rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		flex: 1;
	}
	.featured .content {
		padding: 1rem 1.5rem;
	}

	@media screen and (min-width: 768px) {
		article {
			grid-column: 4 / 6;
			grid-row: auto;
		}
		.featured {
			grid-row: span 2;
			grid-column: 1 / 4;
		}
	}
</style>
