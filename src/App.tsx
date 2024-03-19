import './styles/global.css'

import { FormProvider, useFormContext } from './contexts/FormContext'
import { FormDataProvider } from './contexts/DataFormContext';
import { ThemeProvider } from './components/theme-provider';

import InicialForm from './forms/IdentificationForm'
import EquipmentForm from './forms/EquipamentForm'
import Classification from './forms/ClassificationForm'
import TeamForm from './forms/TeamForm';
import EMAC from './forms/EmacSolicitacion';
import ReviewPage from './forms/ReviewPage';
import SuccesPage from './forms/SuccessPage';
import Header from './components/header';

import {
  Card,
  CardContent,
} from "./components/ui/card";


export function App() {

  const FormSwitch = () => {
    const {activeForm} = useFormContext();
    console.log(activeForm);

    switch (activeForm) {
      case 'InicialForm':
        return <InicialForm />;
      case 'EquipmentForm':
        return <EquipmentForm  />;
      case 'Classification':
        return <Classification  />;
      case 'TeamForm':
        return <TeamForm  />;
      case 'EMAC':
        return <EMAC  />;
      case 'ReviewPage':
        return <ReviewPage  />;
      case 'SuccesPage':
        return <SuccesPage />;
      default:
        return <InicialForm />;
    }
  };



  return (
    <>
      <FormProvider>
        <FormDataProvider>
          <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
            <Header />
            <div className="mx-auto my-6 max-w-lg">
              <Card>
                <CardContent>
                  <FormSwitch/>
                </CardContent>
              </Card>
            </div>
            <div className=" flex justify-center items-center align-text-bottom pt-4 pb-1">
              <p className='text-xs'>© Champs. Since 2024</p>
            </div>
          </ThemeProvider>
        </FormDataProvider>
      </FormProvider>
        
    </>


  )
}


