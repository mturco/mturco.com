import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import { Heading, LayoutBase, PageMeta, Resume } from '@components';

const GlobalStyle = createGlobalStyle`
  @media print {
    :root {
      height: 0;
      margin: 0.75cm 1cm;
      font-size: 12pt;
    }

    @page {
      margin: 0;
    }
  }
`;

const Stack = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem 0;

  @media print {
    gap: 1rem 0;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem 2.5rem;
  grid-template-columns: 1fr;

  @media print, (min-width: 64rem) {
    grid-template-columns: 1fr 1fr;
  }

  @media print {
    row-gap: 1rem;
  }
`;

const Wrapper = styled.div`
  box-sizing: content-box;
  padding: 1.5rem;
  color: var(--color-text-hc);

  @media screen {
    margin: 0 auto;
    max-width: 58rem;
  }

  @media (min-width: 30rem) {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }

  @media (min-width: 40rem) {
    padding-right: 3rem;
    padding-left: 3rem;
  }

  @media (min-width: 48rem) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  @media print {
    padding: 0;
  }
`;

const Header = styled.header`
  align-items: flex-end;
  justify-content: space-between;

  @media print, (min-width: 64rem) {
    display: flex;
  }
`;

const StyledHeading = styled(Heading)`
  margin: 0 0 0.75rem -3px;
  line-height: 1;

  @media print, (min-width: 64rem) {
    margin-bottom: -3px;
  }
`;

export default () => (
  <LayoutBase>
    <PageMeta title="Resume" />
    <GlobalStyle />

    <Wrapper>
      <Header>
        <StyledHeading />
        <Resume.ContactInfoList>
          <Resume.ContactInfoItem>New York, NY</Resume.ContactInfoItem>
          <Resume.ContactInfoItem href="mailto:matt.turco@gmail.com">
            matt.turco@gmail.com
          </Resume.ContactInfoItem>
          <Resume.ContactInfoItem href="https://github.com/mturco">
            github.com/mturco
          </Resume.ContactInfoItem>
          <Resume.ContactInfoItem href="/">mturco.com</Resume.ContactInfoItem>
        </Resume.ContactInfoList>
      </Header>

      <Resume.Section title="Experience">
        <Stack>
          <Resume.Item
            title="Namely"
            subtitle="Senior Front End Engineer"
            from="2019-03"
          />

          <Resume.Item
            subtitle="Front End Engineer"
            from="2018-05"
            to="2019-03"
          />

          <Resume.Item
            title="Gallup"
            subtitle="Front End Developer"
            from="2015-02"
            to="2018-04"
          >
            <Resume.UnorderedList>
              <Resume.ListItem>
                Wrote an SVG charting library from scratch; used it to build an
                interactive data visualization for{' '}
                <Resume.Link
                  href="http://news.gallup.com/interactives/185273/presidential-job-approval-center.aspx"
                  data-short-url="https://goo.gl/aZQsaz"
                >
                  exploring presidential approval ratings
                </Resume.Link>
              </Resume.ListItem>
              <Resume.ListItem>
                Built a library of UI components used by Gallup's web apps and
                marketing sites
              </Resume.ListItem>
              <Resume.ListItem>
                Improved site performance by optimizing the critical rendering
                path, minimizing asset sizes, and reducing dependencies
              </Resume.ListItem>
              <Resume.ListItem>
                Enhanced keyboard and screen reader accessibility of the
                StrengthsQuest web app to obtain WCAG2 certification
              </Resume.ListItem>
              <Resume.ListItem>
                Conducted remote and in-person usability studies and presented
                findings to stakeholders
              </Resume.ListItem>
            </Resume.UnorderedList>
          </Resume.Item>

          <Resume.Item
            title="Optimum Data"
            subtitle="Full Stack Developer"
            from="2012-11"
            to="2015-02"
          >
            <Resume.UnorderedList>
              <Resume.ListItem>
                Designed and developed a modern inventory and order management
                web app that interfaces with Microsoft Dynamics NAV using PHP
                and jQuery
              </Resume.ListItem>
              <Resume.ListItem>
                Improved company workflows through automation and integrations
                with other software
              </Resume.ListItem>
            </Resume.UnorderedList>
          </Resume.Item>
        </Stack>
      </Resume.Section>

      <Resume.Section title="Education">
        <Resume.Item
          title="Creighton University"
          subtitle="Bachelor of Science in Business Administration"
        >
          <Resume.Paragraph>Business Intelligence & Analytics</Resume.Paragraph>
        </Resume.Item>
      </Resume.Section>

      <Resume.Section title="Skills">
        <Grid>
          <Resume.Item title="Front end development">
            <Resume.UnorderedList>
              <Resume.ListItem>
                Creating components and composing applications from them
              </Resume.ListItem>
              <Resume.ListItem>
                Developing and maintaining libraries with varied use cases
              </Resume.ListItem>
              <Resume.ListItem>
                Building with modern frameworks (React, Vue, etc)
              </Resume.ListItem>
              <Resume.ListItem>
                Configuring and using build tools (Webpack, Babel, etc)
              </Resume.ListItem>
            </Resume.UnorderedList>
          </Resume.Item>

          <Resume.Item title="Leadership">
            <Resume.UnorderedList>
              <Resume.ListItem>Leading agile scrum ceremonies</Resume.ListItem>
              <Resume.ListItem>
                Maintaining repositories and reviewing peer contributions
              </Resume.ListItem>
              <Resume.ListItem>
                Establishing and documenting coding standards and team processes
              </Resume.ListItem>
              <Resume.ListItem>Mentoring junior developers</Resume.ListItem>
            </Resume.UnorderedList>
          </Resume.Item>

          <Resume.Item title="Technologies">
            <Resume.UnorderedList>
              <Resume.ListItem>
                <strong>Languages:</strong> JavaScript, TypeScript, HTML, CSS,
                SVG, C#, PHP, SQL
              </Resume.ListItem>
              <Resume.ListItem>
                <strong>Frameworks:</strong> React, Redux, Vue, Express, MongoDB
              </Resume.ListItem>
              <Resume.ListItem>
                <strong>Tools:</strong> Webpack, Babel, Jest, Prettier, ESLint,
                Stylelint
              </Resume.ListItem>
            </Resume.UnorderedList>
          </Resume.Item>

          <Resume.Item title="Collaboration">
            <Resume.UnorderedList>
              <Resume.ListItem>
                Partnering with UX designers to identify patterns, implement
                user interfaces, and provide technical insight
              </Resume.ListItem>
              <Resume.ListItem>
                Communicating with project managers and product owners to define
                acceptance criteria and timelines
              </Resume.ListItem>
            </Resume.UnorderedList>
          </Resume.Item>
        </Grid>
      </Resume.Section>
    </Wrapper>
  </LayoutBase>
);
