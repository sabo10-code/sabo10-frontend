import type { RequestEvent } from '@sveltejs/kit';

export const prerender = false;

export async function POST({ request }: RequestEvent) {
	const data = await request.formData();
	return new Response(JSON.stringify([...data.entries()]));
}
