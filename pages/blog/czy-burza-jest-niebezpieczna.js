import Head from 'next/head';

export default function Article() {
  return (
    <div>
      <Head>
        <title>Czy burza jest niebezpieczna? Dowiedz się, jak się chronić.</title>
        <meta name="description" content="Czy burza jest niebezpieczna? Dowiedz się, jak się chronić." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Czy burza jest niebezpieczna? Dowiedz się, jak się chronić.",
              "inLanguage": "pl",
              "author": { "@type": "Person", "name": "Redakcja Burza" },
              "publisher": { "@type": "Organization", "name": "Burza Info" },
              "datePublished": "2025-07-04"
            })
          }
        />
      </Head>
      <main>
        <h1>Czy burza jest niebezpieczna? Dowiedz się, jak się chronić.</h1>
        <p>To jest przykładowy artykuł zoptymalizowany pod kątem SEO.</p>
      </main>
    </div>
  );
}