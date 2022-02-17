import {
  ITEM_LIST_REQUEST,
  ITEM_LIST_SUCCESS,
  ITEM_LIST_FAIL
} from '../constants/itemConstants'

export const itemListReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case ITEM_LIST_REQUEST:
      return { loading: true, items: [] }
    case ITEM_LIST_SUCCESS:
      return {
        loading: false,
        items: action.payload
      }
    case ITEM_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}


