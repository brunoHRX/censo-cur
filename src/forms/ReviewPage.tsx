import { useFormDataContext } from "@/contexts/DataFormContext";


import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ReviewPage() {

  const {formData, submitAllForms} = useFormDataContext();

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
      <Button onClick={handleSubmit}>
        Confirmar e Enviar!
      </Button>
    </div>
  )

}