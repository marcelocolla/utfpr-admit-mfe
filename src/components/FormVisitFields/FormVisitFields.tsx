import React from 'react'
import { Form } from 'formik'
import {
  FormBody,
  FormLine,
  InputField,
  FormFooter,
  Button,
} from '@utfprfabricadesoftware/utfpr-lib-ui-react'

type FormVisitFieldsProps = {
  isEntrada: boolean
}

export const FormVisitFields = ({ isEntrada }: FormVisitFieldsProps) => {
  return (
    <Form>
      <FormBody>
        <FormLine>
          <InputField
            name="liberacao.Aluno.Pessoa.nome_pessoa"
            label="Nome do Aluno"
            disabled={true}
          />
        </FormLine>
        <FormLine>
          <InputField name="liberacao.Aluno.ra_aluno" label="Matrícula" disabled={true} />
        </FormLine>
        <FormLine>
          <InputField name="data_registro" label="Data" disabled={true} />
          <InputField name="hora_registro" label="Horário" disabled={true} />
        </FormLine>
        <FormLine>
          <InputField
            name="vigilante.pessoa.nome_pessoa"
            label="Vigilante Responsável"
            disabled={true}
          />
        </FormLine>
        <FormLine>
          <InputField
            name="placa_veiculo"
            label="Informe a placa do veículo"
            required
            disabled={!isEntrada}
          />
        </FormLine>
        <FormLine>
          <InputField name="observacoes" label="Observações" />
        </FormLine>
      </FormBody>

      <FormFooter mt="3rem">
        <Button name="registroButton">Registrar {isEntrada ? 'Entrada' : 'Saída'}</Button>
      </FormFooter>
    </Form>
  )
}
