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
  monitors: z.string({
    required_error: "É obrigatório informar um valor.",
  }).regex(/^[0-9]+$/, "O valor deve conter apenas dígitos de 0 a 9"),
  oximeters: z.string({
    required_error: "É obrigatório informar um valor.",
  }).regex(/^[0-9]+$/, "O valor deve conter apenas dígitos de 0 a 9"),
  defibrillators: z.string({
    required_error: "É obrigatório informar um valor.",
  }).regex(/^[0-9]+$/, "O valor deve conter apenas dígitos de 0 a 9"),
  ecgs: z.string({
    required_error: "É obrigatório informar um valor.",
  }).regex(/^[0-9]+$/, "O valor deve conter apenas dígitos de 0 a 9"),
  telecardios: z.string({
    required_error: "É obrigatório informar um valor.",
  }).regex(/^[0-9]+$/, "O valor deve conter apenas dígitos de 0 a 9"),
  fetalMonitors: z.string({
    required_error: "É obrigatório informar um valor.",
  }).regex(/^[0-9]+$/, "A string deve conter apenas dígitos de 0 a 9"),
  hasXRay: z.boolean({
    required_error: "É obrigatório selecionar uma opção.",
  }),
  hasAutoclave: z.boolean({
    required_error: "É obrigatório selecionar uma opção.",
  }),
});




export default function GeneralForm() {

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
      clinicoPrev: '',
      clinicoReal: '',
      infantilPrev: '',
      infantilReal: '',
      fichas_ad_aguarda_CR: '',
      fichas_ad_amarela: '',
      fichas_ad_verde: '',
      fichas_ad_azul: '',
      fichas_ad_fastrack: '',
      espera_ad_amarela: '',
      espera_ad_verde: '',
      espera_ad_azul: '',
      hasPediatric: false,
      fichas_inf_aguarda_CR: '',
      fichas_inf_amarela: '',
      fichas_inf_verde: '',
      fichas_inf_azul: '',
      fichas_inf_fastrack: '',
      espera_inf_amarela: '',
      espera_inf_verde: '',
      espera_inf_azul: '',
      monitors: '',
      oximeters: '',
      defibrillators: '',
      ecgs: '',
      telecardios: '',
      fetalMonitors: '',
      hasXRay: false,
      hasAutoclave: false,
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
      {/* EQUIPE */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='max-w-md w-full flex flex-col gap-4'>
        <CardHeader>
          <CardTitle className='font-bold text-2xl text-center'>CENSO PADRÃO</CardTitle>
        </CardHeader>
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
          <Separator />
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
                            <SelectValue placeholder="Selecione" />
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
                            <SelectValue placeholder="Selecione" />
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
                            <SelectValue placeholder="Selecione" />
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
                                <SelectValue placeholder="Selecione" />
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
                                <SelectValue placeholder="Selecione" />
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
                                <SelectValue placeholder="Selecione" />
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
          {/* EQUIPAMENTOS */}
          <Separator />
          <CardTitle className='text-xl text-center pt-2'>EQUIPAMENTOS</CardTitle>
          <Separator />
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
          
          <FormField
            control={form.control}
            name="defibrillators"
            render={
              ({field}) => {
                return <FormItem>
                  <FormLabel>Quantos Desfibriladores?</FormLabel>
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
            name="ecgs"
            render={
              ({field}) => {
                return <FormItem>
                  <FormLabel>Quantos ECG?</FormLabel>
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
            name="telecardios"
            render={
              ({field}) => {
                return <FormItem>
                  <FormLabel>Quantos Telecardios?</FormLabel>
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
            name="fetalMonitors"
            render={
              ({field}) => {
                return <FormItem>
                  <FormLabel>Quantos Sonares Fetais?</FormLabel>
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
            name="hasXRay"
            render={
              ({field}) => {
                return <FormItem className='flex flex-row items-center justify-between rounded-lg'>
                  <div className="space-y-0 5">
                    <FormLabel>Possui Raio-X?</FormLabel>
                    <FormDescription>
                      (Caso não possua, deixar desativado)
                    </FormDescription>
                  </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  <FormMessage/>
                </FormItem>
              }
            }
          />
          
          <FormField
            control={form.control}
            name="hasAutoclave"
            render={
              ({field}) => {
                return <FormItem className='flex flex-row items-center justify-between rounded-lg'>
                  <div className="space-y-0 5">
                    <FormLabel>Possui Autoclave?</FormLabel>
                    <FormDescription>
                      (Caso não possua, deixar desativado)
                    </FormDescription>
                  </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
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
