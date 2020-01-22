import React, { createContext } from 'react';
import { useHook, ContextValue } from './rootContext';

export interface DonutProps {
  id?: string;
  content: string;
  base?: 'black' | 'powdered';
  topping?: 'vanilla' | 'chocolate' | 'strawberry';
  drizzle?: 'sprinkles';
  filled?: boolean;
}

const donuts: DonutProps[] = [
  {
    content: `Vanilla Kreme`,
    topping: 'vanilla',
    filled: true
  },
  {
    content: `Chocolate Overload`,
    base: 'black',
    drizzle: 'sprinkles'
  },
  {
    base: 'powdered',
    content: `Vanilla Powder`,
    topping: 'vanilla'
  },
  {
    content: `Swirl`,
    base: 'powdered',
    topping: 'chocolate',
    drizzle: 'sprinkles'
  },
  {
    content: `Pink Donut`,
    topping: 'vanilla',
    drizzle: 'sprinkles'
  },
  {
    content: `Pink Donut`,
    topping: 'strawberry',
    drizzle: 'sprinkles'
  },
  {
    content: `Pink Donut`,
    topping: 'strawberry',
    drizzle: 'sprinkles'
  },
  {
    content: `Pink Donut`,
    topping: 'strawberry',
    drizzle: 'sprinkles'
  },
  {
    content: `Pink Donut`,
    topping: 'strawberry',
    drizzle: 'sprinkles'
  },
  {
    content: 'Pink Donut',
    topping: 'strawberry',
    drizzle: 'sprinkles'
  },
  {
    content: `Pink Donut`,
    topping: 'strawberry',
    drizzle: 'sprinkles'
  },
  {
    content: `Pink Donut`,
    topping: 'strawberry',
    drizzle: 'sprinkles',
    filled: true
  }
];
const DonutContext = createContext(null);

const useDonut = () => useHook<DonutProps[]>(DonutContext);

function DonutProvider(props: any) {
  // initial state
  const value = ContextValue<DonutProps[]>(donuts);
  return <DonutContext.Provider value={value} {...props} />;
}

export { DonutProvider, useDonut };
