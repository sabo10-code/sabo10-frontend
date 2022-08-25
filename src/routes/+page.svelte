<script lang="ts">
	import Blog from '$lib/sections/Blog/Blog.svelte';
	import Contact from '$lib/sections/Contact/Contact.svelte';
	import Hero from '$lib/sections/Hero/Hero.svelte';
	import SEO from '$lib/SEO.svelte';
	import Services from '$lib/sections/Services/Services.svelte';
	import Work from '$lib/sections/Work/Work.svelte';
	export let data;
	const { seoProps, heroProps, workProps, servicesProps, blogProps, contactProps } = data;
</script>

<SEO {seoProps} />
<Hero {heroProps} />
<Work {workProps} />
<Services {servicesProps} />
<Blog {blogProps} />
<Contact {contactProps} />
