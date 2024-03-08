import './styles/global.css'

import InicialForm from './forms/IdentificationForm'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

import Logo from './assets/ART BORDER WHITE.png'
import { ThemeProvider } from './components/theme-provider';

export function App() {


  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <div className='flex flex-col justify-center items-center gap-4 text-center pt-6 pb-8 md:pt-10 md:pb-12 lg-py-32'>
            <img className='h-28 ' src={Logo} alt="" />
            <h1 className='font-bold text-2xl' >COORDENADORIA DE URGÊNCIA</h1>
            <h1 className='font-bold text-2xl' >CENSO DE SITUAÇÃO</h1>
        </div>
        <div className="mx-auto my-6 max-w-lg">
          <Card>
            <CardHeader>
              <CardTitle className='font-bold text-xl'>DADOS DE ITENDIFICAÇÃO</CardTitle>
              <CardDescription>
                Este Censo destina-se a informar a situação da Unidade ao Coordenador de Urgências.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <InicialForm />
            </CardContent>
          </Card>
        </div>
        <div className=" flex justify-center items-center align-text-bottom pt-4 pb-1">
          <p className='text-xs'>©Champs. Since 2024</p>
        </div>
      </ThemeProvider>
    </>


  )
}


