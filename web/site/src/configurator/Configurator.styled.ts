import styled from 'styled-components'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export const ConfigContainer = styled.div`
  display: flex;
  padding: 30px 0;
`

export const StyledViewport = styled(Box)`
  border-radius: 5%;
  min-width: 300px;
  min-height: 300px;
  cursor: pointer;
  background-color: ${props => props.theme.color.primary2} !important;
  
  &:hover {
    background-color: ${props => props.theme.color.primary1} !important;
  }
`

export const StyledEditor = styled(Container)`
  width: 100%;
`