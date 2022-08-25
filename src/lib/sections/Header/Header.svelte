<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import NavMenu from './NavMenu.svelte';
	import Section from '$lib/components/Section.svelte';
	import Row from '$lib/components/Row.svelte';
	export let headerProps;
</script>

<Section tag="header" borderBottom sticky>
	<Container>
		<Row>
			<Logo />
			<NavMenu navMenuProps={headerProps}/>
		</Row>
	</Container>
</Section>
