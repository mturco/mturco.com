import React from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import { format, parseISO } from 'date-fns';
import { Link as GatsbyLink } from 'gatsby';

import { LayoutBase, PageMeta } from '@components';
import { resume } from '@content/resume';

const GlobalStyle = createGlobalStyle`
  @media print {
    :root {
      height: 0;
      margin: 0.75cm 1cm;
      padding: 0;
      font-size: 9.5pt;
    }

    @page {
      margin: 0;
    }
  }
`;

const Container = styled.main`
  --grid-line-color: var(--color-divider-hc);
  --section-item-gap: 1.5rem;

  display: grid;
  grid-template:
    'header header header' max-content
    'experience divider education' max-content
    'experience divider tools' max-content
    'experience divider talks' max-content
    'experience divider about' max-content
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
`;

const Header = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const About = styled.section`
  grid-area: about;
`;

const Tools = styled.section`
  grid-area: tools;
`;

const Education = styled.section`
  grid-area: education;
`;

const Talks = styled.section`
  grid-area: talks;
`;

const Divider = styled('div').attrs({
  'aria-hidden': 'true',
})`
  grid-area: divider;
  border-left: 2px solid var(--color-divider-lc);
`;

const Experience = styled.section`
  grid-area: experience;

  --grid-line-color: var(--color-primary);
`;

const linkStyling = css`
  color: var(--color-primary);
  text-decoration-color: transparent;
  text-decoration-thickness: 2px;
  text-underline-offset: 0.2em;
  transition: all 0.2s ease-out;

  :hover {
    text-decoration-color: currentColor;
  }
`;

const Link = styled(GatsbyLink)`
  ${linkStyling}
`;

const LinkExternal = styled.a`
  ${linkStyling}
`;

const Name = styled.h1`
  font: 700 2.5rem var(--font-heading);
  letter-spacing: 0.03em;
  margin: 0;
  line-height: 1;
  white-space: nowrap;
`;

const SectionHeadingSpan = styled.span`
  display: inline-flex;
  padding: 0.25rem 0.375rem;
  border: 2px solid var(--grid-line-color);
  border-radius: 2px 0 2px 2px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0.5rem;
    right: 0;
    border-top: 2px solid var(--grid-line-color);
  }
`;

const SectionHeadingH1 = styled.h1`
  position: relative;
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin: 0 0 1rem 0;
  line-height: 1;
  color: var(--grid-line-color);

  @media print {
    margin-bottom: 0.75rem;
  }
`;

const SectionHeading = ({ children }) => (
  <SectionHeadingH1>
    <SectionHeadingSpan>{children}</SectionHeadingSpan>
  </SectionHeadingH1>
);

const SectionItem = styled.section`
  &:not(:last-child) {
    margin-bottom: var(--section-item-gap);
  }
`;

const SectionItemHeading = styled.h1`
  margin: 0 0 0.25rem;
  font-size: 1.375rem;
  font-weight: 700;

  @media print {
    margin-bottom: 0.125rem;
  }
`;

const SectionItemSubheading = styled.h2`
  margin: 0 0 0.25rem;
  font-size: 1.125rem;
  font-weight: 500;

  @media print {
    margin-bottom: 0.125rem;
  }
`;

const Slash = styled('span').attrs({
  'aria-hidden': 'true',
})`
  margin: 0 1rem;
  display: inline-flex;
  align-self: center;

  &::before {
    content: '';
    display: inline-flex;
    transform: rotateZ(30deg);
    height: 1.375rem;
    border-left: 2px solid var(--color-primary);
  }
`;

const FlexRow = styled.div`
  @media (min-width: 30rem) {
    display: flex;
    align-items: baseline;
  }

  @media (max-width: 479px) {
    ${Slash} {
      display: none;
    }
  }
`;

const paragraphStyles = css`
  margin: 0;

  &:not(:last-child) {
    margin-bottom: 0.375em;
  }
`;

const Paragraph = styled.p`
  ${paragraphStyles}
`;

