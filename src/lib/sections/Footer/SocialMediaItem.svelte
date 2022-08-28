<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';

	export let socialMediaItemProps;
	const { href, label, icon } = socialMediaItemProps;
</script>

<li><a {href}><Icon {icon} /><span>{label}</span></a></li>

<style>
	a {
		color: var(--colour-primary-500);
	}
	span {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
	}
</style>
