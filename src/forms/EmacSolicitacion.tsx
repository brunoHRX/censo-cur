import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

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
  }),
});




export default function EMAC() {


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      actionCause: '',
      bigMotive: '',
    }
  })


  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({values});
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
          <Button type="submit" className='w-full'>
            Próximo
          </Button>
        </form>
      </Form>
    </main>
  );

};
