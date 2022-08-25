<script lang="ts">
	export let src: string;
	export let alt = '';
	export let maxHeight = '';
</script>

<img {src} {alt} style="--maxHeight: {maxHeight}" />

<style>
	img {
		max-height: var(--maxHeight);
		object-fit: cover;
	}
</style>
