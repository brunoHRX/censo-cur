import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useFormContext } from "@/contexts/FormContext";
import { useFormDataContext } from '@/contexts/DataFormContext';

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

import {
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from '@/components/ui/separator';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

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
import { useState } from 'react';


const formSchema = z.object({
  fichas_ad_aguarda_CR: z.string({
    required_error: "É obrigatório informar um valor.",
  }),
  fichas_ad_amarela: z.string({
    required_error: "É obrigatório informar um valor.",
  }),
  fichas_ad_verde: z.string({
    required_error: "É obrigatório informar um valor.",
  }),
  fichas_ad_azul: z.string({
    required_error: "É obrigatório informar um valor.",
  }),
  fichas_ad_fastrack: z.string({
    required_error: "É obrigatório informar um valor.",
  }),
  espera_ad_amarela: z.string({
    required_error: "Selecione uma Opção!",
  }),
  espera_ad_verde: z.string({
    required_error: "Selecione uma Opção!",
  }),
  espera_ad_azul: z.string({
    required_error: "Selecione uma Opção!",
  }),
  hasPediatric: z.boolean({
    required_error: "É obrigatório selecionar uma opção.",
  }),
  fichas_inf_aguarda_CR: z.string({
    required_error: "É obrigatório informar um valor.",
  }),
  fichas_inf_amarela: z.string({
    required_error: "É obrigatório informar um valor.",
  }),
  fichas_inf_verde: z.string({
    required_error: "É obrigatório informar um valor.",
  }),
  fichas_inf_azul: z.string({
    required_error: "É obrigatório informar um valor.",
  }),
  fichas_inf_fastrack: z.string({
    required_error: "É obrigatório informar um valor.",
  }),
  espera_inf_amarela: z.string({
    required_error: "Selecione uma Opção!",
  }),
  espera_inf_verde: z.string({
    required_error: "Selecione uma Opção!",
  }),
  espera_inf_azul: z.string({
    required_error: "Selecione uma Opção!",
  }),
});




export default function Classification() {

  const [pediatric, setPediatric] = useState(false)
  const { goBack } = useFormContext();
  const { onFormChange } = useFormContext();
  const { setFormData } = useFormDataContext();

  const hasPediatric = () => {
    setPediatric(setPediatric => !setPediatric)
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fichas_ad_aguarda_CR: '0',
      fichas_ad_amarela: '0',
      fichas_ad_verde: '0',
      fichas_ad_azul: '0',
      fichas_ad_fastrack: '0',
      espera_ad_amarela: '0',
      espera_ad_verde: '0',
      espera_ad_azul: '0',
      hasPediatric: false,
      fichas_inf_aguarda_CR: '0',
      fichas_inf_amarela: '0',
      fichas_inf_verde: '0',
      fichas_inf_azul: '0',
      fichas_inf_fastrack: '0',
      espera_inf_amarela: '0',
      espera_inf_verde: '0',
      espera_inf_azul: '0',
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
          <CardTitle className='text-xl text-center'>ADULTO - FICHAS</CardTitle>
          <Separator />
          <FormField
            control={form.control}
            name="fichas_ad_aguarda_CR"
            render={
              ({field}) => {
                return <FormItem>
                  <FormLabel>Quantas Fichas Aguardam Classificação de Risco?</FormLabel>
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
            name="fichas_ad_amarela"
            render={
              ({field}) => {
                return <FormItem>
                  <FormLabel>Quantas Fichas são AMARELAS?</FormLabel>
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
            name="fichas_ad_verde"
            render={
              ({field}) => {
                return <FormItem>
                  <FormLabel>Quantas Fichas são VERDES?</FormLabel>
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
            name="fichas_ad_azul"
            render={
              ({field}) => {
                return <FormItem>
                  <FormLabel>Quantas Fichas são AZUIS?</FormLabel>
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
            name="fichas_ad_fastrack"
            render={
              ({field}) => {
                return <FormItem>
                  <FormLabel>Quantas Fichas são elegiveis para FAST-TRACK?</FormLabel>
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
          <CardTitle className='text-xl text-center pt-2'>ADULTO - MAIOR ESPERA</CardTitle>
          <Separator />
          <div className="esperaAdulto grid grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="espera_ad_amarela"
              render={
                ({field}) => {
                  return <FormItem>
                    <FormLabel>AMARELA</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Escolha uma Unidaded" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value='0'>{0}</SelectItem>
                          <SelectItem value='<30m'>{'<30m'}</SelectItem>
                          <SelectItem value='<1h'>{'<1h'}</SelectItem>
                          <SelectItem value='<2h'>{'<2h'}</SelectItem>
                          <SelectItem value='<3h'>{'<3h'}</SelectItem>
                          <SelectItem value='4h+'>{'4h+'}</SelectItem>

                        </SelectContent>
                      </Select>
                    <FormMessage/>
                  </FormItem>
                }
              }
            />
          <FormField
              control={form.control}
              name="espera_ad_verde"
              render={
                ({field}) => {
                  return <FormItem>
                    <FormLabel>VERDE</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Escolha uma Unidaded" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value='0'>{0}</SelectItem>
                          <SelectItem value='<30m'>{'<30m'}</SelectItem>
                          <SelectItem value='<1h'>{'<1h'}</SelectItem>
                          <SelectItem value='<2h'>{'<2h'}</SelectItem>
                          <SelectItem value='<3h'>{'<3h'}</SelectItem>
                          <SelectItem value='4h+'>{'4h+'}</SelectItem>

                        </SelectContent>
                      </Select>
                    <FormMessage/>
                  </FormItem>
                }
              }
            />
          <FormField
              control={form.control}
              name="espera_ad_azul"
              render={
                ({field}) => {
                  return <FormItem>
                    <FormLabel>AZUL</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Escolha uma Unidaded" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value='0'>{0}</SelectItem>
                          <SelectItem value='<30m'>{'<30m'}</SelectItem>
                          <SelectItem value='<1h'>{'<1h'}</SelectItem>
                          <SelectItem value='<2h'>{'<2h'}</SelectItem>
                          <SelectItem value='<3h'>{'<3h'}</SelectItem>
                          <SelectItem value='4h+'>{'4h+'}</SelectItem>

                        </SelectContent>
                      </Select>
                    <FormMessage/>
                  </FormItem>
                }
              }
            />
          </div>
          <Separator />
          <FormField
            control={form.control}
            name="hasPediatric"
            render={
              ({field}) => {
                return <FormItem className='flex flex-row items-center justify-between rounded-lg pt-4'>
                  <div className="space-y-0.5" >
                    <FormLabel>Possui Atendimento Ifantil?</FormLabel>
                    <FormDescription>
                      (Caso não possua, deixar desativado)
                    </FormDescription>
                  </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={(checked) => {
                          field.onChange(checked);
                          hasPediatric();
                        }}
                      />
                    </FormControl>
                  <FormMessage/>
                </FormItem>
              }
            }
          />

          {pediatric && (
            <div className='hasPediatric'>
              <CardTitle className='text-xl text-center'>INFANTIL - FICHAS</CardTitle>
              <Separator />
              <FormField
                control={form.control}
                name="fichas_inf_aguarda_CR"
                render={
                  ({field}) => {
                    return <FormItem>
                      <FormLabel>Quantas Fichas Aguardam Classificação de Risco?</FormLabel>
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
                name="fichas_inf_amarela"
                render={
                  ({field}) => {
                    return <FormItem>
                      <FormLabel>Quantas Fichas são AMARELAS?</FormLabel>
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
                name="fichas_inf_verde"
                render={
                  ({field}) => {
                    return <FormItem>
                      <FormLabel>Quantas Fichas são VERDES?</FormLabel>
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
                name="fichas_inf_azul"
                render={
                  ({field}) => {
                    return <FormItem>
                      <FormLabel>Quantas Fichas são AZUIS?</FormLabel>
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
                name="fichas_inf_fastrack"
                render={
                  ({field}) => {
                    return <FormItem>
                      <FormLabel>Quantas Fichas são elegiveis para FAST-TRACK?</FormLabel>
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
              <CardTitle className='text-xl text-center pt-2'>INFANTIL - MAIOR ESPERA</CardTitle>
              <Separator />
              <div className="esperaInfantil grid grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="espera_inf_amarela"
                  render={
                    ({field}) => {
                      return <FormItem>
                        <FormLabel>AMARELA</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Escolha uma Unidaded" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value='0'>{0}</SelectItem>
                              <SelectItem value='<30m'>{'<30m'}</SelectItem>
                              <SelectItem value='<1h'>{'<1h'}</SelectItem>
                              <SelectItem value='<2h'>{'<2h'}</SelectItem>
                              <SelectItem value='<3h'>{'<3h'}</SelectItem>
                              <SelectItem value='4h+'>{'4h+'}</SelectItem>
    
                            </SelectContent>
                          </Select>
                        <FormMessage/>
                      </FormItem>
                    }
                  }
                />
              <FormField
                  control={form.control}
                  name="espera_inf_verde"
                  render={
                    ({field}) => {
                      return <FormItem>
                        <FormLabel>VERDE</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Escolha uma Unidaded" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value='0'>{0}</SelectItem>
                              <SelectItem value='<30m'>{'<30m'}</SelectItem>
                              <SelectItem value='<1h'>{'<1h'}</SelectItem>
                              <SelectItem value='<2h'>{'<2h'}</SelectItem>
                              <SelectItem value='<3h'>{'<3h'}</SelectItem>
                              <SelectItem value='4h+'>{'4h+'}</SelectItem>
    
                            </SelectContent>
                          </Select>
                        <FormMessage/>
                      </FormItem>
                    }
                  }
                />
              <FormField
                  control={form.control}
                  name="espera_inf_azul"
                  render={
                    ({field}) => {
                      return <FormItem>
                        <FormLabel>AZUL</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Escolha uma Unidaded" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value='0'>{0}</SelectItem>
                              <SelectItem value='<30m'>{'<30m'}</SelectItem>
                              <SelectItem value='<1h'>{'<1h'}</SelectItem>
                              <SelectItem value='<2h'>{'<2h'}</SelectItem>
                              <SelectItem value='<3h'>{'<3h'}</SelectItem>
                              <SelectItem value='4h+'>{'4h+'}</SelectItem>
    
                            </SelectContent>
                          </Select>
                        <FormMessage/>
                      </FormItem>
                    }
                  }
                />
              </div>
            </div>
          )}
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
