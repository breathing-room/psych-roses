import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, image: metaImage, title, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : null
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null

  return (
    <>
      <html lang={lang} />
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={site.siteMetadata.keywords.join(",")} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {metaImage ? (
        <>
          <meta property="og:image" content={image} />
          <meta property="og:image:width" content={metaImage.width} />
          <meta property="og:image:height" content={metaImage.height} />
          <meta name="twitter:card" content="summary_large_image" />
        </>
      ) : (
        <meta name="twitter:card" content="summary" />
      )}
    </>
  )
}

SEO.defaultProps = {
  lang: `en`,
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
}

export default SEO
