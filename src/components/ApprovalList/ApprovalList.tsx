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
      {liberacoes?.map(({ id_liberacao, data_inicio, data_fim, Aluno }) => (
        <Card
          key={id_liberacao}
          name={Aluno?.Pessoa?.nome_pessoa || '---'}
          leftInfo={'De: ' + new Date(data_inicio).toLocaleDateString('pt-BR')}
          rightInfo={'Até: ' + new Date(data_fim).toLocaleDateString('pt-BR')}
          removeDisabled={true}
          onEdition={() => history.push('/liberacoes/' + id_liberacao)}
        />
      ))}
    </BoxList>
  )
})
