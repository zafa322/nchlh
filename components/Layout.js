import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children, title = "Gdzie jest burza?", description = "Sprawdź gdzie jest burza w Polsce - aktualna mapa burzowa." }) {
  const router = useRouter();

  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link href="/" className="logo">
              <div className="logo-icon">⚡</div>
              <span>Radar Burzowy</span>
            </Link>
            
            <nav className="nav">
              <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                Mapa
              </Link>
              <Link href="/blog/jak-powstaje-burza" className={`nav-link ${router.pathname.startsWith('/blog') ? 'active' : ''}`}>
                Blog
              </Link>
              <Link href="/burza/warszawa" className={`nav-link ${router.pathname.startsWith('/burza') ? 'active' : ''}`}>
                Miasta
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Radar Burzowy</h3>
              <p>Najdokładniejsze informacje o burzach w Polsce. Śledź aktualne warunki pogodowe i bądź zawsze przygotowany.</p>
            </div>
            
            <div className="footer-section">
              <h3>Miasta</h3>
              <ul className="footer-links">
                <li><Link href="/burza/warszawa">Warszawa</Link></li>
                <li><Link href="/burza/krakow">Kraków</Link></li>
                <li><Link href="/burza/gdansk">Gdańsk</Link></li>
                <li><Link href="/burza/wroclaw">Wrocław</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Wiedza</h3>
              <ul className="footer-links">
                <li><Link href="/blog/jak-powstaje-burza">Jak powstaje burza?</Link></li>
                <li><Link href="/blog/czy-burza-jest-niebezpieczna">Czy burza jest niebezpieczna?</Link></li>
                <li><Link href="/blog/czy-burza-moze-uderzyc-dwa-razy">Piorun dwa razy</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Kontakt</h3>
              <ul className="footer-links">
                <li><a href="mailto:kontakt@radarburzowy.pl">kontakt@radarburzowy.pl</a></li>
                <li><a href="/polityka-prywatnosci">Polityka prywatności</a></li>
                <li><a href="/regulamin">Regulamin</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 Radar Burzowy. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </>
  );
}