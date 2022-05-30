import MainContainer from "../common/components/MainContainer";
import AddIcon from '@mui/icons-material/Add';
import {ConfigContainer, StyledEditor, StyledViewport, StyledButton} from "./Configurator.styled";
import {useDispatch, useSelector} from "react-redux";
import {createConfig, getConfig} from "../store/Configurator/action";
import {RootState} from "../store/types";
import {ConfigType} from "../store/Configurator/types";
import React, {useEffect} from "react";
import Gesture from "./component/Gesture";

export default function Configurator() {
  const dispatch = useDispatch()
  const {configList} = useSelector((state: RootState) => state.config)

  useEffect(() => {
    dispatch<any>(getConfig())
  }, [configList])

  return (
    <MainContainer>
      <ConfigContainer>
        <StyledViewport/>
        <StyledEditor>
          {renderConfigs(configList)}
          {/*{console.log(configList)}*/}
          <StyledButton variant="contained" size="large" onClick={() => dispatch<any>(createConfig())}>
            <AddIcon/>
          </StyledButton>
        </StyledEditor>
      </ConfigContainer>
    </MainContainer>
  )
}

function renderConfigs(configList: ConfigType[]) {
  return (
    <React.Fragment>
      {configList.map((config: ConfigType) => (
        <Gesture
          key={config.id}
          name={config.name} />
      ))}
    </React.Fragment>
  )
}