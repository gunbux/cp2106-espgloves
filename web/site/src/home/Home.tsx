import MainContainer from "../common/components/MainContainer";
import {StyledHeader, IntroContainer} from "./Home.styled";

export default function Home() {
  return (
    <MainContainer>
      <IntroContainer>
        <StyledHeader>👋Hi There!</StyledHeader>
        <p>We're Chun Yu and Ian, this is our project, the Telekinesis Gloves!</p>
        <iframe title="intro-video" src="https://drive.google.com/file/d/1ZIkM-9PLJVXqGXY0wzjim2cbOIM1mxJz/preview" width="640" height="480"
  allow="autoplay"/>
      </IntroContainer>
    </MainContainer>
  )
}