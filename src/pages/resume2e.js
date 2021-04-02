import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { format, parseISO } from 'date-fns';

import { LayoutBase, PageMeta } from '@components';
import { resume } from '@content/resume';

const GlobalStyle = createGlobalStyle`
  body {
    color: var(--color-text-hc);
  }

  @media print {
    :root {
      height: 0;
      margin: 0.75cm 1cm;
      padding: 0;
      font-size: 10pt;
    }

    @page {
      margin: 0;
    }
  }
`;

const Container = styled.main`
  --grid-line-color: hsl(214, 4%, 39%);
  --section-item-gap: 1.25rem;

  display: grid;
  grid-template:
    'header header header' max-content
    'experience divider education' max-content
    'experience divider tools' max-content
    'experience divider about' max-content
    'experience divider .' max-content
    / 1fr min-content 25ch;
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

const Divider = styled('div').attrs({
  'aria-hidden': 'true',
})`
  grid-area: divider;
  border-left: 2px solid hsl(197, 14%, 94%);
`;

const Experience = styled.section`
  grid-area: experience;

  --grid-line-color: var(--color-primary);
`;

const Link = styled.a`
  color: var(--color-primary);
  text-decoration-color: transparent;
  text-decoration-thickness: 2px;
  text-underline-offset: 0.15em;
  transition: all 0.2s ease-out;

  :hover {
    text-decoration-color: currentColor;
  }
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
  border-top: 0;
`;

const SectionHeadingH1 = styled.h1`
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin: 0 0 0.75rem 0;
  line-height: 1;
  border-top: 2px solid var(--grid-line-color);
  color: var(--grid-line-color);
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
  margin: 0 0 0.125rem;
  font-size: 1.25rem;
  font-weight: 700;
`;

const SectionItemSubheading = styled.h2`
  margin: 0 0 0.125rem;
  font-size: 1.125rem;
  font-weight: 400;
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

const Paragraph = styled.p`
  margin: 0;

  &:not(:last-child) {
    margin-bottom: 0.375em;
  }
`;

const UnorderedList = styled.ul`
  padding-left: 1.5rem;
  margin: 0.25rem 0 0;
  list-style-type: circle;
`;

const ListItem = styled.li`
  margin-bottom: 0.5em;

  :last-child {
    margin-bottom: 0;
  }
`;

const SidebarSubheading = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0 0 0.125em 0;
`;

const TimeSpanWrapper = styled.span`
  font-size: 1.125rem;
  color: var(--color-text-lc);
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

const Columns = styled.div`
  display: grid;
  /* columns: 40ch auto; */
  gap: var(--section-item-gap) 2.5rem;
  grid-template-columns: 1fr;

  @media print, (min-width: 64rem) {
    grid-template-columns: repeat(3, 1fr);
  }

  ${SectionItem} {
    margin-bottom: 0;
    /* break-inside: avoid; */
  }
`;

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

  ${Link} {
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
          <Link href="/">{resume.name}</Link>
        </Name>
        <ContactInfo>
          <ContactInfoItem>{resume.location}</ContactInfoItem>
          <Slash />
          <ContactInfoItem>
            <Link href={`mailto:${resume.email}`}>{resume.email}</Link>
          </ContactInfoItem>
          <Slash />
          <ContactInfoItem>
            <Link href={`tel:${resume.phone.replace(/[^\d]/g, '')}`}>
              {resume.phone}
            </Link>
          </ContactInfoItem>
          <Slash />
          <ContactInfoItem>
            <Link href={resume.website.url}>{resume.website.name}</Link>
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

            <UnorderedList>
              {exp.notes.map((note, noteIdx) => (
                <ListItem key={noteIdx}>{note}</ListItem>
              ))}
            </UnorderedList>
          </SectionItem>
        ))}
      </Experience>

      <Divider />

      <Education>
        <SectionHeading>Education</SectionHeading>
        {resume.education.map((education, educationIdx) => (
          <SectionItem key={educationIdx}>
            <SidebarSubheading>{education.name}</SidebarSubheading>
            <Paragraph>{education.degree}</Paragraph>
            <Paragraph>{education.major}</Paragraph>
          </SectionItem>
        ))}
      </Education>

      <Tools>
        <SectionHeading>Tools</SectionHeading>

        {resume.tools.map((tool, toolIdx) => (
          <SectionItem key={toolIdx}>
            <SidebarSubheading>{tool.category}</SidebarSubheading>
            <Paragraph>{tool.items.join(', ')}</Paragraph>
          </SectionItem>
        ))}
      </Tools>

      <About>
        <SectionHeading>About</SectionHeading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </Paragraph>
      </About>
    </Container>
  </LayoutBase>
);

export default ResumePage;
