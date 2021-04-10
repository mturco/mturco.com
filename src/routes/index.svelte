<script lang="ts">
	import BitbucketIcon from './_index/BitbucketIcon.svelte';
	import EmailIcon from './_index/EmailIcon.svelte';
	import GithubIcon from './_index/GithubIcon.svelte';
	import LinkedinIcon from './_index/LinkedinIcon.svelte';
	import ReadingListIcon from './_index/ReadingListIcon.svelte';
	import ResumeIcon from './_index/ResumeIcon.svelte';
	import ProfileLink from './_index/ProfileLink.svelte';
	import Section from './_index/Section.svelte';
</script>

<svelte:head>
	<title>Matt Turco</title>
</svelte:head>

<main>
	<header>
		<h1>Matt Turco</h1>
		<h2>front end engineer &amp; design enthusiast</h2>
	</header>

	<Section title="Code">
		<div class="flex">
			<ProfileLink external href="https://github.com/mturco">
				<GithubIcon slot="icon" />
				<svelte:fragment slot="label">GitHub</svelte:fragment>
			</ProfileLink>

			<ProfileLink external href="https://bitbucket.org/mturco">
				<BitbucketIcon slot="icon" />
				<svelte:fragment slot="label">BitBucket</svelte:fragment>
			</ProfileLink>
		</div>
	</Section>

	<Section title="Contact">
		<div class="flex">
			<ProfileLink external href="https://linkedin.com/in/mattturco">
				<LinkedinIcon slot="icon" />
				<svelte:fragment slot="label">LinkedIn</svelte:fragment>
			</ProfileLink>

			<ProfileLink external href="mailto:matt.turco@gmail.com">
				<EmailIcon slot="icon" />
				<svelte:fragment slot="label">Email</svelte:fragment>
			</ProfileLink>
		</div>
	</Section>

	<Section title="Other">
		<div class="flex">
			<ProfileLink href="/resume">
				<ResumeIcon slot="icon" />
				<svelte:fragment slot="label">Resume</svelte:fragment>
			</ProfileLink>

			<!-- <ProfileLink href="/reading-list">
				<ReadingListIcon slot="icon" />
				<svelte:fragment slot="label">Reading List</svelte:fragment>
			</ProfileLink> -->
		</div>
	</Section>
</main>

<style lang="postcss">
	main {
		display: grid;
		grid-template-columns: 1fr;
		gap: 5rem 3rem;
		min-height: 100vh;
		align-content: center;
		justify-items: center;
		justify-content: center;

		@media (min-width: 48rem) {
			grid-template:
				'header header header' max-content
				'. . .' max-content / auto auto auto;
		}
	}

	header {
		@media (min-width: 48rem) {
			grid-area: header;
		}
	}

	h1 {
		color: var(--color-primary);
		font: 700 3em Montserrat, var(--font-base);
		letter-spacing: 0.03em;
		margin: 0 0 0.5rem;
		text-align: center;
	}

	h2 {
		font-size: 1.5em;
		font-weight: 300;
		text-align: center;
		text-transform: lowercase;
		line-height: 1.5;
		color: var(--color-text-lc);
	}

	.flex {
		display: flex;
	}
</style>
