import styled from 'styled-components'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

export const ConfigContainer = styled.div`
  display: flex;
  padding: 30px 0;
`

export const StyledViewport = styled(Box)`
  border-radius: 5%;
  min-width: 300px;
  min-height: 300px;
  max-width: 300px;
  max-height: 300px;
  cursor: pointer;
  background-color: ${props => props.theme.color.primary2} !important;

  &:hover {
    background-color: ${props => props.theme.color.primary1} !important;
  }
`

export const StyledEditor = styled(Container)`
  width: 100%;
`

export const StyledButton = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.secondary3} !important;
  
  &:hover {
    background-color: ${props => props.theme.color.secondary4} !important;
  }
`
