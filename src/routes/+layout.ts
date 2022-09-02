import client from '../sanityClient';

export async function load() {
	return await client.fetch(`*[
		_type == "siteSettings"][0]{
	  		'globalContext':{
				logo{
					...asset->{
						url}},
				siteTitle,
				siteDescription},
	  "headerProps": header->{
	  	"navMenuList": navMenu[]{
			icon->{
				...image{
					...asset->{
						url}}},
			...page->{
				"label": title,
				"href":url}}
		},
	  "footerProps":footer->{
		"socialMediaList": socialMedia[]{
			label,
			"href": url,
			icon->{
				...image{
					...asset->{
						url}}}},
		"newsletterProps": newsletter{
			text,
			"newsletterFormProps": newsletterForm{
				button{
					label,
					icon->{
						...image{
							...asset->{
								url}}}},
				successNotificationText}}},
	  "cookieConsentBannerProps": cookieConsentBanner{
		acceptLabel,
		delay,
		rejectLabel,
		text}
	}`);
}
