export default function WeatherStats() {
  const stats = [
    {
      label: 'Aktywne burze',
      value: '12',
      icon: '⚡',
      color: 'primary',
      trend: '+3'
    },
    {
      label: 'Ostrzeżenia',
      value: '5',
      icon: '⚠️',
      color: 'warning',
      trend: '-1'
    },
    {
      label: 'Opady (mm/h)',
      value: '15.2',
      icon: '🌧️',
      color: 'info',
      trend: '+2.1'
    },
    {
      label: 'Wiatr (km/h)',
      value: '45',
      icon: '💨',
      color: 'secondary',
      trend: '+8'
    }
  ];

  return (
    <div className="weather-stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className={`stat-card stat-${stat.color}`}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className={`stat-trend ${stat.trend.startsWith('+') ? 'positive' : 'negative'}`}>
                  {stat.trend}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .weather-stats {
          padding: var(--space-12) 0;
          background: white;
          border-top: 1px solid var(--secondary-200);
          border-bottom: 1px solid var(--secondary-200);
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-6);
        }
        
        .stat-card {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          padding: var(--space-6);
          background: var(--secondary-50);
          border-radius: var(--radius-xl);
          border: 1px solid var(--secondary-200);
          transition: all var(--transition-base);
        }
        
        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        
        .stat-icon {
          font-size: var(--font-size-2xl);
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-xl);
          background: var(--primary-100);
        }
        
        .stat-primary .stat-icon {
          background: var(--primary-100);
        }
        
        .stat-warning .stat-icon {
          background: var(--accent-100);
        }
        
        .stat-info .stat-icon {
          background: var(--primary-100);
        }
        
        .stat-secondary .stat-icon {
          background: var(--secondary-200);
        }
        
        .stat-content {
          flex: 1;
        }
        
        .stat-value {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          color: var(--secondary-900);
          line-height: 1;
        }
        
        .stat-label {
          font-size: var(--font-size-sm);
          color: var(--secondary-600);
          margin-top: var(--space-1);
        }
        
        .stat-trend {
          font-size: var(--font-size-xs);
          font-weight: 600;
          margin-top: var(--space-1);
        }
        
        .stat-trend.positive {
          color: var(--success-500);
        }
        
        .stat-trend.negative {
          color: var(--error-500);
        }
        
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-4);
          }
          
          .stat-card {
            padding: var(--space-4);
          }
          
          .stat-icon {
            font-size: var(--font-size-xl);
            width: 40px;
            height: 40px;
          }
          
          .stat-value {
            font-size: var(--font-size-xl);
          }
        }
      `}</style>
    </div>
  );
}