import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


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
  monitors: z.number({
    required_error: "É obrigatório informar um valor.",
  }).min(0).max(9),
  hasAutoclave: z.boolean({
    required_error: "É obrigatório selecionar uma opção.",
  }),
});

// TypeScript interface for the form data, derived from the zod schema


export default function Classification() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      monitors: 0,
      hasAutoclave: false
    }
  })


  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values});
  };

  return (
    <main className='flex  flex-col items-center justify-between p-2'>
      <CardHeader>
        <CardTitle className='font-bold text-xl'>CENSOD E EQUIPAMENTOS</CardTitle>
        <CardDescription>
          Este Censo destina-se a informar a situação da Unidade ao Coordenador de Urgências.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='max-w-md w-full flex flex-col gap-4'>
          <FormField
            control={form.control}
            name="monitors"
            render={
              ({field}) => {
                return <FormItem>
                  <FormLabel>Quantos Monitores Multiparâmetro?</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Informe um número inteiro de 0 até 9'  
                      type='number'
                      className='text-cur-dark'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    (Resposta deve ser em numeros inteiros de 0 até 9)
                  </FormDescription>
                  <FormMessage/>
                </FormItem>
              }
            }
          />

          <FormField
            control={form.control}
            name="oximeters"
            render={
              ({field}) => {
                return <FormItem>
                  <FormLabel>Quantos Oximetros Portateis?</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Informe um número inteiro de 0 até 9'  
                      type='number'
                      className='text-cur-dark'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    (Resposta deve ser em numeros inteiros de 0 até 9)
                  </FormDescription>
                  <FormMessage/>
                </FormItem>
              }
            }
          />
          <Button type="submit" className='w-full'>
            Próximo
          </Button>
        </form>
      </Form>
    </main>
  );

};
