import stylex from '@stylexjs/stylex'
import { style } from '../../styles/styles'

function App() {
  return (
    <div className={stylex(style.app)}>
      <h1>App</h1>
    </div>
  )
}

export default App
