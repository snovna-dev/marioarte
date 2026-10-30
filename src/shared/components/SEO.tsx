import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "profile";
}

function setMeta(selector: string, attribute: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    const [attributeName, attributeValue] = selector.includes("[")
      ? selector.match(/\[([^=]+)=(["']?)([^"']+)\2\]/)?.slice(1) ?? []
      : [];
    if (attributeName && attributeValue) element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, content);
}

export default function SEO({ title, description, path, type = "website" }: SEOProps) {
  useEffect(() => {
    const origin = window.location.origin;
    const canonicalUrl = `${origin}${path}`;
    document.documentElement.lang = "es";
    document.title = title;

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="robots"]', "content", "index, follow, max-image-preview:large");
    setMeta('meta[name="googlebot"]', "content", "index, follow, max-image-preview:large");
    setMeta('meta[name="author"]', "content", "Mario Suarez");
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", type);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:site_name"]', "content", "Mario Suarez Art Studio");
    setMeta('meta[property="og:locale"]', "content", "es_CO");
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let structuredData = document.head.querySelector<HTMLScriptElement>('script[data-seo="page"]');
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.type = "application/ld+json";
      structuredData.dataset.seo = "page";
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url: canonicalUrl,
      inLanguage: "es-CO",
      isPartOf: {
        "@type": "WebSite",
        name: "Mario Suarez Art Studio",
        url: origin,
      },
      about: {
        "@type": "Person",
        name: "Mario Suarez",
        jobTitle: "Artista plástico",
      },
    });
  }, [description, path, title, type]);

  return null;
}
