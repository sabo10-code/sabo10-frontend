import { writable } from 'svelte/store';
import { browser } from '$app/env';

const existingCookieConsentStatus = browser && localStorage.getItem('sabo10_consent') == "true";

export const cookieConsentStatus = writable(existingCookieConsentStatus);
export const cookieConsentBannerViewed = writable(existingCookieConsentStatus);

if (browser) {
	cookieConsentStatus.subscribe((value) => {
		localStorage.setItem('sabo10_consent', `${value}`);
	});
}
