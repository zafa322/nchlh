import Layout from '../components/Layout';
import WeatherAlert from '../components/WeatherAlert';
import WeatherStats from '../components/WeatherStats';
import Link from 'next/link';

export default function Home() {
  const cities = [
    { name: 'Warszawa', slug: 'warszawa', icon: '🏛️' },
    { name: 'Kraków', slug: 'krakow', icon: '🏰' },
    { name: 'Gdańsk', slug: 'gdansk', icon: '⚓' },
    { name: 'Wrocław', slug: 'wroclaw', icon: '🌉' },
    { name: 'Poznań', slug: 'poznan', icon: '🏢' },
    { name: 'Łódź', slug: 'lodz', icon: '🏭' },
    { name: 'Katowice', slug: 'katowice', icon: '⛏️' },
    { name: 'Szczecin', slug: 'szczecin', icon: '🚢' }
  ];

  const blogPosts = [
    {
      title: 'Jak powstaje burza? Poznaj etapy tworzenia burz i ich skutki.',
      excerpt: 'Dowiedz się, jak formują się chmury burzowe i jakie procesy atmosferyczne prowadzą do powstania burzy.',
      slug: 'jak-powstaje-burza'
    },
    {
      title: 'Czy burza jest niebezpieczna? Dowiedz się, jak się chronić.',
      excerpt: 'Praktyczne wskazówki dotyczące bezpieczeństwa podczas burzy i sposoby ochrony przed piorunami.',
      slug: 'czy-burza-jest-niebezpieczna'
    },
    {
      title: 'Czy burza może uderzyć dwa razy w to samo miejsce?',
      excerpt: 'Rozwiewamy popularne mity na temat piorunów i wyjaśniamy prawdę o ich zachowaniu.',
      slug: 'czy-burza-moze-uderzyc-dwa-razy'
    }
  ];

  return (
    <Layout>
      <WeatherAlert />
      
      <section className="hero">
        <div className="container">
          <h1 className="hero-title animate-fade-in-up">
            Gdzie jest burza?
          </h1>
          <p className="hero-subtitle animate-fade-in-up">
            Śledź aktualne burze w Polsce w czasie rzeczywistym. Najdokładniejsza mapa burzowa z ostrzeżeniami meteorologicznymi.
          </p>
          <div className="hero-cta animate-fade-in-up">
            <a href="#mapa" className="btn btn-primary">
              Zobacz mapę burz
            </a>
            <Link href="/blog/jak-powstaje-burza" className="btn btn-secondary">
              Dowiedz się więcej
            </Link>
          </div>
        </div>
      </section>

      <WeatherStats />

      <section id="mapa" className="container">
        <div className="weather-map-container animate-fade-in-up">
          <div className="weather-map-header">
            <h2 className="weather-map-title">Mapa burzowa Polski</h2>
            <p className="weather-map-description">
              Interaktywna mapa pokazująca aktualne burze, opady i ostrzeżenia meteorologiczne
            </p>
          </div>
          <div className="weather-map">
            <iframe 
              src="https://embed.windy.com/embed2.html?lat=52.0&lon=19.0&detailLat=52.0&detailLon=19.0&width=650&height=450&zoom=6&level=surface&overlay=thunder&menu=&message=true" 
              width="100%" 
              height="500" 
              frameBorder="0"
              title="Mapa burzowa Polski"
            />
          </div>
        </div>
      </section>

      <section className="cities-section">
        <div className="container">
          <h2 className="section-title">Burze w największych miastach</h2>
          <p className="section-subtitle">
            Sprawdź aktualne warunki pogodowe i prognozy burz dla wybranych miast w Polsce
          </p>
          
          <div className="cities-grid">
            {cities.map((city, index) => (
              <Link key={city.slug} href={`/burza/${city.slug}`} className="city-card">
                <div className="city-icon">{city.icon}</div>
                <h3 className="city-name">{city.name}</h3>
                <p className="city-description">
                  Sprawdź aktualne burze i prognozy pogody dla miasta {city.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-section">
        <div className="container">
          <h2 className="section-title">Wiedza o burzach</h2>
          <p className="section-subtitle">
            Poznaj fascynujący świat meteorologii i dowiedz się więcej o zjawiskach atmosferycznych
          </p>
          
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span>📖 Czas czytania: 3 min</span>
                  <span>📅 4 lipca 2025</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}