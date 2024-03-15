// import React, { useState } from 'react';
import { z } from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { useFormContext } from "@/contexts/FormContext";
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"


const formSchema = z.object({
  name: z.string().min(2, { message: "Nome do responsável é obrigatório" }),
  location: z.string().min(2, { message: "A unidade referente é obrigatória" }),
  phone: z.string().min(2, { message: "Telefone é obrigatório" }).regex(/^\+?[1-9]\d{1,14}$/, { message: "Telefone inválido" }), // Regex simples para validação de telefone internacional
  job: z.string().min(2, { message: "Cargo ou função é obrigatório" }),
  censo: z.string({required_error: "Selecione um Censo para enviar!"})
})



export default function InicialForm( ) {

  const { onFormChange } = useFormContext();


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      location: "",
      phone: "",
      job: ""
    }
  });


  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values});
    // Aqui você pode redirecionar o usuário para o formulário específico do censo selecionado
    // e passar as informações usando o contexto do React, Redux ou outra ferramenta de estado.
  };

  return (
    <main className='flex max-h-screen flex-col items-center justify-between p-2'>
      <CardHeader>
        <CardTitle className='font-bold text-xl'>DADOS DE IDENTIFICAÇÃO</CardTitle>
        <CardDescription>
          Este Censo destina-se a informar a situação da Unidade ao Coordenador de Urgências.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='max-w-md w-full flex flex-col gap-4'>
          <FormField
            control={form.control}
            name="name"
            render={
              ({field}) => {
                return <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Informe seu nome'  
                      type='name'
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
            name="location"
            render={
              ({field}) => {
                return <FormItem>
                  <FormLabel>Qual a sua Unidade de Saúde?</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Qual a sua unidade?' 
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
            name="phone"
            render={
              ({field}) => {
                return <FormItem>
                  <FormLabel>Celular para Referência (ex: 67991399445)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Informe seu nome' 
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
            name="job"
            render={
              ({field}) => {
                return <FormItem>
                  <FormLabel>Cargo ou Função (ex: Enfermeira - Administrativo - Gerente)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Informe sua Função ou Cargo' 
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
            name="censo"
            render={
              ({field}) => {
                return <FormItem>
                  <FormLabel>Qual Censo deseja Enviar?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Escolha qual Censo enviar" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='padrao'>Censo Padrão</SelectItem>
                        <SelectItem value='fichas'>Censo de Classificação</SelectItem>
                        <SelectItem value='equipe'>Censo de Equipe</SelectItem>
                        <SelectItem value='EquipmentForm'>Censo de Equipamentos</SelectItem>
                        <SelectItem value='pacientes'>Censo Pacientes</SelectItem>
                        <SelectItem value='emac'>Solicitação da EMAC</SelectItem>
                      </SelectContent>
                    </Select>
                  <FormMessage/>
                </FormItem>
              }
            }
          />
          
          <Button type="submit" className='w-full' onClick={() => onFormChange('EquipmentForm')}>
            Próximo
          </Button>
        </form>
      </Form>
    </main>
  );
};

