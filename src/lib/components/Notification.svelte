<script lang="ts">
	export let notificationProps;
	const { content } = notificationProps;
	import { onDestroy } from 'svelte';
	import { notifications } from '$lib/stores/notifications';
	import { fly } from 'svelte/transition';
	let show = true;
	const timeout = setTimeout(() => {
		$notifications = $notifications.filter((notification) => notification.content != content);
	}, 2500);

	onDestroy(() => {
		clearTimeout(timeout);
	});
</script>

{#if show}
	<div transition:fly={{ delay: 0, duration: 300, x: 100, y: 0, opacity: 0 }}>
		{content}
	</div>
{/if}

<style>
	div {
		background-color: var(--colour-white);
		border: 1px solid var(--colour-primary-500);
		border-radius: 0.25rem;
		padding: 0.5rem 1rem;
	}
</style>
