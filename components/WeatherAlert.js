import { useState, useEffect } from 'react';

export default function WeatherAlert() {
  const [alerts, setAlerts] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate weather alerts - in real app, this would come from an API
    const mockAlerts = [
      {
        id: 1,
        type: 'warning',
        title: 'Ostrzeżenie meteorologiczne',
        message: 'Silne burze z gradem przewidywane w województwie mazowieckim',
        severity: 'medium',
        validUntil: '2025-01-15T18:00:00Z'
      }
    ];
    
    setAlerts(mockAlerts);
  }, []);

  if (!isVisible || alerts.length === 0) return null;

  return (
    <div className="weather-alerts">
      {alerts.map(alert => (
        <div key={alert.id} className={`alert alert-${alert.severity}`}>
          <div className="container">
            <div className="alert-content">
              <div className="alert-icon">
                {alert.type === 'warning' && '⚠️'}
                {alert.type === 'danger' && '🚨'}
                {alert.type === 'info' && 'ℹ️'}
              </div>
              <div className="alert-text">
                <h4 className="alert-title">{alert.title}</h4>
                <p className="alert-message">{alert.message}</p>
              </div>
              <button 
                className="alert-close"
                onClick={() => setIsVisible(false)}
                aria-label="Zamknij alert"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <style jsx>{`
        .weather-alerts {
          position: sticky;
          top: 73px;
          z-index: 90;
        }
        
        .alert {
          background: linear-gradient(135deg, var(--warning-500), #f59e0b);
          color: white;
          padding: var(--space-4) 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .alert-danger {
          background: linear-gradient(135deg, var(--error-500), #dc2626);
        }
        
        .alert-info {
          background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
        }
        
        .alert-content {
          display: flex;
          align-items: center;
          gap: var(--space-4);
        }
        
        .alert-icon {
          font-size: var(--font-size-xl);
          flex-shrink: 0;
        }
        
        .alert-text {
          flex: 1;
        }
        
        .alert-title {
          font-size: var(--font-size-base);
          font-weight: 600;
          margin-bottom: var(--space-1);
        }
        
        .alert-message {
          font-size: var(--font-size-sm);
          opacity: 0.9;
          margin: 0;
        }
        
        .alert-close {
          background: none;
          border: none;
          color: white;
          font-size: var(--font-size-lg);
          cursor: pointer;
          padding: var(--space-2);
          border-radius: var(--radius-base);
          transition: background-color var(--transition-fast);
        }
        
        .alert-close:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}