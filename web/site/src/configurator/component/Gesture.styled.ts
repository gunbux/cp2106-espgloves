import styled from 'styled-components'
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField";

export const GestureWrapper = styled(Box)`
  min-height: 300px;
  background-color: ${(props) => props.theme.color.background2};
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 15px;
`

export const TextFieldWrapper = styled(Box)`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
//TODO: Add HOVER
// https://stackoverflow.com/questions/52911169/how-to-change-the-border-color-of-mui-textfield
export const StyledTextField = styled(TextField)`
  box-sizing: content-box;
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
    }
    
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`