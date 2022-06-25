//TODO: Change this
export type ConfigType = {
  id: string,
  name: string
}

export const ConfigTemplate: ConfigType = {
  id: '',
  name: ''
}

export enum CONFIG_ACTIONS {
  GET_CONFIG = 'CONFIG_ACTIONS.GET_CONFIG',
  ADD_CONFIG = 'CONFIG_ACTIONS.ADD_CONFIG',
  CREATE_CONFIG = 'CONFIG_ACTION.CREATE_CONFIG',
  DELETE_CONFIG = 'CONFIG_ACTIONS.DELETE_CONFIG',
  EDIT_CONFIG = 'CONFIG_ACTIONS.EDIT_CONFIG'
}

type getConfig = {
  type: typeof CONFIG_ACTIONS.GET_CONFIG
}

type createConfig = {
  type: typeof CONFIG_ACTIONS.CREATE_CONFIG
}

type addConfig = {
  type: typeof CONFIG_ACTIONS.ADD_CONFIG
  response: ConfigType
}

type deleteConfig = {
  type: typeof CONFIG_ACTIONS.DELETE_CONFIG
  response: string
}

type editConfig = {
  type: typeof CONFIG_ACTIONS.EDIT_CONFIG
  response: ConfigType
}

export type ActionTypes =
  | getConfig | createConfig | deleteConfig | editConfig | addConfig