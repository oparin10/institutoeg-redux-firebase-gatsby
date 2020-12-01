import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { Provider } from "react-redux"
import React from "react"

let initialState = {
  test: "",
  testLevels: [],
  errors: [],
}

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEST_CASE_ONE":
      return { ...state }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  test: testReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
