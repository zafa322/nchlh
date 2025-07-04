import Layout from '../../components/Layout';
import WeatherStats from '../../components/WeatherStats';

export default function Wroclaw() {
  return (
    <Layout 
      title="Burza we Wrocławiu - Aktualna mapa burzowa i ostrzeżenia"
      description="Sprawdź aktualne burze i prognozy pogody dla Wrocławia. Mapa burzowa, ostrzeżenia meteorologiczne i radar opadów."
    >
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Burza we Wrocławiu</h1>
          <p className="hero-subtitle">
            Aktualne informacje o burzach, opadach i ostrzeżeniach meteorologicznych dla Wrocławia
          </p>
        </div>
      </section>

      <WeatherStats />

      <section className="container">
        <div className="weather-map-container">
          <div className="weather-map-header">
            <h2 className="weather-map-title">Mapa burzowa - Wrocław</h2>
            <p className="weather-map-description">
              Szczegółowa mapa burzowa dla Wrocławia i okolic z aktualnymi danymi meteorologicznymi
            </p>
          </div>
          <div className="weather-map">
            <iframe 
              src="https://embed.windy.com/embed2.html?lat=51.107&lon=17.038&detailLat=51.107&detailLon=17.038&width=650&height=450&zoom=9&level=surface&overlay=thunder&menu=&message=true" 
              width="100%" 
              height="500" 
              frameBorder="0"
              title="Mapa burzowa Wrocławia"
            />
          </div>
        </div>

        <div className="city-info-section" style={{ marginTop: 'var(--space-16)' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Informacje o pogodzie we Wrocławiu</h3>
              <p className="card-subtitle">Aktualne warunki atmosferyczne</p>
            </div>
            <div className="card-content">
              <p>
                Wrocław, położony na Nizinie Śląskiej, doświadcza różnorodnych warunków pogodowych. 
                Burze w tym regionie mogą być gwałtowne, szczególnie w okresie letnim.
              </p>
              <p style={{ marginTop: 'var(--space-4)' }}>
                Korzystaj z naszej mapy burzowej, aby śledzić aktualne warunki pogodowe 
                we Wrocławiu i województwie dolnośląskim.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}