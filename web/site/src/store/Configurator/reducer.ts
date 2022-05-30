import {Reducer} from 'redux'
import {ActionTypes, CONFIG_ACTIONS, ConfigTemplate, ConfigType} from './types'

const initialState = {
  configList: []
}

type State = {
  configList: ConfigType[]
}

export const config: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case CONFIG_ACTIONS.GET_CONFIG: {
      return {...state}
    }
    case CONFIG_ACTIONS.CREATE_CONFIG: {
      return {
        ...state,
        configList: [...state.configList,  ConfigTemplate]
      }
    }

    case CONFIG_ACTIONS.DELETE_CONFIG: {
      return {
        ...state,
        configList: state.configList.filter((conf: ConfigType) => conf.id === action.response)
      }
    }

    //TODO: Extract and add checks
    case CONFIG_ACTIONS.EDIT_CONFIG: {
      return {
        ...state,
        configList: [...state.configList.filter((conf: ConfigType) => conf.id === action.response.id), action.response]
      }
    }
    default:
      return state
  }
}