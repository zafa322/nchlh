import Layout from '../../components/Layout';
import WeatherStats from '../../components/WeatherStats';

export default function Szczecin() {
  return (
    <Layout 
      title="Burza w Szczecinie - Aktualna mapa burzowa i ostrzeżenia"
      description="Sprawdź aktualne burze i prognozy pogody dla Szczecina. Mapa burzowa, ostrzeżenia meteorologiczne i radar opadów."
    >
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Burza w Szczecinie</h1>
          <p className="hero-subtitle">
            Aktualne informacje o burzach, opadach i ostrzeżeniach meteorologicznych dla Szczecina
          </p>
        </div>
      </section>

      <WeatherStats />

      <section className="container">
        <div className="weather-map-container">
          <div className="weather-map-header">
            <h2 className="weather-map-title">Mapa burzowa - Szczecin</h2>
            <p className="weather-map-description">
              Szczegółowa mapa burzowa dla Szczecina i okolic z aktualnymi danymi meteorologicznymi
            </p>
          </div>
          <div className="weather-map">
            <iframe 
              src="https://embed.windy.com/embed2.html?lat=53.428&lon=14.553&detailLat=53.428&detailLon=14.553&width=650&height=450&zoom=9&level=surface&overlay=thunder&menu=&message=true" 
              width="100%" 
              height="500" 
              frameBorder="0"
              title="Mapa burzowa Szczecina"
            />
          </div>
        </div>

        <div className="city-info-section" style={{ marginTop: 'var(--space-16)' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Informacje o pogodzie w Szczecinie</h3>
              <p className="card-subtitle">Aktualne warunki atmosferyczne</p>
            </div>
            <div className="card-content">
              <p>
                Szczecin, położony nad Odrą blisko wybrzeża Bałtyku, charakteryzuje się klimatem morskim. 
                Burze w tym regionie często nadciągają od strony morza i mogą być bardzo gwałtowne.
              </p>
              <p style={{ marginTop: 'var(--space-4)' }}>
                Śledź naszą mapę burzową, aby otrzymywać aktualne informacje o warunkach pogodowych 
                w Szczecinie i województwie zachodniopomorskim.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}