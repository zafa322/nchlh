import Layout from '../../components/Layout';

export default function CzyBurzaJestNiebezpieczna() {
  return (
    <Layout 
      title="Czy burza jest niebezpieczna? Dowiedz się, jak się chronić."
      description="Praktyczne wskazówki dotyczące bezpieczeństwa podczas burzy i sposoby ochrony przed piorunami. Kompletny przewodnik bezpieczeństwa."
    >
      <article className="blog-article">
        <div className="container">
          <header className="article-header">
            <h1 className="article-title">Czy burza jest niebezpieczna?</h1>
            <p className="article-subtitle">
              Poznaj zagrożenia związane z burzami i dowiedz się, jak skutecznie się przed nimi chronić
            </p>
            <div className="article-meta">
              <span className="meta-item">📅 4 lipca 2025</span>
              <span className="meta-item">📖 Czas czytania: 4 min</span>
              <span className="meta-item">👤 Radar Burzowy</span>
            </div>
          </header>

          <div className="article-content">
            <section className="content-section">
              <h2>Główne zagrożenia burzowe</h2>
              <p>
                Burze mogą być bardzo niebezpieczne i stanowić poważne zagrożenie dla życia i zdrowia. 
                Oto najważniejsze niebezpieczeństwa związane z tym zjawiskiem atmosferycznym:
              </p>
              
              <div className="danger-grid">
                <div className="danger-card high">
                  <div className="danger-icon">⚡</div>
                  <h3>Pioruny</h3>
                  <p>Wyładowania elektryczne mogą być śmiertelne. Rocznie pioruny zabijają około 2000 osób na świecie.</p>
                </div>
                
                <div className="danger-card high">
                  <div className="danger-icon">🌪️</div>
                  <h3>Silne wiatry</h3>
                  <p>Wiatry o prędkości powyżej 100 km/h mogą wyrywać drzewa i uszkadzać budynki.</p>
                </div>
                
                <div className="danger-card medium">
                  <div className="danger-icon">🧊</div>
                  <h3>Grad</h3>
                  <p>Duże gradiny mogą powodować obrażenia ciała i znaczne szkody materialne.</p>
                </div>
                
                <div className="danger-card medium">
                  <div className="danger-icon">🌊</div>
                  <h3>Powodzie błyskawiczne</h3>
                  <p>Intensywne opady mogą prowadzić do gwałtownych powodzi, szczególnie w obszarach zurbanizowanych.</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Statystyki i fakty</h2>
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-number">2000</div>
                  <div className="stat-label">ofiar piorunów rocznie na świecie</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">25</div>
                  <div className="stat-label">milionów wyładowań dziennie</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">30000°C</div>
                  <div className="stat-label">temperatura kanału pioruna</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">200</div>
                  <div className="stat-label">km/h - prędkość wiatru w superkomórce</div>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Jak rozpoznać zbliżającą się burzę?</h2>
              <div className="warning-signs">
                <h3>Oznaki meteorologiczne:</h3>
                <ul className="signs-list">
                  <li>Szybko rosnące chmury kumulonimbus</li>
                  <li>Nagły spadek temperatury</li>
                  <li>Wzrost wilgotności powietrza</li>
                  <li>Zmiana kierunku wiatru</li>
                  <li>Charakterystyczny zapach ozonu</li>
                </ul>
                
                <div className="rule-box">
                  <h4>Zasada 30-30</h4>
                  <p>
                    Jeśli między błyskiem pioruna a grzmotem mija mniej niż 30 sekund, 
                    szukaj natychmiast schronienia. Pozostań w bezpiecznym miejscu przez 
                    co najmniej 30 minut po ostatnim grzmocie.
                  </p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Zasady bezpieczeństwa</h2>
              
              <div className="safety-section">
                <h3>W domu</h3>
                <div className="safety-grid">
                  <div className="safety-do">
                    <h4>✅ Rób</h4>
                    <ul>
                      <li>Pozostań w budynku</li>
                      <li>Unikaj okien i drzwi</li>
                      <li>Odłącz urządzenia elektryczne</li>
                      <li>Unikaj korzystania z telefonu stacjonarnego</li>
                      <li>Nie dotykaj metalowych przedmiotów</li>
                    </ul>
                  </div>
                  <div className="safety-dont">
                    <h4>❌ Nie rób</h4>
                    <ul>
                      <li>Nie kąp się ani nie bierz prysznica</li>
                      <li>Nie dotykaj kranów i rur</li>
                      <li>Nie stój przy oknach</li>
                      <li>Nie używaj urządzeń elektrycznych</li>
                      <li>Nie wychodź na zewnątrz</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="safety-section">
                <h3>Na zewnątrz</h3>
                <div className="outdoor-safety">
                  <div className="safety-priority">
                    <h4>Priorytet: znajdź schronienie</h4>
                    <ul>
                      <li>Wejdź do budynku lub samochodu</li>
                      <li>Unikaj otwartych przestrzeni</li>
                      <li>Nie chroń się pod drzewami</li>
                      <li>Unikaj metalowych konstrukcji</li>
                    </ul>
                  </div>
                  
                  <div className="emergency-position">
                    <h4>Jeśli nie ma schronienia:</h4>
                    <p>
                      Przyjmij pozycję bezpieczeństwa: kucnij, dotykając ziemi tylko stopami, 
                      złóż ręce na kolanach i pochyl głowę. Nie kładź się na ziemi!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Pierwsza pomoc przy porażeniu piorunem</h2>
              <div className="first-aid">
                <div className="aid-steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>Sprawdź bezpieczeństwo</h4>
                      <p>Upewnij się, że miejsce jest bezpieczne przed udzieleniem pomocy</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Wezwij pomoc</h4>
                      <p>Natychmiast zadzwoń pod numer 112 lub 999</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Sprawdź funkcje życiowe</h4>
                      <p>Sprawdź oddech i tętno, w razie potrzeby rozpocznij resuscytację</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4>Zabezpiecz rany</h4>
                      <p>Opatrz ewentualne oparzenia i inne obrażenia</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Podsumowanie</h2>
              <div className="summary-box">
                <p>
                  Burze są rzeczywiście niebezpieczne i wymagają poważnego traktowania. 
                  Kluczem do bezpieczeństwa jest przygotowanie, obserwacja oznak pogody 
                  i przestrzeganie zasad bezpieczeństwa. Pamiętaj: lepiej dmuchać na zimne 
                  i zachować ostrożność, niż narażać się na poważne niebezpieczeństwo.
                </p>
              </div>
            </section>
          </div>
        </div>
      </article>

      <style jsx>{`
        .blog-article {
          padding: var(--space-12) 0;
        }
        
        .article-header {
          text-align: center;
          margin-bottom: var(--space-16);
          padding-bottom: var(--space-8);
          border-bottom: 1px solid var(--secondary-200);
        }
        
        .article-title {
          font-size: var(--font-size-4xl);
          font-weight: 700;
          color: var(--secondary-900);
          margin-bottom: var(--space-4);
          line-height: 1.2;
        }
        
        .article-subtitle {
          font-size: var(--font-size-xl);
          color: var(--secondary-600);
          margin-bottom: var(--space-6);
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .article-meta {
          display: flex;
          justify-content: center;
          gap: var(--space-6);
          flex-wrap: wrap;
        }
        
        .meta-item {
          color: var(--secondary-500);
          font-size: var(--font-size-sm);
        }
        
        .article-content {
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.7;
        }
        
        .content-section {
          margin-bottom: var(--space-12);
        }
        
        .content-section h2 {
          font-size: var(--font-size-2xl);
          font-weight: 600;
          color: var(--secondary-900);
          margin-bottom: var(--space-6);
          padding-bottom: var(--space-3);
          border-bottom: 2px solid var(--error-500);
        }
        
        .danger-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-4);
          margin-top: var(--space-6);
        }
        
        .danger-card {
          padding: var(--space-6);
          border-radius: var(--radius-lg);
          text-align: center;
          border: 2px solid;
        }
        
        .danger-card.high {
          background: #fef2f2;
          border-color: var(--error-500);
        }
        
        .danger-card.medium {
          background: #fefbf2;
          border-color: var(--warning-500);
        }
        
        .danger-icon {
          font-size: var(--font-size-3xl);
          margin-bottom: var(--space-3);
        }
        
        .danger-card h3 {
          color: var(--secondary-900);
          margin-bottom: var(--space-3);
        }
        
        .stats-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: var(--space-6);
          margin: var(--space-8) 0;
        }
        
        .stat-item {
          text-align: center;
          padding: var(--space-4);
          background: var(--primary-50);
          border-radius: var(--radius-lg);
          border: 1px solid var(--primary-200);
        }
        
        .stat-number {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          color: var(--primary-600);
          line-height: 1;
        }
        
        .stat-label {
          font-size: var(--font-size-sm);
          color: var(--secondary-600);
          margin-top: var(--space-2);
        }
        
        .warning-signs h3 {
          color: var(--secondary-800);
          margin-bottom: var(--space-4);
        }
        
        .signs-list {
          list-style: none;
          padding: 0;
          margin-bottom: var(--space-6);
        }
        
        .signs-list li {
          padding: var(--space-2) 0;
          padding-left: var(--space-6);
          position: relative;
          color: var(--secondary-700);
        }
        
        .signs-list li::before {
          content: '🌩️';
          position: absolute;
          left: 0;
        }
        
        .rule-box {
          background: var(--accent-50);
          border: 2px solid var(--accent-300);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          margin-top: var(--space-6);
        }
        
        .rule-box h4 {
          color: var(--accent-700);
          margin-bottom: var(--space-3);
        }
        
        .safety-section {
          margin-bottom: var(--space-8);
        }
        
        .safety-section h3 {
          color: var(--secondary-800);
          margin-bottom: var(--space-4);
          font-size: var(--font-size-xl);
        }
        
        .safety-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-6);
        }
        
        .safety-do, .safety-dont {
          padding: var(--space-6);
          border-radius: var(--radius-lg);
          border: 2px solid;
        }
        
        .safety-do {
          background: #f0fdf4;
          border-color: var(--success-500);
        }
        
        .safety-dont {
          background: #fef2f2;
          border-color: var(--error-500);
        }
        
        .safety-do h4 {
          color: var(--success-500);
          margin-bottom: var(--space-4);
        }
        
        .safety-dont h4 {
          color: var(--error-500);
          margin-bottom: var(--space-4);
        }
        
        .safety-do ul, .safety-dont ul {
          list-style: none;
          padding: 0;
        }
        
        .safety-do li, .safety-dont li {
          padding: var(--space-1) 0;
          color: var(--secondary-700);
        }
        
        .outdoor-safety {
          display: grid;
          gap: var(--space-6);
        }
        
        .safety-priority, .emergency-position {
          background: var(--secondary-50);
          border: 1px solid var(--secondary-200);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
        }
        
        .safety-priority h4, .emergency-position h4 {
          color: var(--secondary-800);
          margin-bottom: var(--space-3);
        }
        
        .safety-priority ul {
          list-style: none;
          padding: 0;
        }
        
        .safety-priority li {
          padding: var(--space-1) 0;
          padding-left: var(--space-5);
          position: relative;
          color: var(--secondary-700);
        }
        
        .safety-priority li::before {
          content: '⚠️';
          position: absolute;
          left: 0;
        }
        
        .first-aid {
          background: var(--primary-50);
          border: 1px solid var(--primary-200);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
        }
        
        .aid-steps {
          display: grid;
          gap: var(--space-4);
        }
        
        .step {
          display: flex;
          gap: var(--space-4);
          align-items: flex-start;
        }
        
        .step-number {
          width: 40px;
          height: 40px;
          background: var(--primary-500);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          flex-shrink: 0;
        }
        
        .step-content h4 {
          color: var(--secondary-800);
          margin-bottom: var(--space-2);
        }
        
        .step-content p {
          color: var(--secondary-700);
          margin: 0;
        }
        
        .summary-box {
          background: var(--accent-50);
          border: 2px solid var(--accent-300);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
        }
        
        .summary-box p {
          margin: 0;
          color: var(--secondary-800);
          font-size: var(--font-size-lg);
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .article-title {
            font-size: var(--font-size-3xl);
          }
          
          .article-subtitle {
            font-size: var(--font-size-lg);
          }
          
          .danger-grid, .stats-container, .safety-grid {
            grid-template-columns: 1fr;
          }
          
          .step {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </Layout>
  );
}