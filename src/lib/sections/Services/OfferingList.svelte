<script lang="ts">
	import Offering from './Offering.svelte';

	export let offerings: [{ heading: string; icon: string; body: string }];
</script>

<ul>
	{#each offerings as offering}
		<Offering {offering} />
	{/each}
</ul>

<style>
	ul {
		list-style: none;
	}
	@media screen and (min-width: 768px) {
		ul {
			display: flex;
		}
	}
</style>
