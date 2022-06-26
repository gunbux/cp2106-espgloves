import {Reducer} from 'redux'
import {ActionTypes, DEBUG_ACTIONS, GloveState} from './types'

const initialState = {
  debug: {
    'accel x': 0,
    'accel y': 0,
    'accel z': 0,
    'imu pitch': 0,
    'imu roll': 0,
    'imu yaw': 0,
    'time': 0
  },
  delta: {
    'accel x': 0,
    'accel y': 0,
    'accel z': 0,
    'imu pitch': 0,
    'imu roll': 0,
    'imu yaw': 0,
    'time': 0
  },
  state: {id: 'rest', type: 'idle', text: 'REST STATE'}
}

type ReducerState = {
  debug: object,
  delta: object,
  state: GloveState
}

export const debug: Reducer<ReducerState, ActionTypes> = (state= initialState, action) => {
  switch (action.type) {
    case DEBUG_ACTIONS.UPDATE_DEBUG:
      return {
        ...state,
        debug: action.response
      }
    case DEBUG_ACTIONS.UPDATE_STATE:
      return {
        ...state,
        state: action.response
      }
    case DEBUG_ACTIONS.UPDATE_DELTA:
      let res = {}
      // eslint-disable-next-line eqeqeq
      if (state.debug == action.response) {
        return {...state}
      }
      Object.keys(state.debug).forEach((key) => {
        // @ts-ignore
        res[key] = action.response[key] - state.debug[key]
      })

      return {
        ...state,
        delta: res
      }
    default:
      return state
  }
}