import React from 'react';
import styled from 'styled-components';

import { LayoutBase, PageMeta, ProfileLink, ThemeSwitcher } from '@components';

import Bitbucket from '@images/bitbucket.svg';
import Email from '@images/email.svg';
import Github from '@images/github.svg';
import Linkedin from '@images/linkedin.svg';
import Photography from '@images/photography.svg';
import Resume from '@images/resume.svg';

const Container = styled.div`
  min-height: 100vh;
  padding: 15vh 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
`;

const Heading = styled.h1`
  color: var(--color-primary);
  font: 700 3em Montserrat, var(--font-base);
  letter-spacing: 0.03em;
  margin: 0 0 0.5rem;
  text-align: center;
`;

const Tagline = styled.p`
  font-size: 1.5em;
  font-weight: 300;
  text-align: center;
  text-transform: lowercase;
  white-space: nowrap;
  line-height: 1.5;
`;

const ProfileLinkGrid = styled.ul`
  list-style: none;
  margin: 3rem 0 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ProfileLinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const ProfileLinkSectionTitle = styled.span`
  position: relative;
  padding: 0 10px;

  :before,
  :after {
    position: absolute;
    top: 50%;
    width: 100vw;
    content: '';
    border-top: 1px solid var(--color-divider);
  }

  :before {
    right: 100%;
  }

  :after {
    left: 100%;
  }
`;

const ProfileLinkSectionHeading = styled(({ children, className }) => (
  <h1 className={className}>
    <ProfileLinkSectionTitle>{children}</ProfileLinkSectionTitle>
  </h1>
))`
  margin-bottom: 1rem;
  overflow: hidden;
  font-size: 0.8125em;
  font-weight: 700;
  color: var(--color-primary);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.15em;
`;

const ProfileLinkSection = styled(({ children, className, title }) => (
  <li className={className}>
    <section>
      <ProfileLinkSectionHeading>{title}</ProfileLinkSectionHeading>
      <ProfileLinkList>{children}</ProfileLinkList>
    </section>
  </li>
))`
  margin: 1.5rem;
`;

const ProfileLinkItem = ({ className, ...props }) => (
  <li className={className}>
    <ProfileLink {...props} />
  </li>
);

export default () => (
  <LayoutBase>
    <Container>
      <PageMeta />
      <ThemeSwitcher />
      <Heading>Matt Turco</Heading>
      <Tagline>
        Front end engineer <wbr />
        &amp; design enthusiast
      </Tagline>

      <ProfileLinkGrid>
        <ProfileLinkSection title="Code">
          <ProfileLinkItem
            to="https://github.com/mturco"
            external
            icon={Github}
          >
            GitHub
          </ProfileLinkItem>
          <ProfileLinkItem
            to="https://bitbucket.org/mturco"
            external
            icon={Bitbucket}
          >
            BitBucket
          </ProfileLinkItem>
        </ProfileLinkSection>

        <ProfileLinkSection title="Contact">
          <ProfileLinkItem
            to="https://linkedin.com/in/mattturco"
            external
            icon={Linkedin}
          >
            LinkedIn
          </ProfileLinkItem>
          <ProfileLinkItem
            to="mailto:matt.turco@gmail.com"
            external
            icon={Email}
          >
            Email
          </ProfileLinkItem>
        </ProfileLinkSection>

        <ProfileLinkSection title="Other">
          <ProfileLinkItem to="/resume" icon={Resume}>
            Resume
          </ProfileLinkItem>
          <ProfileLinkItem to="/photography" icon={Photography}>
            Photography
          </ProfileLinkItem>
        </ProfileLinkSection>
      </ProfileLinkGrid>
    </Container>
  </LayoutBase>
);
