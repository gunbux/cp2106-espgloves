import React, {useEffect} from "react";
import {DebugContainer} from "./Debug.styled";
import {useDispatch, useSelector} from "react-redux";
import {updateDebug, updateDelta} from "../../store/Debug/action";
import {RootState} from "../../store/types";

const ws = new WebSocket("ws://192.168.0.138")

export default function Debug() {
  const dispatch = useDispatch()
  const {debug, delta} = useSelector((state: RootState) => state.debug)

  useEffect(() => {
    ws.onopen = (event) => {
      console.log("opened")
      // ws.send('1')
    }
  }, [])

  // updateContent(setText)

  function updateContent() {
    ws.onmessage = (event) => {
      // console.log(event)
      // console.log(event.data)
      let data: object = {}
      // Catch error with ESP32 websocket
      try {
        data = JSON.parse(event.data)
        // console.log(JSON.parse(data))
        // console.log(typeof data)
        // setText(data)
      } catch (e) {
        if (e instanceof SyntaxError) {
          data = JSON.parse(event.data + '}')
        }
      }
      setData()
      if (Object.keys(data).length > 0) {
        dispatch<any>(updateDelta(data))
        // setTimeout(() => {}, 1000)
        dispatch<any>(updateDebug(data))
      }
    }
  }

  // function setData(data: object) {
  //   let log: string = ''
  //   Object.keys(data).forEach((key) => {
  //     // @ts-ignore
  //     log += `${key}: ${data[key]}\n`
  //   })
  //   console.log(log)
  //   setText(log)
  // }

  function setData() {
    // console.log(delta)
    return (
      Object.keys(delta).map((key) => (
        // @ts-ignore
        <div key={key}>{`${key}: ${delta[key]}`}</div>
        )
      )
    )
  }

  updateContent()
  return <DebugContainer>
    {setData()}
  </DebugContainer>;
}

// function updateContent(setText: Dispatch<SetStateAction<undefined>>) {
//   ws.onmessage = (event) => {
//     // console.log('message')
//     // console.log(event)
//     setText(event.data)
//     // ws.send((counter).toString())
//   }
// }