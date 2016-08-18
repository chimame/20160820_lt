import { createAction } from 'redux-actions'
export const START_POLLING = 'START_POLLING'
export const SHOW_MESSAGE = 'SHOW_MESSAGE'
export const SHOW_NETWORK_ERROR = 'SHOW_NETWORK_ERROR'

export const startPolling = createAction(START_POLLING)
export const showMessage = createAction(SHOW_MESSAGE)
export const showNetworkError = createAction(SHOW_NETWORK_ERROR)
