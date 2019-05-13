import React from 'react'
import styled from 'styled-components'

const MainLayout = styled.section`
  background: url(mlechnyy-put-noch-zvezdy-nebo-3839.jpg);
`

export const mainLayout = ({ children }) => <MainLayout>{children}</MainLayout>
