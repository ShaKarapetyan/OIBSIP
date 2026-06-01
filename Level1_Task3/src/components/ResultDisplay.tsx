// src/components/ResultDisplay.tsx
import React, { useState, useEffect } from 'react';

interface ResultDisplayProps {
  celsius: string;
  fahrenheit: string;
  kelvin: string;
  currentUnit: string;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({
  celsius,
  fahrenheit,
  kelvin,
  currentUnit,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const stats = [
    { label: 'Celsius', value: celsius, unit: '°C', color: '#06b6d4', glow: 'rgba(6, 182, 212, 0.15)' },
    { label: 'Fahrenheit', value: fahrenheit, unit: '°F', color: '#f97316', glow: 'rgba(249, 115, 22, 0.15)' },
    { label: 'Kelvin', value: kelvin, unit: 'K', color: '#a855f7', glow: 'rgba(168, 85, 247, 0.15)' },
  ];

  const isMobile = windowWidth < 640;

  return (
    <div style={{ width: '100%', boxSizing: 'border-box' }}>
      <p style={{
        fontSize: '0.7rem',
        fontWeight: '700',
        color: '#64748b',
        marginBottom: '12px',
        textAlign: 'center',
        letterSpacing: '0.15em',
        margin: '0 0 12px 0'
      }}>
        ՓՈԽԱՐԿՄԱՆ ԱՐԴՅՈՒՆՔՆԵՐԸ
      </p>
      
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '12px' : '16px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {stats.map((item) => {
          const isCurrent = item.label === currentUnit;
          
          return (
            <div
              key={item.label}
              style={{
                flex: 1,
                backgroundColor: isCurrent ? 'rgba(30, 41, 59, 0.6)' : 'rgba(30, 41, 59, 0.2)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                padding: isMobile ? '16px' : '20px',
                borderRadius: '16px',
                border: `1px solid ${isCurrent ? item.color : 'rgba(255, 255, 255, 0.05)'}`,
                boxShadow: isCurrent ? `0 12px 20px -6px ${item.glow}` : 'none',
                boxSizing: 'border-box',
                transition: 'all 0.3s ease',
              }}
            >
              <p style={{
                margin: 0,
                fontSize: '0.65rem',
                fontWeight: '700',
                color: isCurrent ? item.color : '#64748b',
                letterSpacing: '0.08em'
              }}>
                {item.label.toUpperCase()}
              </p>
              
              <p style={{
                margin: '6px 0 0 0',
                fontSize: isMobile ? '1.7rem' : '1.6rem',
                fontWeight: '800',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'baseline',
                letterSpacing: '-0.02em'
              }}>
                {item.value}
                <span style={{ 
                  fontSize: '1rem', 
                  marginLeft: '4px', 
                  fontWeight: '500', 
                  color: item.color 
                }}>
                  {item.unit}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};