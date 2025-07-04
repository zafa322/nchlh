import Head from 'next/head'

export default function CzyBurzaMozeUderzycDwaRazy() {
  return (
    <>
      <Head>
        <title>Czy burza może uderzyć dwa razy w to samo miejsce?</title>
        <meta name="description" content="Czy burza może uderzyć dwa razy w to samo miejsce?" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Czy burza może uderzyć dwa razy w to samo miejsce?",
              "inLanguage": "pl",
              "author": {
                "@type": "Organization",
                "name": "Radar Burzowy"
              },
              "datePublished": "2025-07-04"
            })
          }}
        />
      </Head>
      <main>
        <h1>Czy burza może uderzyć dwa razy?</h1>
        <p>Odpowiedź na często zadawane pytanie o burze.</p>
      </main>
    </>
  )
}
