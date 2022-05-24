import React from 'react'
import { Button, Modal } from '@utfprfabricadesoftware/utfpr-lib-ui-react'

import { FormVisit } from 'components/FormVisit'
import { ButtonWrapper } from './RegisterApproval.styles'

type RegisterApprovalProps = {
  id_liberacao: number
}

export const RegisterApproval = ({ id_liberacao }: RegisterApprovalProps) => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <ButtonWrapper>
        <Button type="button" name="visitaButton" onClickFunction={() => setOpen(true)}>
          Registrar Entrada
        </Button>
      </ButtonWrapper>

      <Modal visible={open} close={() => setOpen(false)} title="Registro de Entrada">
        <FormVisit isEntrada={true} id_liberacao={id_liberacao} />
      </Modal>
    </>
  )
}
