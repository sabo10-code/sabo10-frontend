<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import NavMenu from './NavMenu.svelte';
	import Section from '$lib/components/Section.svelte';
	import Row from '$lib/components/Row.svelte';
	import NotificationList from '$lib/NotificationList.svelte';
	export let headerProps;
	const { navMenuProps } = headerProps
</script>

<Section tag="header" borderBottom sticky overflowHidden={false}>
	<Container>
		<Row>
			<Logo />
			<NavMenu {navMenuProps} />
		</Row>
	</Container>
	<NotificationList />
</Section>
