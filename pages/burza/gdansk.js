import Layout from '../../components/Layout';
import WeatherStats from '../../components/WeatherStats';

export default function Gdansk() {
  return (
    <Layout 
      title="Burza w Gdańsku - Aktualna mapa burzowa i ostrzeżenia"
      description="Sprawdź aktualne burze i prognozy pogody dla Gdańska. Mapa burzowa, ostrzeżenia meteorologiczne i radar opadów."
    >
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Burza w Gdańsku</h1>
          <p className="hero-subtitle">
            Aktualne informacje o burzach, opadach i ostrzeżeniach meteorologicznych dla Gdańska
          </p>
        </div>
      </section>

      <WeatherStats />

      <section className="container">
        <div className="weather-map-container">
          <div className="weather-map-header">
            <h2 className="weather-map-title">Mapa burzowa - Gdańsk</h2>
            <p className="weather-map-description">
              Szczegółowa mapa burzowa dla Gdańska i Trójmiasta z aktualnymi danymi meteorologicznymi
            </p>
          </div>
          <div className="weather-map">
            <iframe 
              src="https://embed.windy.com/embed2.html?lat=54.372&lon=18.638&detailLat=54.372&detailLon=18.638&width=650&height=450&zoom=9&level=surface&overlay=thunder&menu=&message=true" 
              width="100%" 
              height="500" 
              frameBorder="0"
              title="Mapa burzowa Gdańska"
            />
          </div>
        </div>

        <div className="city-info-section" style={{ marginTop: 'var(--space-16)' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Informacje o pogodzie w Gdańsku</h3>
              <p className="card-subtitle">Aktualne warunki atmosferyczne</p>
            </div>
            <div className="card-content">
              <p>
                Gdańsk, położony nad Morzem Bałtyckim, charakteryzuje się klimatem morskim. 
                Burze w tym regionie często nadciągają od strony morza i mogą być bardzo intensywne.
              </p>
              <p style={{ marginTop: 'var(--space-4)' }}>
                Monitoruj naszą mapę burzową, aby być przygotowanym na zmiany pogody 
                w Gdańsku i całym Trójmieście.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}