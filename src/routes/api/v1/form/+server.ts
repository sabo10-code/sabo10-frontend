export async function POST({ request, url }) {
	const values = await request.formData();
	const email = values.get('email');

	const response = await fetch('https://catfact.ninja/fact');
	const data = await response.json();
	const { fact } = data;

	return new Response(`${email} - ${fact}`);
}
