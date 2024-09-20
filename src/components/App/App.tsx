import stylex from '@stylexjs/stylex'
import { style } from '../../styles/styles'

//const unusedVar = 'unused'

function App() {
  return (
    <div className={stylex(style.app)}>
      <h1>App</h1>
    </div>
  )
}

export default App
