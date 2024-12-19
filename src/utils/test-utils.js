import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@/theme/ThemeProvider';

const AllProviders = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: AllProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };