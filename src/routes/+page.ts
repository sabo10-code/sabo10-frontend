import client from '../sanityClient';

export async function load({ url: { pathname }}) {
	console.log(pathname)

	const props = await client.fetch(`*[
		_type == "page"
	][0]{
		heading,
		body,
		button->{label,icon,href}
	}`);
	
	const heroProps = await client.fetch(`*[
		_type == "hero"
	][0]{
		heading,
		body,
		button->{label,icon,href}
	}`);
	const seoProps = { title: '1', description: '2' };
	return {
		seoProps,
		heroProps,
		workProps: {
			heading: 'work',
			imageSrc:
				'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris neque nec nunc faucibus ac urna. Vel vitae proin sed volutpat ut malesuada vitae. Ut ornare nunc amet purus turpis magna maecenas.',
			button: {
				label: 'See what we do',
				icon: 'arrow',
				href: '/work'
			}
		},
		servicesProps: {
			heading: 'services',
			offerings: [
				{
					heading: 'design',
					icon: 'pencil',
					body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut montes, phasellus vitae, in bibendum. Purus semper donec volutpat pellentesque tincidunt consequat, enim urna. Diam vulputate in ultricies interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut montes, phasellus vitae, in bibendum. Purus semper donec volutpat pellentesque tincidunt consequat, enim urna. Diam vulputate in ultricies interdum.'
				},
				{
					heading: 'development',
					icon: 'code',
					body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut montes, phasellus vitae, in bibendum. Purus semper donec volutpat pellentesque tincidunt consequat, enim urna. Diam vulputate in ultricies interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut montes, phasellus vitae, in bibendum. Purus semper donec volutpat pellentesque tincidunt consequat, enim urna. Diam vulputate in ultricies interdum.'
				}
			],
			button: {
				label: 'Create',
				href: '/services'
			}
		},
		blogProps: {
			heading: 'blog',
			blogs: [
				{
					title: '10 things to improve your X',
					imageSrc:
						'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
					body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus nascetur mi sed arcu nullam sed. Nisi quis urna purus tellus pretium metus consequat tincidunt ornare. Sed elementum elementum pretium varius diam. Purus pretium ut sapien nulla vel arcu. Dui risus ultrices neque laoreet aliquet pellentesque.',
					tags: [
						{ label: 'marketing', colour: 'purple' },
						{ label: 'design', colour: 'blue' }
					],
					button: {
						label: 'Continue reading',
						href: '/blog/article1',
						icon: 'arrow'
					}
				},
				{
					title: '10 things to improve your X',
					imageSrc:
						'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',

					body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus nascetur mi sed arcu nullam sed. Nisi quis urna purus tellus pretium metus consequat tincidunt ornare. Sed elementum elementum pretium varius diam. Purus pretium ut sapien nulla vel arcu. Dui risus ultrices neque laoreet aliquet pellentesque.',
					tags: [
						{ label: 'marketing', colour: 'purple' },
						{ label: 'design', colour: 'blue' }
					],
					button: {
						label: 'Find out more',
						href: '/blog/article2',
						icon: 'arrow'
					}
				},
				{
					title: 'Why X when you could Y?',
					imageSrc:
						'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',

					body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus nascetur mi sed arcu nullam sed. Nisi quis urna purus tellus pretium metus consequat tincidunt ornare. Sed elementum elementum pretium varius diam. Purus pretium ut sapien nulla vel arcu. Dui risus ultrices neque laoreet aliquet pellentesque.',
					tags: [
						{ label: 'marketing', colour: 'purple' },
						{ label: 'design', colour: 'blue' }
					],
					button: {
						label: 'Find out more',
						href: '/blog/article3',
						icon: 'arrow'
					}
				}
			],
			button: {
				label: 'Read the rest',
				href: '/blog',
				icon: 'arrow'
			},
			watermark: 'fresh'
		},
		contactProps: {
			heading: 'contact',
			body: "Ready to grow your digital presence? Get in touch below or email us at <a style='font-weight: var(--font-weight-bold); display: inline-block; text-decoration: none; color: var(--colour-primary-500)' href='mailto:hello@sabo10.co.uk?subject=Test&body=Maybe'>hello@sabo10.co.uk</a>",
			button: {
				label: 'Submit',
				icon: 'plane'
			}
		}
	};
}
