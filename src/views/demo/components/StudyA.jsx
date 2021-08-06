import React from 'react'
import { connect } from 'react-redux'

function mapStateToPrpos(store) {
  return {
    msg: store.msg
  }
}

function mapDispatchToPrpos(dispatch) {
  return {
    setMsg(payload) {
      var action = { type: 'update', payload }
      dispatch(action)
    }
  }
}
// @connect(mapDispatchToPrpos,mapDispatchToPrpos)
class StudyA extends React.Component {
  updateMsg() {
    this.props.setMsg('hahahaha~')
  }
  render() {
    console.log('prpos', this.props)
    return (
      <div>
        <h1>使用Redux数据</h1>
        <h2>{this.props.msg}</h2>
        <button onClick={() => this.updateMsg()}>修改MSG</button>
      </div>
    )
  }
}
export default connect(mapStateToPrpos, mapDispatchToPrpos)(StudyA)