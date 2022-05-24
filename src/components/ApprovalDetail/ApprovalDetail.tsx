import { toLocaleString } from 'helpers/dateFormat'
import React from 'react'

import { LiberacaoProps } from 'types/Liberacao'
import { CardHeader, DetailedCard } from './ApprovalDetail.styles'

type ApprovalDetailProps = {
  data: LiberacaoProps
}

export const ApprovalDetail = React.memo(({ data }: ApprovalDetailProps) => {
  return (
    <>
      <CardHeader>
        <div>
          <img src="/Ellipse 2.png" alt="Avatar" />
        </div>
        <strong>{data?.Aluno?.Pessoa?.nome_pessoa ?? '---'}</strong>
        <span>
          RA: <strong>{data?.Aluno?.ra_aluno ?? '---'}</strong>
        </span>
      </CardHeader>

      <DetailedCard>
        <div>
          <div>Início:</div>
          <div>{data?.data_inicio ? toLocaleString(data.data_inicio) : '---'}</div>
          <div>Fim:</div>
          <div>{data?.data_fim ? toLocaleString(data.data_fim) : '---'}</div>
          <div />
          <div />
          <div>Professor Responsável:</div>
          <div>
            <strong>{data?.pessoaCadastro?.nome_pessoa ?? '---'}</strong>
          </div>
        </div>
      </DetailedCard>
    </>
  )
})
