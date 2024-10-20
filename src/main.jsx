import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CustomDateRangePicker from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <App /> */}
        <CustomDateRangePicker />
    </StrictMode>,
)
