import {StateContainer} from "./State.styled";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/types";
import {updateState} from "../../store/Debug/action";
import {useEffect} from "react";

export default function State() {
  const dispatch = useDispatch()
  const {state, delta} = useSelector((state: RootState) => state.debug)

  useEffect(() => {
    checkMotion(delta)
  },[delta])

  // Checks delta and calculates if there is any change in finite state machine
  function checkMotion(delta: object) {
    // @ts-ignore
    const euclDist = calculateEuclideanDistance(delta['accel x'], delta['accel y'], delta['accel z'])
    console.log(euclDist)

    if (euclDist > 100) {
      dispatch<any>(updateState({id: 'wave', type: 'motion', text: 'WAVE STATE'}))
      return
    }

    dispatch<any>(updateState({id: 'rest', type: 'idle', text: 'REST STATE'}))
    return
  }

  // checkMotion(delta)
  return <StateContainer state={state.type}>
    {/*@ts-ignore*/}
    {state.text}
  </StateContainer>
}

function calculateEuclideanDistance(x: number, y: number, z: number) {
  return Math.sqrt(x ** 2 + y ** 2 + z ** 2)
}
