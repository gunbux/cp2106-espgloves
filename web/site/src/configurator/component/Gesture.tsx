import {GestureWrapper, StyledTextField, TextFieldWrapper} from "./Gesture.styled"


export default function Gesture(props: {
  name: string
}) {
  return (
    <GestureWrapper>
      <TextFieldWrapper>
        <StyledTextField label="Name" variant="outlined" InputLabelProps={{style: {color: '#fff'}}} sx={{ input: { color: '#fff' } }}/>
        <StyledTextField label="Type" variant="outlined" InputLabelProps={{style: {color: '#fff'}}} sx={{ input: { color: '#fff' } }}/>
        <StyledTextField label="Parameters" variant="outlined" InputLabelProps={{style: {color: '#fff'}}} sx={{ input: { color: '#fff' } }}/>
      </TextFieldWrapper>
    </GestureWrapper>
  )
}