import client from '../sanityClient';

export async function load() {
	const props = {
		globalContext: {
			logo: '',
			siteTitle: 'sabo10',
			siteDescription: ''
		},

		headerProps: {
			navMenuProps: [
				{
					href: '/',
					label: 'home',
					icon: 'cactus'
				},
				{
					href: '/work',
					label: 'work',
					icon: 'cactus'
				},
				{
					href: '/services',
					label: 'services',
					icon: 'cactus'
				},
				{
					href: '/blog',
					label: 'blog',
					icon: 'cactus'
				},
				{
					href: '/contact',
					label: 'contact',
					icon: 'cactus'
				}
			]
		},
		footerProps: {
			socialMediaList: [
				{
					href: 'www.example.com',
					label: 'LinkedIn',
					icon: 'linkedin'
				}
			],
			newsletterProps: {
				newsletterText: '',
				newsletterFormProps: {
					button: {
						label: '',
						icon: ''
					},
					successNotificationText: ""
				}
			}
		},
		cookieConsentBannerProps: {
			delay: 500,
			text: '',
			acceptLabel: "",
			rejectLabel: ''
		}
	};

	return props;

	return await client.fetch(`*[
		_type == "siteConfiguration"][0]{
			socialMediaLinks[]{
				label,
				"href": url,
				"icon": icon.name
			},
			newsletter{
				"inputLabel": emailInputLabel,
				text,
				...(submitButton{
					"buttonLabel": label,
					"icon": icon.name
				})
			},
			...(navigation{
				navItems[]{
				...(page->{
					"label": title,
					"href": "/" + select(
						slug.current != 'home' => slug.current, ""
					)
				})}
			})
		}
	`);
}
