<script lang="ts">
	import Link from '$lib/Link.svelte';
	import Section from './_lib/Section.svelte';
	import Heading from './_lib/Heading.svelte';
	import Subheading from './_lib/Subheading.svelte';
	import SidebarHeading from './_lib/SidebarHeading.svelte';
</script>

<svelte:head>
	<title>Resume | Matt Turco</title>
</svelte:head>

<main>
	<header>
		<h1 class="name"><Link href="/">Matt Turco</Link></h1>

		<ul class="contact">
			<li>Denver, CO</li>
			<li class="slash">
				<Link inheritColor external href="mailto:matt.turco@gmail.com">matt.turco@gmail.com</Link>
			</li>
			<li class="slash">
				<Link inheritColor external href="tel:4026305866">(402) 630-5866</Link>
			</li>
			<li class="slash"><Link inheritColor href="/">mturco.com</Link></li>
		</ul>
	</header>

	<Section title="Experience" primary>
		<div class="subsection">
			<Heading>Namely</Heading>

			<div class="flex baseline">
				<Subheading>Senior Front End Engineer, Tech Lead</Subheading>
				<span class="time-span slash">Mar 2019 – Present</span>
			</div>

			<div class="flex baseline">
				<Subheading>Front End Engineer</Subheading>
				<span class="time-span slash">May 2018 – Mar 2019</span>
			</div>

			<!-- <ul>
				<li>
					<p>
						<strong>Engineering</strong>
					</p>
					<ul>
						<li>
							Built much of Namely&apos;s design system, focusing on composability and
							accessibility. Emphasized the importance of semantic and predictable component APIs.
						</li>
						<li>
							Developed a state management library that greatly simplified building complex forms
							with branching logic, multi-page flows, input validation, and inline editing.
						</li>
						<li>
							Migrated monorepo CI system from Jenkins to Drone, reducing CI time by 67% (36 min →
							12 min). This increased team velocity and enabled other engineers to confidently make
							CI changes.
						</li>
					</ul>
				</li>
				<li>
					<p>
						<strong>Leadership</strong>
					</p>
					<ul>
						<li>
							Defined the vision and roadmap for the frontend platform. Led quarterly workshops to
							address tech debt or prototype new ideas.
						</li>
						<li>
							Defined code standards and best practices. Codified these standards and guidelines as
							an open source{' '}
							<Link external href="https://www.npmjs.com/package/@namely/eslint-config-namely">
								ESLint rule set</Link
							>.
						</li>
						<li>
							Mentored 4 engineers by guiding them in their work, providing code review, offering
							role and career advice, and creating opportunities for them to grow.
						</li>
					</ul>
				</li>
				<li>
					<p>
						<strong>Impact</strong>
					</p>
					<ul>
						<li>
							Strove to share knowledge and level up the team as a whole. Frequently presented new
							ideas and technologies and compiled weekly reading lists. Created proof-of-concepts to
							demonstrate feasibility of new ideas.
						</li>
						<li>
							Identified common patterns in application code and developed encompassing solutions at
							the platform level.
						</li>
					</ul>
				</li>
			</ul> -->
		</div>

		<div class="subsection">
			<Heading>Gallup</Heading>

			<div class="flex baseline">
				<Subheading>Front End Engineer</Subheading>
				<span class="time-span slash">Feb 2015 – Apr 2018</span>
			</div>

			<ul>
				<li>
					Created the charting library that renders all of Gallup&apos;s line chart graphics using
					JavaScript and SVG. Using that library, created an interactive data visualization for{' '}
					<Link
						external
						href="http://news.gallup.com/interactives/185273/presidential-job-approval-center.aspx"
					>
						exploring presidential approval ratings</Link
					>.
				</li>
				<li>Developed a component library that unifies Gallup&apos;s apps and marketing sites.</li>
				<li>
					Improved site performance by optimizing the critical rendering path, defering scripts,
					compressing assets, and reducing dependencies.
				</li>
				<li>Enhanced keyboard and screen reader accessibility to meet WCAG2 standard.</li>
				<li>Conducted user tests and presented findings to stakeholders.</li>
			</ul>
		</div>

		<div class="subsection">
			<Heading>Optimum Data</Heading>

			<div class="flex baseline">
				<Subheading>Software Engineer</Subheading>
				<span class="time-span slash">Nov 2012 – Feb 2015</span>
			</div>

			<ul>
				<li>
					Designed and developed a web app to surface critical order and inventory information from
					Microsoft Dynamics NAV. The app dramatically sped up order fulfillment time.
				</li>
			</ul>
		</div>
	</Section>

	<div class="divider" aria-hidden="true" />

	<Section title="Education">
		<SidebarHeading>Creighton University</SidebarHeading>
		<p>
			B.S. in Business Administration
			<br />
			Business Intelligence &amp; Analytics
		</p>
	</Section>

	<Section title="Technologies">
		<div class="subsection">
			<SidebarHeading>Web platform</SidebarHeading>
			<p>HTML, JavaScript, TypeScript, CSS, SVG</p>
		</div>

		<div class="subsection">
			<SidebarHeading>Other languages</SidebarHeading>
			<p>C#, PHP, SQL</p>
		</div>

		<div class="subsection">
			<SidebarHeading>Component frameworks</SidebarHeading>
			<p>React, Svelte, Vue</p>
		</div>

		<div class="subsection">
			<SidebarHeading>App frameworks</SidebarHeading>
			<p>Gatsby, CRA, SvelteKit</p>
		</div>

		<div class="subsection">
			<SidebarHeading>Testing</SidebarHeading>
			<p>Jest, React Testing Library, Cypress, Chromatic, Lighthouse</p>
		</div>

		<div class="subsection">
			<SidebarHeading>Tooling</SidebarHeading>
			<p>Webpack, Babel, PostCSS, ESLint, Stylelint</p>
		</div>
	</Section>

	<Section title="Talks">
		<div class="subsection">
			<p>
				<Link external href="https://cross-component-communication.mturco.com/"
					>Cross Component Communication</Link
				>
				<br />
				React NYC &middot; 2020
			</p>
		</div>
	</Section>

	<Section title="Interests">
		<p>
			Here are some things I love to chat about: tech, basketball, design, the web, photography, and
			of course, building cool things with code.
		</p>
	</Section>
