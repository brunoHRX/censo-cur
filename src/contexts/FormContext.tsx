import { createContext, useContext } from "react";

interface FormContextType {
  onFormChange: (formName: string) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
}

export const FormProvider: React.FC<{children: React.ReactNode, onFormChange: (formName: string) => void}> = ({ children, onFormChange }) => {
  return <FormContext.Provider value={{ onFormChange }}>{children}</FormContext.Provider>;
};