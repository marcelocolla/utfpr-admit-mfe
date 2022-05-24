import React from 'react'
import { PageLayout } from 'components/PageLayout'
import { ApprovalList } from 'components/ApprovalList'

export const HomePage = () => {
  return (
    <PageLayout title="Liberações">
      <div>Clique no cartão para ver mais informações</div>

      <ApprovalList />
    </PageLayout>
  )
}
