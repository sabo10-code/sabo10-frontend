import client from '../sanityClient';

export async function load() {
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
