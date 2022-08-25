<script lang="ts">
	import Header from '$lib/sections/Header/Header.svelte';
	import Footer from '$lib/sections/Footer/Footer.svelte';
	import GTM from '$lib/GTM.svelte';
	import Main from '$lib/components/Main.svelte';
	export let data;
	const { navItems: headerProps, ...footerProps } = data;
</script>

<GTM />
<Header {headerProps}/>
	<Main>
		<slot />
	</Main>
<Footer {footerProps}/>

<style lang="scss" global>
	@import '../../static/styles/global.scss';
</style>
