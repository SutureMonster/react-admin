/* 
Redux
  三个核心API:createStore、combineReducer、applyMiddleware
  三个概念:store、reducer、action
  三个特点:单一数据源、store只读、只能使用reducer纯函数修改store
*/

import { createStore } from "redux";

const initState = {
  msg: 'xixixixi',
  list: []
}
//用于修改store
function reducer(state, action) {
  state = initState
  console.log('修改信号', action)
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === 'update') {
    newState.msg = action.payload
  }
  return newState
}

const store = createStore(reducer)

export default store