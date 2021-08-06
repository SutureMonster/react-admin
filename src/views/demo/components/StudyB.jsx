import { connect } from 'react-redux'

export default connect(
  state => ({
    msg: state.msg
  }),
  dispatch => ({
    setMsg: payload => dispatch({ type: 'update', payload })
  })
)(
  prpos => {

    return (
      <div>
        <h1>函数式组件 使用Redux数据</h1>
        <h2>{prpos.msg}</h2>
        <button onClick={() => { prpos.setMsg(Math.random()) }}>修改MSG</button>
      </div>
    )
  }
)


