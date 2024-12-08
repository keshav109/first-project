import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import New from  './new.jsx'

const anotheruser = "Chai aur React"
const newElement =React.createElement(
  'a',
  {href :'https://google.com', target : "_blank"} ,'Visit Google',
  anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  
    newElement

)
