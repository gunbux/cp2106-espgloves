import styled from 'styled-components'
import Container from '@mui/material/Container'

export const StyledContainer = styled(Container)`
  //Temporary height
  min-height: calc(100vh - 68.5px);
`

export const StyledBackground = styled.div`
  background: ${props => props.theme.color.background1};
  color: ${props => props.theme.color.primary2};
`
