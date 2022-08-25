<script lang="ts">
	const currentYear = new Date().getFullYear();
</script>

<small><span>© {currentYear} <a href="/">sabo10</a></span></small>

<style>
	small {
		display: flex;
		justify-content: center;
		text-align: center;
		color: var(--colour-neutral-500);
		font-family: var(--font-family-body);
		font-size: var(--font-size-s);
		margin-top: 1.5rem;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
</style>
