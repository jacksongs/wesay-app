<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>We Say - { $page.data.athlete.name } official pronunciation</title>
	<meta name="The home of sporting athletes' pronunciations">
</svelte:head>

<slot />