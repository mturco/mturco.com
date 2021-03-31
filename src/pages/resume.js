import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import { Heading, LayoutBase, PageMeta, Resume } from '@components';

import { resume } from '@content/resume';

console.log(resume);

const GlobalStyle = createGlobalStyle`
  @media print {
    :root {
      height: 0;
      margin: 0.75cm 1cm;
      font-size: 10pt;
    }

    .preview {
      height: 11in;
      width: 8.5in;
      margin: 1cm;
      padding: 0.75cm 1cm;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
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

const FlexRow = styled.div`
  @media (min-width: 30rem) {
    display: flex;
    align-items: baseline;
  }

  @media (max-width: 479px) {
    ${Resume.Slash} {
      display: none;
    }
  }
`;

export default function ResumePage() {
  return (
    <LayoutBase>
      <PageMeta title="Resume" />
      <GlobalStyle />

      <Wrapper>
        <Header>
          <StyledHeading>{resume.name}</StyledHeading>
          <Resume.ContactInfoList>
            <Resume.ContactInfoItem>{resume.location}</Resume.ContactInfoItem>
            <Resume.ContactInfoItem href={`mailto:${resume.email}`}>
              {resume.email}
            </Resume.ContactInfoItem>
            <Resume.ContactInfoItem href={resume.website.url}>
              {resume.website.name}
            </Resume.ContactInfoItem>
          </Resume.ContactInfoList>
        </Header>

        <Resume.Section title="Experience">
          <Stack>
            {resume.experience.map((exp, expIdx) => (
              <Resume.Item key={expIdx}>
                <Resume.Heading>{exp.company}</Resume.Heading>
                {exp.roles.map((role, roleIdx) => (
                  <FlexRow key={roleIdx}>
                    <Resume.Subheading>{role.title}</Resume.Subheading>
                    <Resume.Slash />
                    <Resume.Timeline from={role.from} to={role.to} />
                  </FlexRow>
                ))}

                <Resume.UnorderedList>
                  {exp.notes.map((note, noteIdx) => (
                    <Resume.ListItem key={noteIdx}>{note}</Resume.ListItem>
                  ))}
                </Resume.UnorderedList>
              </Resume.Item>
            ))}
          </Stack>
        </Resume.Section>

        <Resume.Section title="Skills">
          <Grid>
            {resume.skills.map((skill, skillIdx) => (
              <Resume.Item key={skillIdx}>
                <Resume.Heading>{skill.title}</Resume.Heading>
                <Resume.UnorderedList>
                  {skill.notes.map((note, noteIdx) => (
                    <Resume.ListItem key={noteIdx}>{note}</Resume.ListItem>
                  ))}
                </Resume.UnorderedList>
              </Resume.Item>
            ))}
          </Grid>
        </Resume.Section>

        <Resume.Section title="Education">
          <Stack>
            {resume.education.map((education, educationIdx) => (
              <Resume.Item>
                <Resume.Heading>{education.name}</Resume.Heading>

                <FlexRow>
                  <Resume.Subheading>{education.degree}</Resume.Subheading>
                  <Resume.Slash />
                  <Resume.Paragraph>{education.major}</Resume.Paragraph>
                </FlexRow>
              </Resume.Item>
            ))}
          </Stack>
        </Resume.Section>
      </Wrapper>
    </LayoutBase>
  );
}
