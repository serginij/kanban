import React from 'react'

import { Columns } from './columns'
import { CommonLayout } from '@ui/layout'
import background from '../assets/background.png'

export const App = () => {
  return (
    <CommonLayout background={background}>
      <Columns />
    </CommonLayout>
  )
}
