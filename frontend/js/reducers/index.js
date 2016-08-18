import { handleActions } from 'redux-actions'

const initialState = {show_error: false, message: ''}

const reducerMap = {
  SHOW_MESSAGE(state, action) {
    return {
      show_error: false,
      title: action.payload.title,
      message: action.payload.message
    }
  },
  SHOW_NETWORK_ERROR(state, action) {
    return {...state, show_error: true}
  },
}

export default handleActions(reducerMap, initialState)
