<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Row from '$lib/components/Row.svelte';
	export let serviceItemProps;
	const { heading, icon, text } = serviceItemProps;
</script>

<li>
	<Row>
		<Heading tag="h3">{heading}</Heading>
		<Icon {icon} width="2.5rem" />
	</Row>
	<Paragraph>{text}</Paragraph>
</li>
