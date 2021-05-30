<script lang="ts">
	import ThemeToggle from '$lib/ThemeToggle.svelte';
	import BitbucketIcon from './_index/BitbucketIcon.svelte';
	import EmailIcon from './_index/EmailIcon.svelte';
	import GithubIcon from './_index/GithubIcon.svelte';
	import LinkedinIcon from './_index/LinkedinIcon.svelte';
	import ReadingListIcon from './_index/ReadingListIcon.svelte';
	import ResumeIcon from './_index/ResumeIcon.svelte';
	import TwitterIcon from './_index/TwitterIcon.svelte';
	import ProfileLink from './_index/ProfileLink.svelte';
	import Section from './_index/Section.svelte';
</script>

<svelte:head>
	<title>Matt Turco</title>
	<meta
		name="description"
		content="Matt Turco is a front end engineer & design enthusiast in Denver, Colorado."
	/>
</svelte:head>

<span class="theme-toggle">
	<ThemeToggle />
</span>

<main>
	<header>
		<h1>Matt Turco</h1>
		<h2>front end engineer <span class="mobile-break">&amp; design enthusiast</span></h2>
	</header>

	<div class="links">
		<Section title="Code">
			<div class="link-group">
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
			<div class="link-group">
				<ProfileLink external href="https://twitter.com/matt_turco">
					<TwitterIcon slot="icon" />
					<svelte:fragment slot="label">Twitter</svelte:fragment>
				</ProfileLink>

				<ProfileLink external href="mailto:matt.turco@gmail.com">
					<EmailIcon slot="icon" />
					<svelte:fragment slot="label">Email</svelte:fragment>
				</ProfileLink>

				<ProfileLink external href="https://linkedin.com/in/mattturco">
					<LinkedinIcon slot="icon" />
					<svelte:fragment slot="label">LinkedIn</svelte:fragment>
				</ProfileLink>
			</div>
		</Section>

		<Section title="Other">
			<div class="link-group">
				<ProfileLink href="/resume">
					<ResumeIcon slot="icon" />
					<svelte:fragment slot="label">Resume</svelte:fragment>
				</ProfileLink>

				<ProfileLink href="/reading-list">
					<ReadingListIcon slot="icon" />
					<svelte:fragment slot="label">Reading List</svelte:fragment>
				</ProfileLink>
			</div>
		</Section>
	</div>
</main>

<style lang="postcss">
	.theme-toggle {
		position: absolute;
		top: 0;
		right: 0;
		padding: 1rem;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		padding: 10vh 0;
	}

	header {
		margin-bottom: 3rem;
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

	.mobile-break {
		display: block;

		@media (min-width: 30rem) {
			display: inline;
		}
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		& > :global(*) {
			margin: 1.5rem;
		}
	}

	.link-group {
		display: flex;
	}
</style>
