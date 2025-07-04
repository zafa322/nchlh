import Head from 'next/head'

export default function CzyBurzaJestNiebezpieczna() {
  return (
    <>
      <Head>
        <title>Czy burza jest niebezpieczna? Dowiedz się, jak się chronić.</title>
        <meta name="description" content="Czy burza jest niebezpieczna? Dowiedz się, jak się chronić." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Czy burza jest niebezpieczna? Dowiedz się, jak się chronić.",
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
        <h1>Czy burza jest niebezpieczna?</h1>
        <p>Dowiedz się, jak się chronić podczas burzy.</p>
      </main>
    </>
  )
}
