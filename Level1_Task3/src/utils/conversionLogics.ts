// src/utils/conversionLogics.ts

export type TempUnit = 'Celsius' | 'Fahrenheit' | 'Kelvin';

export interface ConversionResult {
  celsius: string;
  fahrenheit: string;
  kelvin: string;
}

export const convertTemperature = (value: number, fromUnit: TempUnit): ConversionResult => {
  let c = 0;
  let f = 0;
  let k = 0;

  switch (fromUnit) {
    case 'Celsius':
      c = value;
      f = (value * 9) / 5 + 32;
      k = value + 273.15;
      break;
    case 'Fahrenheit':
      c = ((value - 32) * 5) / 9;
      f = value;
      k = c + 273.15;
      break;
    case 'Kelvin':
      c = value - 273.15;
      f = (c * 9) / 5 + 32;
      k = value;
      break;
  }

  const format = (num: number) => Number(num.toFixed(2)).toString();

  return {
    celsius: format(c),
    fahrenheit: format(f),
    kelvin: format(k),
  };
};