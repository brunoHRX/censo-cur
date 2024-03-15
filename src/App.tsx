import './styles/global.css'
import { useState } from 'react'

import { FormProvider } from './contexts/FormContext'
import { ThemeProvider } from './components/theme-provider';

import InicialForm from './forms/IdentificationForm'
import EquipmentForm from './forms/EquipamentForm'
import Header from './components/header';

import {
  Card,
  CardContent,
} from "./components/ui/card";


export function App() {

  const [activeForm, setActiveForm] = useState('InicialForm');

  const onFormChange = (formName: string) => {
    setActiveForm(formName);
  };

  return (
    <>
      <FormProvider onFormChange={onFormChange}>
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
          <Header />
          <div className="mx-auto my-6 max-w-lg">
            <Card>
              <CardContent>
                {activeForm === 'InicialForm' && <InicialForm/>}
                {activeForm === 'EquipmentForm' && <EquipmentForm/>}
              </CardContent>
            </Card>
          </div>
          <div className=" flex justify-center items-center align-text-bottom pt-4 pb-1">
            <p className='text-xs'>©Champs. Since 2024</p>
          </div>
        </ThemeProvider>
      </FormProvider>
        
    </>


  )
}


