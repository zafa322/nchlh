import Layout from '../../components/Layout';
import WeatherStats from '../../components/WeatherStats';

export default function Katowice() {
  return (
    <Layout 
      title="Burza w Katowicach - Aktualna mapa burzowa i ostrzeżenia"
      description="Sprawdź aktualne burze i prognozy pogody dla Katowic. Mapa burzowa, ostrzeżenia meteorologiczne i radar opadów."
    >
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Burza w Katowicach</h1>
          <p className="hero-subtitle">
            Aktualne informacje o burzach, opadach i ostrzeżeniach meteorologicznych dla Katowic
          </p>
        </div>
      </section>

      <WeatherStats />

      <section className="container">
        <div className="weather-map-container">
          <div className="weather-map-header">
            <h2 className="weather-map-title">Mapa burzowa - Katowice</h2>
            <p className="weather-map-description">
              Szczegółowa mapa burzowa dla Katowic i GOP z aktualnymi danymi meteorologicznymi
            </p>
          </div>
          <div className="weather-map">
            <iframe 
              src="https://embed.windy.com/embed2.html?lat=50.270&lon=19.039&detailLat=50.270&detailLon=19.039&width=650&height=450&zoom=9&level=surface&overlay=thunder&menu=&message=true" 
              width="100%" 
              height="500" 
              frameBorder="0"
              title="Mapa burzowa Katowic"
            />
          </div>
        </div>

        <div className="city-info-section" style={{ marginTop: 'var(--space-16)' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Informacje o pogodzie w Katowicach</h3>
              <p className="card-subtitle">Aktualne warunki atmosferyczne</p>
            </div>
            <div className="card-content">
              <p>
                Katowice, centrum Górnośląskiego Okręgu Przemysłowego, charakteryzują się specyficznym mikroklimatem. 
                Burze w tym regionie mogą być intensywne ze względu na ukształtowanie terenu i bliskość Beskidów.
              </p>
              <p style={{ marginTop: 'var(--space-4)' }}>
                Korzystaj z naszej mapy burzowej, aby śledzić aktualne warunki pogodowe 
                w Katowicach i województwie śląskim.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}