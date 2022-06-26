import {Dispatch} from '../types'
import {ActionTypes, DEBUG_ACTIONS, GloveState} from './types'

export const updateDebug = (update: object) => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: DEBUG_ACTIONS.UPDATE_DEBUG,
    response: update
  })
}

export const updateState = (state: GloveState) => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: DEBUG_ACTIONS.UPDATE_STATE,
    response: state
  })
}

export const updateDelta = (update: object) => async (dispatch: Dispatch<ActionTypes>) => {
  // console.log(update)
  dispatch({
    type: DEBUG_ACTIONS.UPDATE_DELTA,
    response: update
  })
}