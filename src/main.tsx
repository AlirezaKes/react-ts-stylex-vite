import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App.tsx'
import stylex from '@stylexjs/stylex'
import { style } from './styles/styles.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className={stylex(style.root)}>
      <App />
    </div>
  </StrictMode>
)
