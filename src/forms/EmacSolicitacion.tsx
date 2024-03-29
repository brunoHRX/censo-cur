import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormContext } from "@/contexts/FormContext";
import { useFormDataContext } from '@/contexts/DataFormContext';

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"


import {
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"


import { Separator } from '@/components/ui/separator';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from 'react-hook-form';


const formSchema = z.object({
  actionCause: z.string({
    required_error: "É obrigatório informar um valor.",
  }),
  bigMotive: z.string({
    required_error: "É obrigatório informar uma resposta.",
  }).toUpperCase(),
});




export default function EMAC() {
  const { onFormChange } = useFormContext();
  const { goBack } = useFormContext();
  const { setFormData } = useFormDataContext();


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      actionCause: '',
      bigMotive: '',
    }
  })


  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    setFormData(formData => {
      const updateFormData = {...formData, ...values}
      return updateFormData;
    })
    console.log({ setFormData});
    onFormChange('ReviewPage');
  };

  return (
    <main className='flex  flex-col items-center justify-between p-2'>
      <CardHeader>
        <CardTitle className='font-bold text-2xl text-center'>CENSO DE CLASSIFICAÇÃO</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='max-w-md w-full flex flex-col gap-4'>
          <CardTitle className='text-xl text-center'>SOLICITAÇÃO DA EMAC</CardTitle>
          <Separator />
          <FormField
            control={form.control}
            name="actionCause"
            render={
              ({field}) => {
                return <FormItem>
                  <FormLabel>Qual o Motivo do Acionamento?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Escolha um motivo!" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='Escala previamente incompleta'>ESCALA PREVIAMENTE INCOMPLETA</SelectItem>
                        <SelectItem value='Falta/atraso'>FALTA OU ATRASO MÉDICO</SelectItem>
                        <SelectItem value='Alta demanda'>DEMANDA ACIMA DA CAPACIDADE</SelectItem>
                        <SelectItem value='Acumulo'>ACUMULO DO PLANTÃO ANTERIOR</SelectItem>
                      </SelectContent>
                    </Select>
                  <FormMessage/>
                </FormItem>
              }
            }
          />
            <FormField
              control={form.control}
              name="bigMotive"
              render={
                ({field}) => {
                  return <FormItem>
                    <FormLabel>Descreva o Motivo?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Descreva o Motivo informando o maximo de relações possíveis'  
                        className='text-cur-dark resize-none'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                }
              }
            />
          <div className="buttons w-full flex justify-between pt-4">
            <Button type="button" onClick={goBack} className=' w-40'>
              Voltar
            </Button>
            <Button type="submit" className='w-40'>
              Próximo
            </Button>
          </div>
        </form>
      </Form>
    </main>
  );

};