const Content = styled.div`
  a {
    ${linkStyling}
  }

  p {
    ${paragraphStyles}
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
`;

const SidebarHeading = styled.h1`
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0 0 0.125em 0;
`;

const TimeSpanWrapper = styled.span`
  color: var(--color-text-lc);

  @media print {
    color: var(--gray-600);
  }
`;

const TimeSpan = ({ from, to }) => (
  <TimeSpanWrapper>
    <time dateTime={format(parseISO(from), 'yyyy-MM')}>
      {format(parseISO(from), 'MMM yyyy')}
    </time>
    &thinsp;&ndash;&thinsp;
    {to ? (
      <time dateTime={format(parseISO(to), 'yyyy-MM')}>
        {format(parseISO(to), 'MMM yyyy')}
      </time>
    ) : (
      'Present'
    )}
  </TimeSpanWrapper>
);

const ContactInfo = styled.ul`
  display: inline-flex;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: baseline;
  flex-wrap: wrap;
`;

const ContactInfoItem = styled.li`
  display: inline-flex;
  margin: 0;
  padding: 0;

  ${Link},
  ${LinkExternal} {
    color: inherit;
  }
`;

const ResumePage = () => (
  <LayoutBase>
    <PageMeta title="Resume" />
    <GlobalStyle />

    <Container>
      <Header>
        <Name>
          <Link to="/">{resume.name}</Link>
        </Name>
        <ContactInfo>
          <ContactInfoItem>{resume.location}</ContactInfoItem>
          <Slash />
          <ContactInfoItem>
            <LinkExternal href={`mailto:${resume.email}`}>
              {resume.email}
            </LinkExternal>
          </ContactInfoItem>
          <Slash />
          <ContactInfoItem>
            <LinkExternal href={`tel:${resume.phone.replace(/[^\d]/g, '')}`}>
              {resume.phone}
            </LinkExternal>
          </ContactInfoItem>
          <Slash />
          <ContactInfoItem>
            <Link to={resume.website.url}>{resume.website.name}</Link>
          </ContactInfoItem>
        </ContactInfo>
      </Header>

      <Experience>
        <SectionHeading>Experience</SectionHeading>
        {resume.experience.map((exp, expIdx) => (
          <SectionItem key={expIdx}>
            <SectionItemHeading>{exp.company}</SectionItemHeading>
            {exp.roles.map((role, roleIdx) => (
              <FlexRow key={roleIdx}>
                <SectionItemSubheading>{role.title}</SectionItemSubheading>
                <Slash />
                <TimeSpan from={role.from} to={role.to} />
              </FlexRow>
            ))}

            <Content>{exp.notes}</Content>
          </SectionItem>
        ))}
      </Experience>

      <Divider />

      <Education>
        <SectionHeading>Education</SectionHeading>
        {resume.education.map((education, educationIdx) => (
          <SectionItem key={educationIdx}>
            <SidebarHeading>{education.name}</SidebarHeading>
            <Paragraph>
              {education.degree}
              <br />
              {education.major}
            </Paragraph>
          </SectionItem>
        ))}
      </Education>

      <Tools>
        <SectionHeading>Technologies</SectionHeading>

        {resume.tools.map((tool, toolIdx) => (
          <SectionItem key={toolIdx}>
            <SidebarHeading>{tool.category}</SidebarHeading>
            <Paragraph>{tool.items.join(', ')}</Paragraph>
          </SectionItem>
        ))}
      </Tools>

      <Talks>
        <SectionHeading>Talks</SectionHeading>
        {resume.talks.map((talk) => (
          <div key={talk.title}>
            <Paragraph>
              <LinkExternal href={talk.url}>{talk.title}</LinkExternal>
              <br />
              {talk.year} &middot; {talk.event}
            </Paragraph>
          </div>
        ))}
      </Talks>

      <About>
        <SectionHeading>Interests</SectionHeading>
        <Content>{resume.about}</Content>
      </About>
    </Container>
  </LayoutBase>
);

export default ResumePage;
