<div>
	<slot/>
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		place-items: start;
		gap: 1rem;
	}
	@media screen and (min-width: 768px) {
		div {
			grid-template-columns: repeat(5, 1fr);
			gap: 1.5rem;
		}
	}
	@media screen and (min-width: 1440px) {
		div {
			gap: 2.5rem;
		}
	}
</style>
