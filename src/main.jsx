import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Abundanceloansystem from './Abunflow/Abundanceloansystem'
import Dash from './Abunflow/Dash'
import './tailwind.css'
import './loansystem.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Abundanceloansystem /> */}
  
    <Dash />
    {/* <Logo /> */}
  </StrictMode>,
)
