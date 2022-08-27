<script lang="ts">
	import { cookieConsentStatus, cookieConsentBannerViewed } from '$lib/stores/cookieConsent';
	import { slide } from 'svelte/transition';
	import { onDestroy } from 'svelte';
	import Spacer from './components/Spacer.svelte';

	function handleCookiesButtonClick(value: boolean) {
		$cookieConsentStatus = value;
		$cookieConsentBannerViewed = true;
	}

	let hidden = true;
	function showCookieConsentBanner() {
		hidden = false;
	}

	const timeout = setTimeout(showCookieConsentBanner, 2000);

	onDestroy(() => clearTimeout(timeout));
</script>

{#if !$cookieConsentBannerViewed}
	<div out:slide class:hidden>
		<p>
			This site uses cookies. For details please see our <a href="/privacy-policy">privacy policy</a
			>.
		</p>
		<Spacer block="1rem 0">
			<span>
				<button class="accept" on:click={() => handleCookiesButtonClick(true)}>Accept</button>
				<button class="reject" on:click={() => handleCookiesButtonClick(false)}>Reject</button>
			</span>
		</Spacer>
		<button class="close" on:click={() => handleCookiesButtonClick(true)} aria-label="Close" />
	</div>
{/if}

<style>
	div {
		position: fixed;
		inset: auto 0 0;
		background-color: var(--colour-white);
		border-top: 1px solid var(--colour-primary-500);
		transform: translateY(0);
		transition: transform 250ms ease-in;
		padding: 1rem 1.5rem;
		font-family: var(--font-family-body);
	}
	.hidden {
		transform: translateY(100%);
	}
	a {
		color: var(--colour-primary-500);
		text-decoration: none;
	}

	button {
		border: none;
		cursor: pointer;
	}
	span {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	span button {
		border-radius: 0.25rem;
		padding: 0.25rem 0.5rem;
		color: var(--colour-white);
		font-family: var(--font-family-heading);
		font-weight: var(--font-weight-bold);
	}
	.accept {
		background-color: var(--colour-primary-500);
	}
	.reject {
		background-color: var(--colour-neutral-500);
	}

	.close {
		width: 0px;
		height: 0px;
		background-color: transparent;
		position: absolute;
		right: 0.25rem;
		top: 0.25rem;
	}
	.close:focus-visible::before,
	.close:focus-visible::after {
		outline: 1px solid var(--colour-primary-500);
	}
	.close::before,
	.close::after {
		content: '';
		display: block;
		position: relative;
		right: 0.25rem;
		top: 0.25rem;
		width: 1rem;
		height: 1rem;
		background: repeating-linear-gradient(
			90deg,
			transparent,
			transparent 7.5px,
			var(--colour-neutral-900) 0px,
			var(--colour-neutral-900) 8.5px
		);
		border-radius: 50%;
		transform: translate(-50%, -50%) rotate(-45deg);
		transform-origin: right bottom;
	}
	.close::after {
		transform: translate(-50%, -50%) rotate(45deg);
		transform-origin: right top;
	}
</style>
