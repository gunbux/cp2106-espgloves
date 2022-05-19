import React from "react";
import {StyledContainer, StyledBackground} from "./MainContainer.styled";

export default function MainContainer({children}: { children: React.ReactNode }) {
  return (
    <StyledBackground>
      <StyledContainer maxWidth="xl">
        {children}
      </StyledContainer>
    </StyledBackground>
  )
}
