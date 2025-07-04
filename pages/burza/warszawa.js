import Layout from '../../components/Layout';
import WeatherStats from '../../components/WeatherStats';

export default function Warszawa() {
  return (
    <Layout 
      title="Burza w Warszawie - Aktualna mapa burzowa i ostrzeżenia"
      description="Sprawdź aktualne burze i prognozy pogody dla Warszawy. Mapa burzowa, ostrzeżenia meteorologiczne i radar opadów."
    >
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Burza w Warszawie</h1>
          <p className="hero-subtitle">
            Aktualne informacje o burzach, opadach i ostrzeżeniach meteorologicznych dla stolicy Polski
          </p>
        </div>
      </section>

      <WeatherStats />

      <section className="container">
        <div className="weather-map-container">
          <div className="weather-map-header">
            <h2 className="weather-map-title">Mapa burzowa - Warszawa</h2>
            <p className="weather-map-description">
              Szczegółowa mapa burzowa dla Warszawy i okolic z aktualnymi danymi meteorologicznymi
            </p>
          </div>
          <div className="weather-map">
            <iframe 
              src="https://embed.windy.com/embed2.html?lat=52.237&lon=21.017&detailLat=52.237&detailLon=21.017&width=650&height=450&zoom=9&level=surface&overlay=thunder&menu=&message=true" 
              width="100%" 
              height="500" 
              frameBorder="0"
              title="Mapa burzowa Warszawy"
            />
          </div>
        </div>

        <div className="city-info-section" style={{ marginTop: 'var(--space-16)' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Informacje o pogodzie w Warszawie</h3>
              <p className="card-subtitle">Aktualne warunki atmosferyczne</p>
            </div>
            <div className="card-content">
              <p>
                Warszawa, jako stolica Polski, jest szczególnie narażona na gwałtowne zmiany pogody. 
                Burze w tym regionie mogą być intensywne, szczególnie w miesiącach letnich.
              </p>
              <p style={{ marginTop: 'var(--space-4)' }}>
                Monitoruj regularnie naszą mapę burzową, aby być na bieżąco z aktualnymi warunkami 
                pogodowymi i ostrzeżeniami meteorologicznymi dla Warszawy i Mazowsza.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}