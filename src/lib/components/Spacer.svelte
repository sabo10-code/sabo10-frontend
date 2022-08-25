<script lang="ts">
	export let block = '1rem';
	export let inline = '0';
</script>

<div style="--marginBlock: {block}; --marginInline: {inline}">
	<slot />
</div>

<style>
	div {
		margin: var(--marginBlock) var(--marginInline);
	}
</style>
