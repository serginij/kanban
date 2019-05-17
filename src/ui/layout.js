import styled from 'styled-components'

export const CommonLayout = styled.section`
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #e6faff;
  width: 100vw;
  height: 100vh;
  display: flex;
`
