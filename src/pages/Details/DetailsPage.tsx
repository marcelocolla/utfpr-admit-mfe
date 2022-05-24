import React from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from '@utfprfabricadesoftware/utfpr-lib-ui-react'

import { LiberacaoProps } from 'types/Liberacao'
import httpClient from 'services/httpClient'

import { PageLayout } from 'components/PageLayout'
import { RegisterApproval } from 'components/RegisterApproval'
import { ApprovalDetail } from 'components/ApprovalDetail'

export const DetailsPage = () => {
  const { id } = useParams<{ id: string }>()
  const [liberacao, setLiberacao] = React.useState<LiberacaoProps>()

  const loadApprovalById = async () => {
    try {
      const response = await httpClient.get(`solicitacao/cadastro/${id}`)

      setLiberacao(response.data.cadastroSolicitacao.rows[0])
    } catch (err) {
      console.error(`>>> Exception load solicitation id ${id}`)
      console.error('>>> ', err)

      alert('Ocorreu uma falha ao carregar a solicitação.\n Tente novamente!')
    }
  }

  React.useEffect(() => {
    loadApprovalById()
  }, [id])

  return (
    <PageLayout title="Liberações">
      {liberacao ? <ApprovalDetail data={liberacao} /> : <Spinner />}

      {liberacao && <RegisterApproval id_liberacao={liberacao.id_liberacao} />}
    </PageLayout>
  )
}
