import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useFormContext } from "@/contexts/FormContext";
import { useFormDataContext } from '@/contexts/DataFormContext';

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"


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
  // monitors: z.number({
  //   required_error: "É obrigatório informar um valor.",
  // }).min(0).max(9),
  // oximeters: z.number({
  //   required_error: "É obrigatório informar um valor.",
  // }).min(0).max(9),
  // defibrillators: z.number({
  //   required_error: "É obrigatório informar um valor.",
  // }).min(0).max(9),
  // ecgs: z.number({
  //   required_error: "É obrigatório informar um valor.",
  // }).min(0).max(9),
  // telecardios: z.number({
  //   required_error: "É obrigatório informar um valor.",
  // }).min(0).max(9),
  // fetalMonitors: z.number({
  //   required_error: "É obrigatório informar um valor.",
  // }).min(0).max(9),
  // hasXRay: z.boolean({
  //   required_error: "É obrigatório selecionar uma opção.",
  // }),
  // hasAutoclave: z.boolean({
  //   required_error: "É obrigatório selecionar uma opção.",
  // }),
});

// TypeScript interface for the form data, derived from the zod schema


export default function EquipmentForm() {

  const { onFormChange } = useFormContext();
  const { formData, setFormData, submitAllForms } = useFormDataContext();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      monitors: '0',
      oximeters: '0',
      defibrillators: '0',
      ecgs: '0',
      telecardios: '0',
      fetalMonitors: '0',
      hasXRay: false,
      hasAutoclave: false
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
          <Button type="submit" className='w-full'>
            Próximo
          </Button>
        </form>
      </Form>
    </main>
  );

};
