import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card } from '@utfprfabricadesoftware/utfpr-lib-ui-react'

import { LiberacaoProps } from 'types/Liberacao'
import httpClient from 'services/httpClient'
import { BoxList } from './ApprovalList.styles'

export const ApprovalList = React.memo(() => {
  const history = useHistory()

  const [liberacoes, setLiberacoes] = React.useState<LiberacaoProps[]>([])

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

  React.useEffect(() => {
    loadApprovals()
  }, [])

  return (
    <BoxList>
      {liberacoes &&
        liberacoes.map((item) => (
          <Card
            key={item.id_liberacao}
            name={item.Aluno?.Pessoa?.nome_pessoa || '---'}
            leftInfo={'De: ' + new Date(item.data_inicio).toLocaleDateString('pt-BR')}
            rightInfo={'Até: ' + new Date(item.data_fim).toLocaleDateString('pt-BR')}
            removeDisabled={true}
            onEdition={() => history.push('/liberacoes/' + item.id_liberacao)}
          />
        ))}
    </BoxList>
  )
})
