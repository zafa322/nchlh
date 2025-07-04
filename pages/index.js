import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gdzie jest burza?</title>
        <meta name="description" content="Sprawdź gdzie jest burza w Polsce - aktualna mapa burzowa." />
      </Head>
      <main>
        <h1>Gdzie jest burza?</h1>
        <p>Witamy na stronie pokazującej aktualne burze w Polsce.</p>
        <iframe src="https://embed.windy.com/embed2.html?lat=52.0&lon=19.0&detailLat=52.0&detailLon=19.0&width=650&height=450&zoom=6&level=surface&overlay=thunder&menu=&message=true" width="100%" height="500" frameBorder="0"></iframe>
      </main>
    </div>
  );
}