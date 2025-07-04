import Layout from '../../components/Layout';

export default function JakPowstajeBurza() {
  return (
    <Layout 
      title="Jak powstaje burza? Poznaj etapy tworzenia burz i ich skutki."
      description="Dowiedz się, jak formują się chmury burzowe i jakie procesy atmosferyczne prowadzą do powstania burzy. Kompleksowy przewodnik po meteorologii."
    >
      <article className="blog-article">
        <div className="container">
          <header className="article-header">
            <h1 className="article-title">Jak powstaje burza?</h1>
            <p className="article-subtitle">
              Poznaj fascynujące procesy atmosferyczne, które prowadzą do powstania jednych z najbardziej spektakularnych zjawisk pogodowych
            </p>
            <div className="article-meta">
              <span className="meta-item">📅 4 lipca 2025</span>
              <span className="meta-item">📖 Czas czytania: 5 min</span>
              <span className="meta-item">👤 Radar Burzowy</span>
            </div>
          </header>

          <div className="article-content">
            <section className="content-section">
              <h2>Podstawowe warunki powstania burzy</h2>
              <p>
                Burza to złożone zjawisko atmosferyczne, które wymaga spełnienia kilku kluczowych warunków. 
                Aby mogła się rozwinąć, potrzebne są:
              </p>
              <ul className="content-list">
                <li><strong>Niestabilność atmosferyczna</strong> - różnice temperatur między warstwami powietrza</li>
                <li><strong>Wilgotność</strong> - wystarczająca ilość pary wodnej w atmosferze</li>
                <li><strong>Mechanizm wznoszący</strong> - siła, która podnosi powietrze w górę</li>
                <li><strong>Pionowy gradient wiatru</strong> - różnice prędkości wiatru na różnych wysokościach</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>Etapy rozwoju burzy</h2>
              
              <div className="stage-card">
                <h3>1. Stadium kumulusowe (rozwijające się)</h3>
                <p>
                  W tym etapie ciepłe, wilgotne powietrze unosi się w górę, tworząc charakterystyczne 
                  chmury kumulusowe. Proces ten może trwać od 10 do 15 minut. Chmura rośnie pionowo, 
                  osiągając wysokość nawet kilku kilometrów.
                </p>
              </div>

              <div className="stage-card">
                <h3>2. Stadium dojrzałe</h3>
                <p>
                  To najintensywniejszy etap burzy. Chmura osiąga pełną wysokość (nawet 15-20 km), 
                  powstają silne prądy wstępujące i zstępujące. Występują intensywne opady, 
                  wyładowania atmosferyczne i silny wiatr.
                </p>
              </div>

              <div className="stage-card">
                <h3>3. Stadium zanikowe</h3>
                <p>
                  Prądy zstępujące dominują nad wstępującymi, co prowadzi do stopniowego osłabienia burzy. 
                  Opady stają się mniej intensywne, a aktywność elektryczna maleje.
                </p>
              </div>
            </section>

            <section className="content-section">
              <h2>Rodzaje burz</h2>
              <div className="storm-types">
                <div className="type-card">
                  <h4>Burze jednokomórkowe</h4>
                  <p>Najczęstszy typ, trwający 20-30 minut. Stosunkowo słabe, ale mogą przynieść intensywne opady.</p>
                </div>
                <div className="type-card">
                  <h4>Burze wielokomórkowe</h4>
                  <p>Składają się z kilku komórek burzowych. Mogą trwać kilka godzin i przemieszczać się na duże odległości.</p>
                </div>
                <div className="type-card">
                  <h4>Superkomórki</h4>
                  <p>Najsilniejszy typ burz, charakteryzujący się rotacją. Mogą powodować tornada, grad i niszczycielskie wiatry.</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Skutki burz</h2>
              <p>
                Burze mogą powodować różnorodne skutki, od pozytywnych po destrukcyjne:
              </p>
              <div className="effects-grid">
                <div className="effect-positive">
                  <h4>Pozytywne skutki</h4>
                  <ul>
                    <li>Dostarczanie wody dla roślin</li>
                    <li>Oczyszczanie powietrza</li>
                    <li>Wyrównywanie temperatur</li>
                    <li>Produkcja azotanów</li>
                  </ul>
                </div>
                <div className="effect-negative">
                  <h4>Negatywne skutki</h4>
                  <ul>
                    <li>Powodzie błyskawiczne</li>
                    <li>Uszkodzenia od piorunów</li>
                    <li>Zniszczenia od gradu</li>
                    <li>Silne wiatry niszczące</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Jak się chronić podczas burzy?</h2>
              <div className="safety-tips">
                <div className="tip-card">
                  <h4>W domu</h4>
                  <ul>
                    <li>Unikaj korzystania z urządzeń elektrycznych</li>
                    <li>Nie dotykaj metalowych przedmiotów</li>
                    <li>Zamknij okna i drzwi</li>
                    <li>Unikaj kąpieli i prysznica</li>
                  </ul>
                </div>
                <div className="tip-card">
                  <h4>Na zewnątrz</h4>
                  <ul>
                    <li>Szukaj schronienia w budynku</li>
                    <li>Unikaj otwartych przestrzeni</li>
                    <li>Nie chroń się pod drzewami</li>
                    <li>Unikaj metalowych przedmiotów</li>
                  </ul>
                </div>
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
          border-bottom: 2px solid var(--primary-200);
        }
        
        .content-section h3 {
          font-size: var(--font-size-xl);
          font-weight: 600;
          color: var(--secondary-800);
          margin-bottom: var(--space-4);
        }
        
        .content-section h4 {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--secondary-800);
          margin-bottom: var(--space-3);
        }
        
        .content-section p {
          margin-bottom: var(--space-4);
          color: var(--secondary-700);
        }
        
        .content-list {
          list-style: none;
          padding: 0;
        }
        
        .content-list li {
          padding: var(--space-2) 0;
          padding-left: var(--space-6);
          position: relative;
          color: var(--secondary-700);
        }
        
        .content-list li::before {
          content: '⚡';
          position: absolute;
          left: 0;
          color: var(--primary-500);
        }
        
        .stage-card {
          background: var(--primary-50);
          border: 1px solid var(--primary-200);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          margin-bottom: var(--space-6);
        }
        
        .stage-card h3 {
          color: var(--primary-700);
          margin-bottom: var(--space-3);
        }
        
        .storm-types {
          display: grid;
          gap: var(--space-4);
        }
        
        .type-card {
          background: white;
          border: 1px solid var(--secondary-200);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          box-shadow: var(--shadow-sm);
        }
        
        .type-card h4 {
          color: var(--secondary-800);
          margin-bottom: var(--space-2);
        }
        
        .effects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-6);
          margin-top: var(--space-6);
        }
        
        .effect-positive, .effect-negative {
          padding: var(--space-6);
          border-radius: var(--radius-lg);
          border: 1px solid;
        }
        
        .effect-positive {
          background: var(--success-500)10;
          border-color: var(--success-500)30;
        }
        
        .effect-negative {
          background: #fef2f2;
          border-color: #fecaca;
        }
        
        .effect-positive h4 {
          color: var(--success-500);
        }
        
        .effect-negative h4 {
          color: var(--error-500);
        }
        
        .safety-tips {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-6);
          margin-top: var(--space-6);
        }
        
        .tip-card {
          background: var(--accent-50);
          border: 1px solid var(--accent-200);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
        }
        
        .tip-card h4 {
          color: var(--accent-700);
          margin-bottom: var(--space-4);
        }
        
        .tip-card ul {
          list-style: none;
          padding: 0;
        }
        
        .tip-card li {
          padding: var(--space-1) 0;
          padding-left: var(--space-5);
          position: relative;
          color: var(--secondary-700);
        }
        
        .tip-card li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent-600);
          font-weight: bold;
        }
        
        @media (max-width: 768px) {
          .article-title {
            font-size: var(--font-size-3xl);
          }
          
          .article-subtitle {
            font-size: var(--font-size-lg);
          }
          
          .article-meta {
            flex-direction: column;
            align-items: center;
            gap: var(--space-2);
          }
          
          .effects-grid, .safety-tips {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  );
}