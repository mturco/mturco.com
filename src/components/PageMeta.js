import React from 'react';
import { arrayOf, object, string } from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export const PageMeta = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const pageTitle = title || site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      titleTemplate={title ? `%s | ${site.siteMetadata.title}` : undefined}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'theme-color',
          content: '#0f7cb3',
        },
        {
          property: 'og:title',
          content: pageTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
      ].concat(meta)}
    />
  );
};

PageMeta.propTypes = {
  description: string,
  lang: string,
  meta: arrayOf(object),
  title: string,
};

PageMeta.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
  title: undefined,
};
