import { useState, useEffect } from 'react';
import { useFormContext } from "@/contexts/FormContext";
import { useFormDataContext } from '@/contexts/DataFormContext';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
interface FormData {
  [key: string]: string | number | boolean;
}

interface EditMode {
  [key: string]: boolean;
}
interface Option {
  value: string;
  label: string;
}

function getCurrentDateTimeForTimeZone(timeZone = 'America/Sao_Paulo') {
  // Cria um objeto Date representando o momento atual
  const now = new Date();

  // Subtrai uma hora (3600000 milissegundos) do objeto Date
  const oneHourEarlier = new Date(now.getTime() - 3600000);

  // Retorna a data formatada, representando uma hora a menos
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: timeZone
  }).format(oneHourEarlier);
}

export default function ReviewPage() {
  const { onFormChange } = useFormContext();
  const { formData, setFormData, submitAllForms } = useFormDataContext();
  const [editMode, setEditMode] = useState<EditMode>({});
  const [tempFormData, setTempFormData] = useState<FormData>({}); // Temporário para edição
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectOptions: { [key: string]: Option[]} = { 
    espera_ad_amarela: [
      { value: '0', label: '0' },
      { value: '<30m', label: '<30m', },
      { value: '<1h', label: '<1h' },
      { value: '<2h', label: '<2h' },
      { value: '<3h', label: '<3h' },
      { value: '4h+', label: '4h+' },
    ],
    espera_ad_verde: [
      { value: '0', label: '0' },
      { value: '<30m', label: '<30m', },
      { value: '<1h', label: '<1h' },
      { value: '<2h', label: '<2h' },
      { value: '<3h', label: '<3h' },
      { value: '4h+', label: '4h+' },
    ],
    espera_ad_azul: [
      { value: '0', label: '0' },
      { value: '<30m', label: '<30m', },
      { value: '<1h', label: '<1h' },
      { value: '<2h', label: '<2h' },
      { value: '<3h', label: '<3h' },
      { value: '4h+', label: '4h+' },
    ],
    espera_inf_amarela: [
      { value: '0', label: '0' },
      { value: '<30m', label: '<30m', },
      { value: '<1h', label: '<1h' },
      { value: '<2h', label: '<2h' },
      { value: '<3h', label: '<3h' },
      { value: '4h+', label: '4h+' },
    ],
    espera_inf_verde: [
      { value: '0', label: '0' },
      { value: '<30m', label: '<30m', },
      { value: '<1h', label: '<1h' },
      { value: '<2h', label: '<2h' },
      { value: '<3h', label: '<3h' },
      { value: '4h+', label: '4h+' },
    ],
    espera_inf_azul: [
      { value: '0', label: '0' },
      { value: '<30m', label: '<30m', },
      { value: '<1h', label: '<1h' },
      { value: '<2h', label: '<2h' },
      { value: '<3h', label: '<3h' },
      { value: '4h+', label: '4h+' },
    ],
  };

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

  const handleChange = (key: string, value: string | boolean ) => {
    setTempFormData({ ...tempFormData, [key]: value });
  };

  const handleSave = (key: string) => {
    setFormData(tempFormData);
    setEditMode({ ...editMode, [key]: false });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Adiciona o campo especial para a data e hora atual ao formData
    const modifiedFormData = {
      ...formData,
      stamp: getCurrentDateTimeForTimeZone(),
    };
  
    // const url = INSIRA A URL DA PLANILHA DO GOOGLE PUBLICA PARA USAR DE BANCO E REGISTRO DAS INFORMAÇÕES;
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Adicione aqui outros headers necessários
        },
        body: JSON.stringify(modifiedFormData),
        mode: 'no-cors', // Usa o formData modificado
      });
  
      if (response) {
        // Sucesso
        console.log("Dados enviados com sucesso.");
        setFormData({});
        setTempFormData({});
        submitAllForms();
        onFormChange('SuccesPage'); // Supondo que essa função lidará com a lógica pós-envio
      } else {
        // Tratamento de respostas não bem-sucedidas
        console.error("Falha ao enviar dados.");
      }
    } catch (error) {
      // Tratamento de erro de rede ou de envio
      console.error("Erro ao enviar o formulário:", error);
    } finally {
      setIsSubmitting(false);
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
                {key in selectOptions ? (
                  <Select
                    value={String(tempFormData[key])}
                    onValueChange={(value) => handleChange(key, value)}
                  >
                    <SelectTrigger className='w-[180px]'>
                      <SelectValue placeholder=' Selecione um Valor '/>
                    </SelectTrigger>
                    <SelectContent>
                      {selectOptions[key].map((option: Option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </SelectItem>

                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <Input
                    type="text"
                    className='text-background'
                    value={String(tempFormData[key])}
                    onChange={(e) => handleChange(key, e.target.value)}
                  />
                )}
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
        <Button type='button' className='w-full space'onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </Button>
      </div>
    </div>
  );
}