</main>

<style lang="postcss">
	main {
		--grid-line-color: var(--color-divider-hc);
		--section-item-gap: 1.5rem;

		display: grid;
		grid-template:
			'header header header' max-content
			'experience divider education' max-content
			'experience divider technologies' max-content
			'experience divider talks' max-content
			'experience divider interests' max-content
			'experience divider .' max-content
			/ 1fr min-content 26ch;
		gap: 2rem;
		align-content: start;
		line-height: 1.5;
		margin: 0 auto;
		padding: 1.5rem;
		max-width: 64rem;

		@media (min-width: 30rem) {
			padding-right: 1.5rem;
			padding-left: 1.5rem;
		}

		@media (min-width: 40rem) {
			padding-right: 3rem;
			padding-left: 3rem;
		}

		@media (min-width: 48rem) {
			padding-top: 5rem;
			padding-bottom: 5rem;
		}

		@media print {
			--section-item-gap: 1.25rem;

			gap: 2rem 1.5rem;
			padding: 0;
			height: calc(11in - 1.5cm);
		}
	}

	header {
		grid-area: header;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	.name {
		font: 700 2.5rem var(--font-heading);
		letter-spacing: 0.03em;
		margin: 0;
		line-height: 1;
		white-space: nowrap;
	}

	.contact {
		display: inline-flex;
		list-style: none;
		padding: 0;
		margin: 0;
		align-items: baseline;
		flex-wrap: wrap;

		& li {
			margin: 0;
			padding: 0;
		}
	}

	.slash::before {
		content: '';
		margin: 0 0.5rem 0 1.25rem;
		color: var(--color-primary);
		font-weight: 700;
		transform: rotateZ(30deg);
		height: 1.375rem;
		border-left: 2px solid var(--color-primary);
		display: inline-flex;
		vertical-align: middle;
		transform-origin: top;
	}

	.divider {
		grid-area: divider;
		border-left: 2px solid var(--color-divider-lc);
	}

	.subsection:not(:last-child) {
		margin-bottom: var(--section-item-gap);
	}

	.time-span {
		color: var(--color-text-lc);
	}

	.flex {
		display: flex;
	}

	.baseline {
		align-items: baseline;
	}

	p {
		margin: 0;

		&:not(:last-child) {
			margin-bottom: 0.375em;
		}
	}

	ul {
		padding-left: 1.5rem;
		margin: 0.25rem 0 0;
		list-style-type: circle;
	}

	li {
		margin-bottom: 0.5em;

		&:last-child {
			margin-bottom: 0;
		}
	}
</style>