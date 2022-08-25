import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: '7xck1mhm',
	dataset: 'production',
	apiVersion: '2022-08-24',
	useCdn: false
});

export default client;
