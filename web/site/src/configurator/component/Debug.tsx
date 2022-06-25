import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import { DebugContainer } from "./Debug.styled";

const ws = new WebSocket("ws://192.168.0.137")
let counter = 1

export default function Debug() {
  const [text, setText] = useState()
  useEffect(() => {
    ws.onopen = (event) => {
      console.log("opened")
      ws.send('1')
    }
  }, [])

  updateContent(setText)
  return <DebugContainer>
    {text}
    {/*{getContent(setText)}*/}
  </DebugContainer>;
}

function updateContent(setText: Dispatch<SetStateAction<undefined>>) {
  ws.onmessage = (event) => {
    console.log('message')
    setText(event.data)
    counter++
    ws.send((counter).toString())
  }
}
