import Layout from '../../components/Layout';
import WeatherStats from '../../components/WeatherStats';

export default function Poznan() {
  return (
    <Layout 
      title="Burza w Poznaniu - Aktualna mapa burzowa i ostrzeżenia"
      description="Sprawdź aktualne burze i prognozy pogody dla Poznania. Mapa burzowa, ostrzeżenia meteorologiczne i radar opadów."
    >
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Burza w Poznaniu</h1>
          <p className="hero-subtitle">
            Aktualne informacje o burzach, opadach i ostrzeżeniach meteorologicznych dla Poznania
          </p>
        </div>
      </section>

      <WeatherStats />

      <section className="container">
        <div className="weather-map-container">
          <div className="weather-map-header">
            <h2 className="weather-map-title">Mapa burzowa - Poznań</h2>
            <p className="weather-map-description">
              Szczegółowa mapa burzowa dla Poznania i okolic z aktualnymi danymi meteorologicznymi
            </p>
          </div>
          <div className="weather-map">
            <iframe 
              src="https://embed.windy.com/embed2.html?lat=52.406&lon=16.925&detailLat=52.406&detailLon=16.925&width=650&height=450&zoom=9&level=surface&overlay=thunder&menu=&message=true" 
              width="100%" 
              height="500" 
              frameBorder="0"
              title="Mapa burzowa Poznania"
            />
          </div>
        </div>

        <div className="city-info-section" style={{ marginTop: 'var(--space-16)' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Informacje o pogodzie w Poznaniu</h3>
              <p className="card-subtitle">Aktualne warunki atmosferyczne</p>
            </div>
            <div className="card-content">
              <p>
                Poznań, centrum Wielkopolski, charakteryzuje się klimatem przejściowym. 
                Burze w tym regionie mogą być intensywne i często przychodzą z zachodu.
              </p>
              <p style={{ marginTop: 'var(--space-4)' }}>
                Śledź naszą mapę burzową, aby otrzymywać najświeższe informacje o pogodzie 
                w Poznaniu i województwie wielkopolskim.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}