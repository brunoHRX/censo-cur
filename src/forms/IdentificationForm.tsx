// import React, { useState } from 'react';
import { z } from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { useFormContext } from "@/contexts/FormContext";
import { useFormDataContext } from '@/contexts/DataFormContext';
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"


const formSchema = z.object({
  name: z.string().min(2, { message: "Nome do responsável é obrigatório" }).toUpperCase(),
  location: z.string({required_error: "Selecione uma Unidade"}),
  phone: z.string().min(2, { message: "Telefone é obrigatório" }).regex(/^\+?[1-9]\d{1,14}$/, { message: "Telefone inválido" }), // Regex simples para validação de telefone internacional
  job: z.string().min(2, { message: "Cargo ou função é obrigatório" }),
  censo: z.string({required_error: "Selecione um Censo para enviar!"})
})



export default function InicialForm( ) {

  const { onFormChange } = useFormContext();
  const { setFormData } = useFormDataContext();
  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    }
  });


  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    setFormData(currentFormData => ({ ...currentFormData, ...values }))
    console.log({ setFormData});
    onFormChange(values.censo);
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
            name="phone"
            render={
              ({field}) => {
                return <FormItem>
                  <FormLabel>Celular para Referência</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Informe seu telefone' 
                      className='text-cur-dark' 
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Modelo de resposta - (ex: 67991399445)
                  </FormDescription>
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
                  <FormLabel>Cargo ou Função</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Escolha uma opção" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='Enfermeiro'>Enfermeiro(a)</SelectItem>
                        <SelectItem value='Gerente'>Gerente</SelectItem>
                        <SelectItem value='Administrativo'>Administrativo</SelectItem>
                      </SelectContent>
                    </Select>
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
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Escolha uma Unidade" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value='UPA ALMEIDA'>UPA VILA ALMEIDA</SelectItem>
                          <SelectItem value='UPA CORONEL'>UPA CORONEL ANTONINO</SelectItem>
                          <SelectItem value='UPA SANTA'>UPA SANTA MONICA</SelectItem>
                          <SelectItem value='UPA UNIVERSITARIO'>UPA UNIVERSITARIO</SelectItem>
                          <SelectItem value='UPA LEBLON'>UPA LEBLON</SelectItem>
                          <SelectItem value='UPA MORENINHAS'>UPA MORENINHAS</SelectItem>
                          <SelectItem value='CRS COOPHAVILA'>CRS COOPHAVILA</SelectItem>
                          <SelectItem value='CRS NOVA'>CRS NOVA BAHIA</SelectItem>
                          <SelectItem value='CRS TIRADENTES'>CRS TIRADENTES</SelectItem>
                          <SelectItem value='CRS AERO'>CRS AERO RANCHO</SelectItem>
  
                        </SelectContent>
                      </Select>
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
                        <SelectItem value='GeneralForm'>Censo Padrão</SelectItem>
                        <SelectItem value='Classification'>Censo de Classificação</SelectItem>
                        <SelectItem value='TeamForm'>Censo de Equipe</SelectItem>
                        <SelectItem value='EquipmentForm'>Censo de Equipamentos</SelectItem>
                        <SelectItem value='EMAC'>Solicitação da EMAC</SelectItem>
                      </SelectContent>
                    </Select>
                  <FormMessage/>
                </FormItem>
              }
            }
          />
          
          <Button type="submit" className='w-full' >
            Próximo
          </Button>
        </form>
      </Form>
    </main>
  );
};

