<script lang="ts">
	import SEO from '$lib/SEO.svelte';

	export let data;
	const { title, description } = data;
</script>

<SEO {title} metadescription={description} />
{title}
