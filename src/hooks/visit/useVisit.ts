import React from 'react'

import httpClient from 'services/httpClient'
import { dataAgora, horaAgora } from 'helpers/dateFormat'

type UseVisitParams = {
  id_liberacao: number
  isEntrada: boolean
}

export const useVisit = ({ id_liberacao, isEntrada }: UseVisitParams) => {
  const visita = {
    data_registro: dataAgora(),
    hora_registro: horaAgora(),
    placa_veiculo: '',
    observacoes: '',
    id_visita: '',
  }

  const [liberacao, setLiberacao] = React.useState({
    id_liberacao: 0,
    Aluno: {
      ra_aluno: '',
      Pessoa: {
        nome_pessoa: '',
      },
    },
  })

  // Criar uma visita a partir de uma liberação
  const createVisit = async () => {
    try {
      const response = await httpClient.get(`/solicitacao/cadastro/${id_liberacao}`)

      setLiberacao(response.data.cadastroSolicitacao.rows[0])
    } catch (err) {
      console.log('>>> Exception create visit request', id_liberacao)
      console.log('>>>', err)
    }
  }

  React.useEffect(() => {
    if (isEntrada) {
      createVisit()
    }
  }, [id_liberacao, isEntrada])

  return {
    visita,
    liberacao,
  }
}
