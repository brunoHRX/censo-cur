// import React, { useState } from 'react';

import { useFormContext } from "@/contexts/FormContext";

import { Button } from "@/components/ui/button"

import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"




export default function SuccesPage( ) {

  const { onFormChange } = useFormContext();
  



  const newSubmit = ( ) => {
    onFormChange('InicialForm');
  };

  return (
    <main className='flex max-h-screen flex-col items-center justify-between'>
      <CardHeader>
        <CardTitle className='font-bold text-xl'>CENSO ENVIADO COM SUCESSO!</CardTitle>
        <CardDescription className="text-xs">
          <div className="description mb-2">
            Se atente para os próximos horários de envio pré-definidos, lembramos que qualquer outra situação relevante poderá ser informado a qualquer momento.
          </div>
          <Table className="text-">
            <TableCaption className="text-xs">Horários Sujeitos a Alteração.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">HORÁRIO</TableHead>
                <TableHead>CENSO</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>07:30</TableCell>
                <TableCell>CENSO PADRÃO</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>09:00</TableCell>
                <TableCell>CENSO DE CLASSIFICAÇÃO</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>11:00</TableCell>
                <TableCell>CENSO DE CLASSIFICAÇÃO</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>13:30</TableCell>
                <TableCell>CENSO PADRÃO</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>15:00</TableCell>
                <TableCell>CENSO DE CLASSIFICAÇÃO</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>17:00</TableCell>
                <TableCell>CENSO DE CLASSIFICAÇÃO</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>19:30</TableCell>
                <TableCell>CENSO PADRÃO</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>21:00</TableCell>
                <TableCell>CENSO DE CLASSIFICAÇÃO</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>23:00</TableCell>
                <TableCell>CENSO DE CLASSIFICAÇÃO</TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </CardDescription>
      </CardHeader>
          <Button type="button" onClick={newSubmit} className='w-full' >
            Enviar um Novo Censo!
          </Button>
    </main>
  );
};

