import React, { createContext, useState, useContext, ReactNode } from 'react';

interface FormContextType {
  activeForm: string;
  onFormChange: (formName: string) => void;
  goBack: () => void; // Adicione a assinatura da função goBack
}

const FormContext = createContext<FormContextType | undefined>(undefined);

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [activeForm, setActiveForm] = useState<string>('InicialForm');
  const [formHistory, setFormHistory] = useState<string[]>(['InicialForm']); // Estado para armazenar o histórico

  const onFormChange = (formName: string) => {
    setFormHistory(currentHistory => [...currentHistory, formName]); // Atualiza o histórico
    setActiveForm(formName);
  };

  const goBack = () => {
    setFormHistory(currentHistory => {
      const newHistory = currentHistory.slice(0, -1);
      const previousForm = newHistory.length > 0 ? newHistory[newHistory.length - 1] : 'InicialForm';
      setActiveForm(previousForm);
      return newHistory;
    });
  };

  return (
    <FormContext.Provider value={{ activeForm, onFormChange, goBack }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
