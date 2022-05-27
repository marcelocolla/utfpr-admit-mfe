import React from 'react'

import { RouteProps } from 'react-router-dom'

const HomePageLazy = React.lazy(() => import('pages/Home'))
const DetailsPageLazy = React.lazy(() => import('pages/Details'))

export const getRoutesMap = (basename = '/liberacoes'): RouteProps[] => {
  return [
    {
      exact: true,
      path: `${basename}/:id`,
      component: DetailsPageLazy,
    },
    {
      exact: true,
      path: basename,
      component: HomePageLazy,
    },
  ]
}
