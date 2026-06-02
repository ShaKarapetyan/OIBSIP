// src/App.tsx
import { useState, useEffect } from 'react';
import { FaThermometerHalf } from 'react-icons/fa';
import { convertTemperature } from './utils/conversionLogics';
import type { TempUnit, ConversionResult } from './utils/conversionLogics';
import { ResultDisplay } from './components/ResultDisplay';

function App() {
  const [inputValue, setInputValue] = useState<string>('0');
  const [fromUnit, setFromUnit] = useState<TempUnit>('Celsius');
  const [results, setResults] = useState<ConversionResult>({
    celsius: '0',
    fahrenheit: '32',
    kelvin: '273.15',
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const numericValue = parseFloat(inputValue);
    if (isNaN(numericValue)) {
      setResults({ celsius: '-', fahrenheit: '-', kelvin: '-' });
      return;
    }
    const converted = convertTemperature(numericValue, fromUnit);
    setResults(converted);
  }, [inputValue, fromUnit]);

  const isMobile = windowWidth < 640;

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      background: 'radial-gradient(circle at top right, #0f172a 0%, #020617 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '"Inter", "Segoe UI", sans-serif',
      padding: isMobile ? '12px' : '24px',
      boxSizing: 'border-box',
      overflow: 'hidden' 
    }}>
      <div style={{
        width: '100%',
        maxWidth: '640px',
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '16px' : '24px',
        boxSizing: 'border-box'
      }}>
        
      
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontSize: isMobile ? '1.6rem' : '2.4rem',
            fontWeight: '900',
            color: '#f8fafc',
            margin: '0 0 6px 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            letterSpacing: '-0.02em'
          }}>
            <FaThermometerHalf style={{ color: '#38bdf8' }} /> Temperature
          </h1>
          <p style={{ color: '#94a3b8', fontSize: isMobile ? '0.8rem' : '0.95rem', fontWeight: '400', margin: 0 }}>
            Modern, Fast, and Responsive Temperature Converter
          </p>
        </div>

        <div style={{
          backgroundColor: 'rgba(30, 41, 59, 0.4)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          padding: isMobile ? '20px' : '32px',
          borderRadius: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxSizing: 'border-box'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '16px' : '20px'
          }}>
            <div style={{ flex: 1 }}>
              <label style={{
                display: 'block',
                fontWeight: '600',
                marginBottom: '8px',
                color: '#94a3b8',
                fontSize: '0.7rem',
                letterSpacing: '0.1em'
              }}>
                Enter Value
              </label>
              <input
                type="number"
                placeholder="0"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{
                  width: '100%',
                  height: '48px',
                  padding: '0 16px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  backgroundColor: 'rgba(15, 23, 42, 0.6)',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'all 0.2s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#38bdf8';
                  e.target.style.boxShadow = '0 0 0 3px rgba(56, 189, 248, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={{ flex: 1 }}>
              <label style={{
                display: 'block',
                fontWeight: '600',
                marginBottom: '8px',
                color: '#94a3b8',
                fontSize: '0.7rem',
                letterSpacing: '0.1em'
              }}>
                Output Unit
              </label>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value as TempUnit)}
                style={{
                  width: '100%',
                  height: '48px',
                  padding: '0 16px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  backgroundColor: 'rgba(15, 23, 42, 0.6)',
                  cursor: 'pointer',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              >
                <option value="Celsius" style={{background: '#0f172a'}}>Celsius (°C)</option>
                <option value="Fahrenheit" style={{background: '#0f172a'}}>Fahrenheit (°F)</option>
                <option value="Kelvin" style={{background: '#0f172a'}}>Kelvin (K)</option>
              </select>
            </div>
          </div>
        </div>

        <ResultDisplay
          celsius={results.celsius}
          fahrenheit={results.fahrenheit}
          kelvin={results.kelvin}
          currentUnit={fromUnit}
        />

      </div>
    </div>
  );
}

export default App;
