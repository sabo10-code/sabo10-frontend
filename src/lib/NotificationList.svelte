<script>
	import Notification from './components/Notification.svelte';
	import { notifications } from './stores/notifications';
</script>

<div>
	{#each $notifications as notificationProps}
		<Notification {notificationProps} />
	{/each}
</div>

<style>
	div {
		position: absolute;
		padding: inherit;
		top: 100%;
		inset-inline: 0;
		z-index: -1;
	}
</style>
