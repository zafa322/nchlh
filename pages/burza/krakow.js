import Layout from '../../components/Layout';
import WeatherStats from '../../components/WeatherStats';

export default function Krakow() {
  return (
    <Layout 
      title="Burza w Krakowie - Aktualna mapa burzowa i ostrzeżenia"
      description="Sprawdź aktualne burze i prognozy pogody dla Krakowa. Mapa burzowa, ostrzeżenia meteorologiczne i radar opadów."
    >
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Burza w Krakowie</h1>
          <p className="hero-subtitle">
            Aktualne informacje o burzach, opadach i ostrzeżeniach meteorologicznych dla Krakowa
          </p>
        </div>
      </section>

      <WeatherStats />

      <section className="container">
        <div className="weather-map-container">
          <div className="weather-map-header">
            <h2 className="weather-map-title">Mapa burzowa - Kraków</h2>
            <p className="weather-map-description">
              Szczegółowa mapa burzowa dla Krakowa i okolic z aktualnymi danymi meteorologicznymi
            </p>
          </div>
          <div className="weather-map">
            <iframe 
              src="https://embed.windy.com/embed2.html?lat=50.064&lon=19.945&detailLat=50.064&detailLon=19.945&width=650&height=450&zoom=9&level=surface&overlay=thunder&menu=&message=true" 
              width="100%" 
              height="500" 
              frameBorder="0"
              title="Mapa burzowa Krakowa"
            />
          </div>
        </div>

        <div className="city-info-section" style={{ marginTop: 'var(--space-16)' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Informacje o pogodzie w Krakowie</h3>
              <p className="card-subtitle">Aktualne warunki atmosferyczne</p>
            </div>
            <div className="card-content">
              <p>
                Kraków, położony w kotlinie, charakteryzuje się specyficznym mikroklimatem. 
                Burze w tym regionie mogą być szczególnie intensywne ze względu na ukształtowanie terenu.
              </p>
              <p style={{ marginTop: 'var(--space-4)' }}>
                Śledź naszą mapę burzową, aby otrzymywać aktualne informacje o warunkach pogodowych 
                w Krakowie i województwie małopolskim.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}