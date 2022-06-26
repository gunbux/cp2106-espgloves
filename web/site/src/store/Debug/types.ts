export type State = string | 'rest' | 'clench' | 'palm' | 'snap' | 'wave'

export type GloveState = {
  id: State,
  type: string
  text: string
  data?: object
}

export enum DEBUG_ACTIONS {
  UPDATE_DEBUG = 'DEBUG_ACTIONS.UPDATE_DEBUG',
  UPDATE_DELTA = 'DEBUG_ACTIONS.UPDATE_DELTA',
  UPDATE_STATE = 'UPDATE_STATE'
}

type updateDebug = {
  type: typeof DEBUG_ACTIONS.UPDATE_DEBUG,
  response: object
}

type updateState = {
  type: typeof DEBUG_ACTIONS.UPDATE_STATE,
  response: GloveState
}

type updateDelta = {
  type: typeof DEBUG_ACTIONS.UPDATE_DELTA,
  response: object
}

export type ActionTypes =
  | updateDebug | updateState | updateDelta