<script lang="ts">
	import Tag from './Tag.svelte';
	export let tags: [{ colour: string; label: string }];
</script>

<ul>
	{#each tags as { colour, label }}
		<Tag {colour}>{label}</Tag>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		list-style: none;
		flex-wrap: wrap;
		gap: 0.25rem;
	}
</style>
