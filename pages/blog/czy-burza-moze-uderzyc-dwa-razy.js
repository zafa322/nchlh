import Head from 'next/head';

export default function Article() {
  return (
    <div>
      <Head>
        <title>Czy burza może uderzyć dwa razy w to samo miejsce?</title>
        <meta name="description" content="Czy burza może uderzyć dwa razy w to samo miejsce?" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Czy burza może uderzyć dwa razy w to samo miejsce?",
              "inLanguage": "pl",
              "author": { "@type": "Person", "name": "Redakcja Burza" },
              "publisher": { "@type": "Organization", "name": "Burza Info" },
              "datePublished": "2025-07-04"
            })
          }
        />
      </Head>
      <main>
        <h1>Czy burza może uderzyć dwa razy w to samo miejsce?</h1>
        <p>To jest przykładowy artykuł zoptymalizowany pod kątem SEO.</p>
      </main>
    </div>
  );
}