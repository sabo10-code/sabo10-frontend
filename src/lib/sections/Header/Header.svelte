<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import NavMenu from './NavMenu.svelte';
	import Section from '$lib/components/Section.svelte';
	export let headerProps;
</script>

<Section tag="header" borderBottom sticky>
	<Container>
		<div>
			<Logo />
			<NavMenu navMenuProps={headerProps}/>
		</div>
	</Container>
</Section>

<style>
	div {
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: space-between;
	}
</style>
