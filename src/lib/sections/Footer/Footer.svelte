<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import Newsletter from './Newsletter.svelte';
	import Section from '$lib/components/Section.svelte';
	import SocialMediaList from './SocialMediaList.svelte';
	export let footerProps;
	const { socialMediaLinks: socialMediaListProps, newsletter: newsletterProps } = footerProps;
</script>

<Section tag="footer" borderTop>
	<Container>
		<div>
			<Logo />
			<SocialMediaList {socialMediaListProps} />
		</div>
		<Newsletter {newsletterProps} />
		<span><Icon icon="cactus" width="200px" /></span>
	</Container>
</Section>

<style>
	span {
		display: none;
		color: var(--colour-primary-100);
		position: absolute;
		right: 0;
		bottom: 0;
	}
	@media screen and (min-width: 768px) {
		div {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		span {
			display: block;
		}
	}
</style>
