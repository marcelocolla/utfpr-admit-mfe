import React from 'react'
import { Formik } from 'formik'

import httpClient from 'services/httpClient'
import { FormVisitFields } from 'components/FormVisitFields'
import { dataAgora, horaAgora } from 'helpers/dateFormat'
import { useHistory } from 'react-router-dom'
import useUserStore from 'shared/utfpr-core-shared-mfe/UserStore'
import { useVisit } from 'hooks/visit/useVisit'

type FormVisitProps = {
  isEntrada: boolean
  id_liberacao: number
}

export const FormVisit = ({ isEntrada, id_liberacao }: FormVisitProps) => {
  const history = useHistory()

  const vigilante = useUserStore()
  const { liberacao, visita } = useVisit({ isEntrada, id_liberacao })

  const registrarEntrada = async (values) => {
    await httpClient.post('/visita', {
      data_entrada: values.data_entrada,
      hora_entrada: values.hora_entrada,
      data_saida: null,
      hora_saida: null,
      id_liberacao: values.liberacao.id_liberacao,
      id_vigilante_entrada: values.vigilante.vigilante.id_vigilante,
      id_vigilante_saida: null,
      placa_veiculo: values.placa_veiculo,
      observacoes: values.observacoes,
    })

    history.push('/visitas')
  }

  const registrarSaida = async (values) => {
    await httpClient.put('/visita', {
      id_visita: visita?.id_visita,
      data_saida: dataAgora(),
      hora_saida: horaAgora(),
      id_liberacao: values.liberacao.id_liberacao,
      id_vigilante_saida: values.vigilante.vigilante.id_vigilante,
      observacoes: values.observacoes,
    })

    history.go(0)
  }

  return (
    <Formik
      enableReinitialize
      initialValues={{ ...visita, liberacao: liberacao, vigilante: vigilante }}
      onSubmit={isEntrada ? registrarEntrada : registrarSaida}
      component={(props) => <FormVisitFields {...props} isEntrada={isEntrada} />}
    />
  )
}
