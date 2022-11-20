import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Card } from '@utfprfabricadesoftware/utfpr-lib-ui-react'

import httpClient from 'services/httpClient'
import { toLocaleString } from 'helpers/dateFormat'
import { LiberacaoProps } from 'types/Liberacao'

import { BoxList } from './ApprovalList.styles'

export const ApprovalList = React.memo(() => {
  const history = useHistory()

  const [liberacoes, setLiberacoes] = React.useState<LiberacaoProps[]>([])
  const data = liberacoes || []

  // Recupera as liberações ativas, ou seja, aquelas cuja data
  // final de liberação ainda está válida (data_fim >= hoje).
  const loadApprovals = async () => {
    try {
      const response = await httpClient.get('/solicitacao/cadastro/getByPermissao/1')

      setLiberacoes(response.data.cadastroSolicitacao.rows)
    } catch (err) {
      console.error(err)
    }
  }

  function getPersonName(item: LiberacaoProps) {
    try {
      return item.Aluno.Pessoa.nome_pessoa
    } catch (err) {
      return '---'
    }
  }

  useEffect(() => {
    loadApprovals()
  }, [])

  return (
    <BoxList>
      {data.map((item) => (
        <Card
          key={item.id_liberacao}
          name={getPersonName(item)}
          leftInfo={'De: ' + toLocaleString(item.data_inicio)}
          rightInfo={'Até: ' + toLocaleString(item.data_fim)}
          removeDisabled={true}
          onEdition={() => history.push('/liberacoes/' + item.id_liberacao)}
        />
      ))}
    </BoxList>
  )
})
