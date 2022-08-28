<script lang="ts">
	import Header from '$lib/sections/Header/Header.svelte';
	import Footer from '$lib/sections/Footer/Footer.svelte';
	import GTM from '$lib/GTM.svelte';
	import Main from '$lib/components/Main.svelte';
	import CookieConsentBanner from '$lib/CookieConsentBanner.svelte';
	import SkipLink from '$lib/SkipLink.svelte';
	export let data;
	import { setContext } from 'svelte';
	const { globalContext, headerProps, footerProps, cookieConsentBannerProps } = data;
	setContext('globalContext', globalContext);
</script>

<GTM />
<SkipLink />
<Header {headerProps} />

<Main>
	<slot />
</Main>
<Footer {footerProps} />
<CookieConsentBanner {cookieConsentBannerProps} />

<style lang="scss" global>
	@import '../../static/styles/global.scss';
</style>
