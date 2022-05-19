import {Dispatch} from '../types'
import {ActionTypes, CONFIG_ACTIONS, ConfigType} from './types'

export const getConfig = () => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: CONFIG_ACTIONS.GET_CONFIG
  })
}

export const addConfig = (config: ConfigType) => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: CONFIG_ACTIONS.ADD_CONFIG,
    response: config
  })
}

export const deleteConfig = (configID: string) => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: CONFIG_ACTIONS.DELETE_CONFIG,
    response: configID
  })
}

export const editConfig = (config: ConfigType) => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: CONFIG_ACTIONS.EDIT_CONFIG,
    response: config
  })
}

