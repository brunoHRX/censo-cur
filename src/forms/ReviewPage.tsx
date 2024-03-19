import { useState, useEffect, ChangeEvent } from 'react';
import { useFormContext } from "@/contexts/FormContext";
import { useFormDataContext } from '@/contexts/DataFormContext';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from '@/components/ui/separator';

interface FormData {
  [key: string]: string | number | boolean;
}

interface EditMode {
  [key: string]: boolean;
}

export default function ReviewPage() {
  const { onFormChange } = useFormContext();
  const { formData, setFormData, submitAllForms } = useFormDataContext();
  const [editMode, setEditMode] = useState<EditMode>({});
  const [tempFormData, setTempFormData] = useState<FormData>({}); // Temporário para edição

  useEffect(() => {
    setTempFormData(formData); // Inicializa com os dados atuais
    const newEditMode = Object.keys(formData).reduce((acc: EditMode, key: string) => {
      acc[key] = false;
      return acc;
    }, {});
    setEditMode(newEditMode);
  }, [formData]);

  const handleEdit = (key: string) => {
    setEditMode({ ...editMode, [key]: true });
  };

  const handleChange = (key: string, event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setTempFormData({ ...tempFormData, [key]: value });
  };

  const handleSave = (key: string) => {
    setFormData(tempFormData);
    setEditMode({ ...editMode, [key]: false });
  };

  const handleSubmit = async () => {
    // Adiciona o campo especial para a data e hora atual ao formData
    const modifiedFormData = {
      ...formData,
      stamp: "x-sheetmonkey-current-date-time", // Isso será convertido pela Sheet Monkey
    };
  
    const url = "https://api.sheetmonkey.io/form/4MxGDYi5WGkEQixcYGKthU";
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Adicione aqui outros headers necessários
        },
        body: JSON.stringify(modifiedFormData), // Usa o formData modificado
      });
  
      if (response.ok) {
        // Sucesso
        console.log("Dados enviados com sucesso.");
        submitAllForms();
        onFormChange('SuccesPage'); // Supondo que essa função lidará com a lógica pós-envio
      } else {
        // Tratamento de respostas não bem-sucedidas
        console.error("Falha ao enviar dados.");
      }
    } catch (error) {
      // Tratamento de erro de rede ou de envio
      console.error("Erro ao enviar o formulário:", error);
    }
  };
  

  return (
    <div>
      <CardHeader>
        <CardTitle className='font-bold text-2xl text-center'>REVISÃO DE INFORMAÇÕES</CardTitle>
      </CardHeader>
      <div>
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between m-2 border-spacing-1 gap-2">
            <strong>{key}:</strong>
            {editMode[key] ? (
              <>
                <Input
                  type="text"
                  className='text-background'
                  value={String(tempFormData[key])}
                  onChange={(e) => handleChange(key, e)}
                />
                <Button onClick={() => handleSave(key)}>Salvar</Button>
              </>
            ) : (
              <>
                <span>{JSON.stringify(value)}</span>
                <Button className='bg-secondary' onClick={() => handleEdit(key)}>Editar</Button>
              </>
            )}
          </div>
        ))}
        <Separator />
      </div>
      <div className='pt-4 flex justify-end'>
        <Button type='button' className='w-40 space'onClick={handleSubmit}>
          Enviar
        </Button>
      </div>
    </div>
  );
}
