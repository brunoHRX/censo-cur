import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useFormContext } from "@/contexts/FormContext";
import { useFormDataContext } from '@/contexts/DataFormContext';

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from '@/components/ui/separator';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from 'react-hook-form';


const formSchema = z.object({
  clinicoPrev: z.string({
    required_error: "É obrigatório informar um valor.",
  }),
  clinicoReal: z.string({
    required_error: "É obrigatório informar um valor.",
  }),
  infantilPrev: z.string({
    required_error: "É obrigatório informar um valor.",
  }),
  infantilReal: z.string({
    required_error: "É obrigatório informar um valor.",
  }),
});




export default function TeamForm() {
  const { onFormChange } = useFormContext();
  const { goBack } = useFormContext();
  const { setFormData } = useFormDataContext();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clinicoPrev: '0',
      clinicoReal: '0',
      infantilPrev: '0',
      infantilReal: '0',
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
          <CardTitle className='text-xl text-center'>MÉDICOS - ATENDIMENTO CLINICO</CardTitle>
          <Separator />
          <div className="Clinicos grid grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="clinicoPrev"
              render={
                ({field}) => {
                  return <FormItem>
                    <FormLabel>Previstos?</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Informe um número inteiro de 0 até 9'  
                        type='number'
                        className='text-cur-dark'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                }
              }
            />

            <FormField
              control={form.control}
              name="clinicoReal"
              render={
                ({field}) => {
                  return <FormItem>
                    <FormLabel>Real?</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Informe um número inteiro de 0 até 9'  
                        type='number'
                        className='text-cur-dark'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                }
              }
            />
          </div>
          <FormDescription>
            (Resposta deve ser em numeros inteiros de 0 até 9)
          </FormDescription>
          <CardTitle className='text-xl text-center'>MÉDICOS - ATENDIMENTO INFANTIL</CardTitle>
          <Separator />
          <div className="INFANTIL grid grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="infantilPrev"
              render={
                ({field}) => {
                  return <FormItem>
                    <FormLabel>Previstos?</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Informe um número inteiro de 0 até 9'  
                        type='number'
                        className='text-cur-dark'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                }
              }
            />

            <FormField
              control={form.control}
              name="infantilReal"
              render={
                ({field}) => {
                  return <FormItem>
                    <FormLabel>Real?</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Informe um número inteiro de 0 até 9'  
                        type='number'
                        className='text-cur-dark'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                }
              }
            />
          </div>
          <FormDescription>
            (Resposta deve ser em numeros inteiros de 0 até 9)
          </FormDescription>
        
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
