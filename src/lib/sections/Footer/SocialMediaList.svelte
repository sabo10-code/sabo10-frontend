
<ul>
	<slot/>
</ul>

<style>
	ul {
		list-style: none;
		display: grid;
		grid-auto-flow: column;
		grid-template-rows: repeat(2, 1fr);
		justify-content: space-between;
		margin-top: 1.5rem;
		row-gap: 1rem;
	}
	@media screen and (min-width: 768px) {
		ul {
			grid-template-rows: repeat(1, 1fr);
			gap: 1.5rem;
		}
	}
</style>
