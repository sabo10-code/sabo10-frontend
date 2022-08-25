<script lang="ts">
	let siteTitle = 'sabo10';
	export let seoProps: { title: string; description: string };
	const { title, description } = seoProps;

	const pageTitle = `${title} | ${siteTitle} `;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={description} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
</svelte:head>
