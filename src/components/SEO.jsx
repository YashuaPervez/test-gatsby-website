import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  title,
  name,
  description,
  websiteURL,
  favIcon,
  lang,
  twitterHandle,
}) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
    >
      <title>{title}</title>
      {description && <meta name="Description" content={description} />}
      {websiteURL && <link rel="canonical" href={websiteURL}></link>}
      {websiteURL && lang && (
        <link rel="alternate" href={websiteURL} hreflang={lang}></link>
      )}
      {lang && <meta http-equiv="content-language" content={lang} />}
      {favIcon && <meta property="og:image" content={favIcon} />}
      {name && <meta property="og:title" content={name} />}
      {description && <meta property="og:description" content={description} />}
      {websiteURL && <meta property="og:url" content={websiteURL} />}
      {lang && <meta property="og:locale" content={lang} />}
      {name && <meta property="og:site_name" content={name} />}
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      {twitterHandle && (
        <meta name="twitter:site" content={`@${twitterHandle}`} />
      )}
      {twitterHandle && (
        <meta name="twitter:creator" content={`@${twitterHandle}`} />
      )}

      {name && <meta name="twitter:title" content={name} />}
      {description && <meta name="twitter:description" content={description} />}
      {favIcon && <meta name="twitter:image" content={favIcon} />}

      {favIcon && <link rel="icon" href={favIcon} />}
      {favIcon && <link rel="apple-touch-icon" href={favIcon} />}
    </Helmet>
  );
};

export default SEO;
