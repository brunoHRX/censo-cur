import React, { createContext, useContext, useState } from "react";

interface FormData {
  // Estrutura dos seus dados de formulário
  [key: string]: any;
}

interface FormDataContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  submitAllForms: () => void; // Certifique-se de incluir esta linha
}

const FormDataContext = createContext<FormDataContextType | undefined>(undefined);

export const useFormDataContext = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormDataContext must be used within a FormDataProvider');
  }
  return context;
};

export const FormDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({});

  const submitAllForms = () => {
    // Implemente a lógica para enviar os dados de todos os formulários aqui
    console.log(formData);
  };

  return (
    <FormDataContext.Provider value={{ formData, setFormData, submitAllForms }}>
      {children}
    </FormDataContext.Provider>
  );
};