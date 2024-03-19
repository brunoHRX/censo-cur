import { useFormContext } from "@/contexts/FormContext";
import { useFormDataContext } from '@/contexts/DataFormContext';


import { Button } from "@/components/ui/button"

export default function ReviewPage() {

  const {formData, submitAllForms} = useFormDataContext();
  const { goBack } = useFormContext();

  const handleSubmit = () => {
    // implementar funções

    submitAllForms();
  };

  return (
    <div>
      <h2>Revisão de Informações</h2>
      {/* Mapear os dados para serem exibidos */}

      <div>
        {Object.entries(formData).map(([key, value]) => (
          <div key={key}>
            <strong>{key}:</strong> {JSON.stringify(value)}
          </div>
        ))}
      </div>
      <div className="buttons w-full flex justify-between pt-4">
        <Button type="button" onClick={goBack} className=' w-40'>
          Voltar
        </Button>
        <Button onClick={handleSubmit}>
          Confirmar e Enviar!
        </Button>
      </div>
    </div>
  )

}