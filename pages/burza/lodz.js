import Layout from '../../components/Layout';
import WeatherStats from '../../components/WeatherStats';

export default function Lodz() {
  return (
    <Layout 
      title="Burza w Łodzi - Aktualna mapa burzowa i ostrzeżenia"
      description="Sprawdź aktualne burze i prognozy pogody dla Łodzi. Mapa burzowa, ostrzeżenia meteorologiczne i radar opadów."
    >
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Burza w Łodzi</h1>
          <p className="hero-subtitle">
            Aktualne informacje o burzach, opadach i ostrzeżeniach meteorologicznych dla Łodzi
          </p>
        </div>
      </section>

      <WeatherStats />

      <section className="container">
        <div className="weather-map-container">
          <div className="weather-map-header">
            <h2 className="weather-map-title">Mapa burzowa - Łódź</h2>
            <p className="weather-map-description">
              Szczegółowa mapa burzowa dla Łodzi i okolic z aktualnymi danymi meteorologicznymi
            </p>
          </div>
          <div className="weather-map">
            <iframe 
              src="https://embed.windy.com/embed2.html?lat=51.759&lon=19.456&detailLat=51.759&detailLon=19.456&width=650&height=450&zoom=9&level=surface&overlay=thunder&menu=&message=true" 
              width="100%" 
              height="500" 
              frameBorder="0"
              title="Mapa burzowa Łodzi"
            />
          </div>
        </div>

        <div className="city-info-section" style={{ marginTop: 'var(--space-16)' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Informacje o pogodzie w Łodzi</h3>
              <p className="card-subtitle">Aktualne warunki atmosferyczne</p>
            </div>
            <div className="card-content">
              <p>
                Łódź, położona w centrum Polski, doświadcza typowego klimatu kontynentalnego. 
                Burze w tym regionie mogą być gwałtowne i często występują w miesiącach letnich.
              </p>
              <p style={{ marginTop: 'var(--space-4)' }}>
                Monitoruj naszą mapę burzową, aby być na bieżąco z warunkami pogodowymi 
                w Łodzi i województwie łódzkim.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}