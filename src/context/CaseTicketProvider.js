import React, { useContext, createContext, useState, useEffect } from 'react';
import { useGetAllTicketQuery, useGetTicketTypesQuery } from 'store/services/TicketServices';
import { useCreateTicketMutation } from 'store/services/TicketServices';
import { useTheme } from 'components/Theme/ThemeProvider';

const CaseTicket = createContext();

export const CaseTicketStateProvider = ({ children }) => {
  const { currentTheme } = useTheme();
  const getTicketTypes = useGetTicketTypesQuery();
  const [createTicket] = useCreateTicketMutation();
  const { getAllTicket } = useGetAllTicketQuery();
  const [selectedTicketType, setSelectedTicketType] = useState(null);
  const [capturedImage, setCapturedImage] = React.useState([]);
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [getAllTicketData, setGetAllTicketData] = useState(null);

  console.log('useGetAllTicket::::::::>>>>>>>>>>>', getAllTicket);

  return (
    <CaseTicket.Provider
      value={{
        currentTheme,
        getTicketTypes,
        createTicket,
        selectedTicketType,
        setSelectedTicketType,
        capturedImage,
        setCapturedImage,
        options,
        setOptions,
        inputValue,
        setInputValue,
        getAllTicketData,
        setGetAllTicketData
      }}
    >
      {children}
    </CaseTicket.Provider>
  );
};

export const useCaseTicketState = () => {
  const context = useContext(CaseTicket);
  if (!context) {
    throw new Error('useCaseTicketState must be used within a useCaseTicketState');
  }
  return context;
};
