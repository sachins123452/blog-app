import React, { useContext, createContext, useState } from 'react';
import { useTheme } from 'components/Theme/ThemeProvider';
const SalesInvoice = createContext();

export const SalesInvoiceStateProvider = ({ children }) => {
  const [isOpen,setIsOpen] = useState(false)

    const { currentTheme } = useTheme();

  return (
    <SalesInvoice.Provider
      value={{
        currentTheme,
        isOpen,
        setIsOpen
      }}
    >
      {children}
    </SalesInvoice.Provider>
  );
};

export const useInvoiceState = () => {
  const context = useContext(SalesInvoice);
  if (!context) {
    throw new Error('useInvoiceState must be used within a useInvoiceState');
  }
  return context;
};
