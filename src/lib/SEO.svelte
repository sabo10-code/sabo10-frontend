<script lang="ts">

	import { getContext } from 'svelte';
	const { siteTitle, siteDescription } = getContext('globalContext')
	export let seoProps: { title: string; description: string };
	const { title, description } = seoProps;

	const pageTitle = title !== '' ? `${title} | ${siteTitle}` : siteTitle;
	const pageDescription = description !== '' ? description : siteDescription
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
</svelte:head>
