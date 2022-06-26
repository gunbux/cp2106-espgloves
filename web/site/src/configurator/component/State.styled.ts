import styled from "styled-components";

export const StateContainer = styled.div<{ state: string }>`
  margin: 30px 0;
  padding: 15px 10px;
  border-radius: 20px;
  border: solid;
  text-align: center;
  font-size: large;
  color: ${props => {
    if (props.state === 'idle') {
      return props.theme.color.secondary1
    }
    if (props.state === 'motion') {
      return props.theme.color.tertiary4
    }
    if (props.state === 'action') {
      return props.theme.color.tertiary1
    }
    return props.theme.color.primary2
  }}
`