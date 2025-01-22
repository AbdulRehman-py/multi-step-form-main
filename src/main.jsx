import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AddOn from './AddOn.jsx'
// import Personal from './Personal.jsx'
import TrackPagePanel from './TrackPagePanel.jsx'
//import Plan from './Plan.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TrackPagePanel/>
    <AddOn />
  </StrictMode>,
)
