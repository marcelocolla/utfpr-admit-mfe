import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Card } from '@utfprfabricadesoftware/utfpr-lib-ui-react'

import httpClient from 'services/httpClient'
import { toLocaleString } from 'helpers/dateFormat'
import { LiberacaoProps } from 'types/Liberacao'

import { BoxList } from './ApprovalList.styles'
import { Typography } from '@material-ui/core'

export const ApprovalList = React.memo(() => {
  const history = useHistory()

  const [liberacoes, setLiberacoes] = React.useState<LiberacaoProps[]>()

  // Recupera as liberações ativas, ou seja, aquelas cuja data
  // final de liberação ainda está válida (data_fim >= hoje).
  const loadApprovals = async () => {
    try {
      const response = await httpClient.get('/solicitacao/cadastro/getByPermissao/1')
      const list = response.data.cadastroSolicitacao?.rows || []

      setLiberacoes(list)
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
      {Array.isArray(liberacoes) &&
        liberacoes.map((item) => (
          <Card
            key={item.id_liberacao}
            name={getPersonName(item)}
            leftInfo={'De: ' + toLocaleString(item.data_inicio)}
            rightInfo={'Até: ' + toLocaleString(item.data_fim)}
            removeDisabled={true}
            onEdition={() => history.push('/liberacoes/' + item.id_liberacao)}
          />
        ))}

      {Array.isArray(liberacoes) && liberacoes.length === 0 && (
        <Typography variant="subtitle1" gutterBottom>
          Nenhum registro encontrado!
        </Typography>
      )}
    </BoxList>
  )
})
