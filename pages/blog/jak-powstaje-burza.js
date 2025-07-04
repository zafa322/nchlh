import Head from 'next/head';

export default function Article() {
  return (
    <div>
      <Head>
        <title>Jak powstaje burza? Poznaj etapy tworzenia burz i ich skutki.</title>
        <meta name="description" content="Jak powstaje burza? Poznaj etapy tworzenia burz i ich skutki." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Jak powstaje burza? Poznaj etapy tworzenia burz i ich skutki.",
              "inLanguage": "pl",
              "author": { "@type": "Person", "name": "Redakcja Burza" },
              "publisher": { "@type": "Organization", "name": "Burza Info" },
              "datePublished": "2025-07-04"
            })
          }
        />
      </Head>
      <main>
        <h1>Jak powstaje burza? Poznaj etapy tworzenia burz i ich skutki.</h1>
        <p>To jest przykładowy artykuł zoptymalizowany pod kątem SEO.</p>
      </main>
    </div>
  );
}