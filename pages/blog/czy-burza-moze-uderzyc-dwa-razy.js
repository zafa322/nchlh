import Layout from '../../components/Layout';

export default function CzyBurzaMozeUderzycDwaRazy() {
  return (
    <Layout 
      title="Czy burza może uderzyć dwa razy w to samo miejsce?"
      description="Rozwiewamy popularne mity na temat piorunów i wyjaśniamy prawdę o ich zachowaniu. Fakty i mity o piorunach."
    >
      <article className="blog-article">
        <div className="container">
          <header className="article-header">
            <h1 className="article-title">Czy piorun może uderzyć dwa razy w to samo miejsce?</h1>
            <p className="article-subtitle">
              Rozwiewamy jeden z najpopularniejszych mitów meteorologicznych i odkrywamy fascynującą prawdę o piorunach
            </p>
            <div className="article-meta">
              <span className="meta-item">📅 4 lipca 2025</span>
              <span className="meta-item">📖 Czas czytania: 4 min</span>
              <span className="meta-item">👤 Radar Burzowy</span>
            </div>
          </header>

          <div className="article-content">
            <section className="content-section">
              <div className="myth-buster">
                <h2>🚫 MIT: Piorun nigdy nie uderza dwa razy w to samo miejsce</h2>
                <div className="truth-reveal">
                  <h3>✅ PRAWDA: Piorun może i często uderza wielokrotnie w to samo miejsce!</h3>
                  <p>
                    To jeden z najbardziej rozpowszechnionych mitów meteorologicznych. 
                    W rzeczywistości pioruny często uderzają w te same miejsca, 
                    szczególnie w wysokie obiekty i struktury.
                  </p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Dlaczego pioruny uderzają w te same miejsca?</h2>
              <p>
                Pioruny nie są przypadkowe - podążają ścieżką najmniejszego oporu elektrycznego. 
                Niektóre miejsca są naturalnie bardziej podatne na uderzenia piorunów:
              </p>
              
              <div className="factors-grid">
                <div className="factor-card">
                  <div className="factor-icon">🏔️</div>
                  <h3>Wysokość</h3>
                  <p>Wysokie obiekty są bliżej chmur burzowych, co zwiększa prawdopodobieństwo uderzenia</p>
                </div>
                
                <div className="factor-card">
                  <div className="factor-icon">⚡</div>
                  <h3>Przewodnictwo</h3>
                  <p>Metalowe konstrukcje i mokre powierzchnie lepiej przewodzą prąd elektryczny</p>
                </div>
                
                <div className="factor-card">
                  <div className="factor-icon">🌍</div>
                  <h3>Topografia</h3>
                  <p>Wzgórza, szczyty i wyizolowane obiekty przyciągają wyładowania</p>
                </div>
                
                <div className="factor-card">
                  <div className="factor-icon">💧</div>
                  <h3>Wilgotność</h3>
                  <p>Mokre powierzchnie tworzą lepsze ścieżki przewodzenia prądu</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Słynne przykłady wielokrotnych uderzeń</h2>
              
              <div className="examples-container">
                <div className="example-card featured">
                  <h3>🗽 Statua Wolności</h3>
                  <div className="example-stats">
                    <span className="stat">~25 razy rocznie</span>
                  </div>
                  <p>
                    Statua Wolności w Nowym Jorku jest uderzana przez pioruny około 25 razy w roku. 
                    Jej wysokość (93 metry) i metalowa konstrukcja czynią ją idealnym celem dla wyładowań.
                  </p>
                </div>
                
                <div className="example-card">
                  <h3>🏢 Empire State Building</h3>
                  <div className="example-stats">
                    <span className="stat">~100 razy rocznie</span>
                  </div>
                  <p>
                    Ten słynny wieżowiec jest uderzany przez pioruny około 100 razy rocznie, 
                    szczególnie często podczas burz letnich.
                  </p>
                </div>
                
                <div className="example-card">
                  <h3>🌲 Wysokie drzewa</h3>
                  <div className="example-stats">
                    <span className="stat">Wielokrotnie</span>
                  </div>
                  <p>
                    Samotnie stojące wysokie drzewa, szczególnie dęby, są często uderzane 
                    przez pioruny w tym samym miejscu przez lata.
                  </p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Jak działa piorun?</h2>
              <div className="lightning-process">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Ładowanie chmury</h4>
                    <p>W chmurze burzowej gromadzą się ładunki elektryczne - ujemne u dołu, dodatnie u góry</p>
                  </div>
                </div>
                
                <div className="process-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Stepped Leader</h4>
                    <p>Z chmury w kierunku ziemi porusza się niewidoczny kanał jonizowany (stepped leader)</p>
                  </div>
                </div>
                
                <div className="process-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Streamer</h4>
                    <p>Z wysokich obiektów na ziemi wystrzeliwują w górę pozytywne streamery</p>
                  </div>
                </div>
                
                <div className="process-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Połączenie</h4>
                    <p>Gdy stepped leader spotka się ze streamerem, następuje gwałtowne wyładowanie</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Inne mity o piorunach</h2>
              
              <div className="myths-container">
                <div className="myth-item">
                  <div className="myth-header">
                    <span className="myth-status false">❌ MIT</span>
                    <h4>Piorun nie uderza podczas deszczu</h4>
                  </div>
                  <div className="myth-truth">
                    <span className="truth-label">PRAWDA:</span>
                    <p>Pioruny mogą uderzać podczas deszczu, a nawet przed jego rozpoczęciem</p>
                  </div>
                </div>
                
                <div className="myth-item">
                  <div className="myth-header">
                    <span className="myth-status false">❌ MIT</span>
                    <h4>Gumowe opony chronią przed piorunem</h4>
                  </div>
                  <div className="myth-truth">
                    <span className="truth-label">PRAWDA:</span>
                    <p>To metalowa klatka Faradaya w samochodzie chroni, nie opony</p>
                  </div>
                </div>
                
                <div className="myth-item">
                  <div className="myth-header">
                    <span className="myth-status false">❌ MIT</span>
                    <h4>Jeśli nie ma deszczu, nie ma piorunów</h4>
                  </div>
                  <div className="myth-truth">
                    <span className="truth-label">PRAWDA:</span>
                    <p>Pioruny mogą wystąpić nawet przy bezchmurnym niebie ("bolt from the blue")</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Fascynujące fakty o piorunach</h2>
              
              <div className="facts-grid">
                <div className="fact-card">
                  <div className="fact-icon">🔥</div>
                  <h4>30,000°C</h4>
                  <p>Temperatura kanału pioruna - 5 razy gorętsza niż powierzchnia Słońca</p>
                </div>
                
                <div className="fact-card">
                  <div className="fact-icon">⚡</div>
                  <h4>1 miliard woltów</h4>
                  <p>Napięcie typowego pioruna może osiągnąć miliard woltów</p>
                </div>
                
                <div className="fact-card">
                  <div className="fact-icon">⏱️</div>
                  <h4>0.0002 sekundy</h4>
                  <p>Czas trwania pojedynczego wyładowania pioruna</p>
                </div>
                
                <div className="fact-card">
                  <div className="fact-icon">🌍</div>
                  <h4>100 razy/sekundę</h4>
                  <p>Częstotliwość uderzeń piorunów na całym świecie</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Praktyczne wnioski</h2>
              <div className="conclusions">
                <div className="conclusion-box important">
                  <h4>⚠️ Dla bezpieczeństwa</h4>
                  <p>
                    Nie licz na to, że piorun nie uderzy w miejsce, gdzie już wcześniej uderzył. 
                    Wysokie i wyeksponowane obiekty są stale narażone na kolejne uderzenia.
                  </p>
                </div>
                
                <div className="conclusion-box tip">
                  <h4>💡 Ciekawostka</h4>
                  <p>
                    Roy Sullivan, strażnik parku narodowego, został uderzony przez piorun 7 razy 
                    i przeżył wszystkie uderzenia, co potwierdza, że niektóre osoby mogą być 
                    szczególnie "przyciągające" dla piorunów.
                  </p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Podsumowanie</h2>
              <div className="summary-box">
                <p>
                  Mit o tym, że piorun nie uderza dwa razy w to samo miejsce, został całkowicie obalony. 
                  Pioruny często uderzają wielokrotnie w te same lokalizacje, szczególnie w wysokie 
                  i wyeksponowane obiekty. Zrozumienie tego faktu jest kluczowe dla właściwego 
                  planowania ochrony przeciwpiorunowej i zachowania bezpieczeństwa podczas burz.
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
          border-bottom: 2px solid var(--primary-200);
        }
        
        .myth-buster {
          background: linear-gradient(135deg, #fef2f2, #fef7f7);
          border: 2px solid var(--error-300);
          border-radius: var(--radius-xl);
          padding: var(--space-8);
          margin-bottom: var(--space-8);
          text-align: center;
        }
        
        .myth-buster h2 {
          color: var(--error-600);
          border: none;
          margin-bottom: var(--space-6);
          font-size: var(--font-size-xl);
        }
        
        .truth-reveal {
          background: white;
          border: 2px solid var(--success-300);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          margin-top: var(--space-4);
        }
        
        .truth-reveal h3 {
          color: var(--success-600);
          margin-bottom: var(--space-4);
          font-size: var(--font-size-lg);
        }
        
        .factors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-4);
          margin-top: var(--space-6);
        }
        
        .factor-card {
          background: var(--primary-50);
          border: 1px solid var(--primary-200);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          text-align: center;
        }
        
        .factor-icon {
          font-size: var(--font-size-3xl);
          margin-bottom: var(--space-3);
        }
        
        .factor-card h3 {
          color: var(--primary-700);
          margin-bottom: var(--space-3);
          font-size: var(--font-size-lg);
        }
        
        .examples-container {
          display: grid;
          gap: var(--space-6);
          margin-top: var(--space-6);
        }
        
        .example-card {
          background: white;
          border: 1px solid var(--secondary-200);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          box-shadow: var(--shadow-sm);
        }
        
        .example-card.featured {
          background: linear-gradient(135deg, var(--accent-50), var(--accent-100));
          border-color: var(--accent-300);
        }
        
        .example-card h3 {
          color: var(--secondary-800);
          margin-bottom: var(--space-3);
          font-size: var(--font-size-lg);
        }
        
        .example-stats {
          margin-bottom: var(--space-4);
        }
        
        .stat {
          background: var(--primary-500);
          color: white;
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
          font-size: var(--font-size-sm);
          font-weight: 600;
        }
        
        .lightning-process {
          display: grid;
          gap: var(--space-4);
          margin-top: var(--space-6);
        }
        
        .process-step {
          display: flex;
          gap: var(--space-4);
          align-items: flex-start;
          background: var(--secondary-50);
          border: 1px solid var(--secondary-200);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
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
          font-size: var(--font-size-base);
        }
        
        .step-content p {
          color: var(--secondary-700);
          margin: 0;
          font-size: var(--font-size-sm);
        }
        
        .myths-container {
          display: grid;
          gap: var(--space-4);
          margin-top: var(--space-6);
        }
        
        .myth-item {
          background: white;
          border: 1px solid var(--secondary-200);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        
        .myth-header {
          background: var(--error-50);
          padding: var(--space-4);
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }
        
        .myth-status {
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
          font-size: var(--font-size-xs);
          font-weight: 600;
        }
        
        .myth-status.false {
          background: var(--error-500);
          color: white;
        }
        
        .myth-header h4 {
          margin: 0;
          color: var(--secondary-800);
          font-size: var(--font-size-base);
        }
        
        .myth-truth {
          padding: var(--space-4);
        }
        
        .truth-label {
          color: var(--success-600);
          font-weight: 600;
          font-size: var(--font-size-sm);
        }
        
        .myth-truth p {
          margin: var(--space-2) 0 0 0;
          color: var(--secondary-700);
          font-size: var(--font-size-sm);
        }
        
        .facts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-4);
          margin-top: var(--space-6);
        }
        
        .fact-card {
          background: var(--accent-50);
          border: 1px solid var(--accent-200);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          text-align: center;
        }
        
        .fact-icon {
          font-size: var(--font-size-2xl);
          margin-bottom: var(--space-3);
        }
        
        .fact-card h4 {
          color: var(--accent-700);
          margin-bottom: var(--space-2);
          font-size: var(--font-size-lg);
        }
        
        .fact-card p {
          color: var(--secondary-700);
          margin: 0;
          font-size: var(--font-size-sm);
        }
        
        .conclusions {
          display: grid;
          gap: var(--space-4);
          margin-top: var(--space-6);
        }
        
        .conclusion-box {
          padding: var(--space-6);
          border-radius: var(--radius-lg);
          border: 2px solid;
        }
        
        .conclusion-box.important {
          background: #fef2f2;
          border-color: var(--error-300);
        }
        
        .conclusion-box.tip {
          background: var(--primary-50);
          border-color: var(--primary-300);
        }
        
        .conclusion-box h4 {
          margin-bottom: var(--space-3);
          font-size: var(--font-size-base);
        }
        
        .conclusion-box.important h4 {
          color: var(--error-600);
        }
        
        .conclusion-box.tip h4 {
          color: var(--primary-600);
        }
        
        .conclusion-box p {
          margin: 0;
          color: var(--secondary-700);
          font-size: var(--font-size-sm);
          line-height: 1.6;
        }
        
        .summary-box {
          background: var(--success-50);
          border: 2px solid var(--success-300);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
        }
        
        .summary-box p {
          margin: 0;
          color: var(--secondary-800);
          font-size: var(--font-size-base);
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .article-title {
            font-size: var(--font-size-3xl);
          }
          
          .article-subtitle {
            font-size: var(--font-size-lg);
          }
          
          .factors-grid, .facts-grid {
            grid-template-columns: 1fr;
          }
          
          .process-step {
            flex-direction: column;
            text-align: center;
          }
          
          .myth-header {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-2);
          }
        }
      `}</style>
    </Layout>
  );
}