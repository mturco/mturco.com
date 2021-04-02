import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Link } from 'gatsby';
import { format, parseISO } from 'date-fns';

import { LayoutBase, PageMeta } from '@components';
import { resume } from '@content/resume';

const GlobalStyle = createGlobalStyle`
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
    'header divider main' max-content
    'about divider main' max-content
    'contact divider main' max-content
    'education divider main' max-content
    'tools divider main' max-content
    '. divider main' auto
    / 24ch min-content 1fr;
  gap: 2rem 1.5rem;
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
    line-height: 1.4;
  }
`;

const Header = styled.header`
  grid-area: header;
`;

const About = styled.section`
  grid-area: about;
`;

const Contact = styled.section`
  grid-area: contact;
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

const Main = styled.section`
  grid-area: main;

  --grid-line-color: var(--color-primary);
`;

const Name = styled.h1`
  font: 700 2.5rem var(--font-heading);
  letter-spacing: 0.03em;
  margin: 0;
  line-height: 1;
  white-space: nowrap;
`;

const NameLink = styled(Link)`
  color: var(--color-primary);
  text-decoration-color: transparent;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  transition: all 0.2s ease-out;

  :hover {
    text-decoration-color: currentColor;
  }
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
    height: 1.25rem;
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

const Timeline = ({ from, to }) => (
  <span>
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
  </span>
);

const Columns = styled.div`
  display: grid;
  gap: var(--section-item-gap) 2.5rem;
  grid-template-columns: 1fr;

  @media print, (min-width: 64rem) {
    grid-template-columns: 1fr 1fr;
  }

  ${SectionItem} {
    margin-bottom: 0;
  }
`;

const ResumePage = () => (
  <LayoutBase>
    <PageMeta title="Resume" />
    <GlobalStyle />

    <Container>
      <Header>
        <Name>
          <NameLink to="/">{resume.name}</NameLink>
        </Name>
      </Header>

      <About>
        <SectionHeading>About</SectionHeading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </Paragraph>
      </About>

      <Contact>
        <SectionHeading>Contact</SectionHeading>
        <Paragraph>{resume.email}</Paragraph>
        <Paragraph>{resume.website.name}</Paragraph>
        <Paragraph>{resume.location}</Paragraph>
      </Contact>

      <Tools>
        <SectionHeading>Tools</SectionHeading>

        {resume.tools.map((tool, toolIdx) => (
          <SectionItem key={toolIdx}>
            <SidebarSubheading>{tool.category}</SidebarSubheading>
            <Paragraph>{tool.items.join(', ')}</Paragraph>
          </SectionItem>
        ))}
      </Tools>

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

      <Divider />

      <Main>
        <SectionHeading>Experience</SectionHeading>
        {resume.experience.map((exp, expIdx) => (
          <SectionItem key={expIdx}>
            <SectionItemHeading>{exp.company}</SectionItemHeading>
            {exp.roles.map((role, roleIdx) => (
              <FlexRow key={roleIdx}>
                <SectionItemSubheading>{role.title}</SectionItemSubheading>
                <Slash />
                <Timeline from={role.from} to={role.to} />
              </FlexRow>
            ))}

            <UnorderedList>
              {exp.notes.map((note, noteIdx) => (
                <ListItem key={noteIdx}>{note}</ListItem>
              ))}
            </UnorderedList>
          </SectionItem>
        ))}

        <SectionHeading>Skills</SectionHeading>
        <Columns>
          {resume.skills.map((skill, skillIdx) => (
            <SectionItem key={skillIdx}>
              <SectionItemHeading>{skill.title}</SectionItemHeading>
              <UnorderedList>
                {skill.notes.map((note, noteIdx) => (
                  <ListItem key={noteIdx}>{note}</ListItem>
                ))}
              </UnorderedList>
            </SectionItem>
          ))}
        </Columns>
      </Main>
    </Container>
  </LayoutBase>
);

export default ResumePage;
