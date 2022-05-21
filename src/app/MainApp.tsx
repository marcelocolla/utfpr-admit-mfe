import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeStyles } from '@utfprfabricadesoftware/utfpr-lib-ui-react'

import RoutesApp from './RoutesApp'

const MainApp = (): JSX.Element => {
  return (
    <React.StrictMode>
      <ThemeStyles />

      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default MainApp
