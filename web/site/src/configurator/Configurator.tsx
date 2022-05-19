import MainContainer from "../common/components/MainContainer";
import {ConfigContainer, StyledEditor, StyledViewport} from "./Configurator.styled";

export default function Configurator() {
  return (
    <MainContainer>
      <ConfigContainer>
        <StyledViewport />
        <StyledEditor>editor</StyledEditor>
      </ConfigContainer>
    </MainContainer>
  )
}