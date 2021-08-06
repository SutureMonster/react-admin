import { useSelector, useDispatch } from "react-redux";

export default () => {
  const msg = useSelector(state => state.msg)
  const setMsg = useDispatch()

  return (
    <div>
      <h1>Hooks 访问state数据</h1>
      <h2>{msg}</h2>
      <button onClick={() => setMsg({ type: 'update', payload: Math.random() })}>修改MSG</button>
    </div>
  )
}