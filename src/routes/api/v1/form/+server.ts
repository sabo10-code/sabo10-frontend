export async function POST({ request }) {
	const values = await request.formData();
	const email = values.get('email');
	const data = {
		contacts: [
			{
				email
			}
		]
	};
	const { SENDGRID_API_KEY } = process.env;
	const SENDGRID_ENDPOINT = 'https://api.sendgrid.com/v3/marketing/contacts';
	const response = await fetch(SENDGRID_ENDPOINT, {
		method: 'PUT',
		headers: {
			'Authorization': `Bearer ${SENDGRID_API_KEY}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	const status = response.status;

	return new Response(JSON.stringify(status));
}
