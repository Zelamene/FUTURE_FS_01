import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, ogTitle, ogDescription, canonicalURL }) => {
    const siteTitle = title || 'Zelamene Shazi';
    const siteDescription = description || 'Portfolio of Zelamene Shazi, final-year Computer Science student at the University of Pretoria.';

    return (
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <meta property="og:title" content={ogTitle || siteTitle} />
            <meta property="og:description" content={ogDescription || siteDescription} />
            {canonicalURL && <link rel="canonical" href={canonicalURL} />}
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary" />
        </Helmet>
    );
};

export default SEO;