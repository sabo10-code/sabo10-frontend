<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import Newsletter from './Newsletter.svelte';
	import Section from '$lib/components/Section.svelte';
	import SocialMediaList from './SocialMediaList.svelte';
	import SocialMediaItem from './SocialMediaItem.svelte';

	export let footerProps;
	const { socialMediaList, newsletterProps } = footerProps;
</script>

<Section tag="footer" borderTop>
	<Container>
		<div>
			<Logo />
			<SocialMediaList>
				{#each socialMediaList as socialMediaItemProps}
					<SocialMediaItem {socialMediaItemProps} />
				{/each}
			</SocialMediaList>
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
