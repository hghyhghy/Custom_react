// eslint-disable-next-line no-unused-vars
import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp() {
  return (
    <div>
      <h1> Custom App </h1>
    </div>
  )
}
export default Myapp

const anotherEle = (

  <a  href='https://google.com' rel="noreferrer"  target='_blank'> Visit Google </a>
)

const anotherUser = "subham aur react"

const reactelement = React.createElement(
  'a',
  { href:'https://google.com', target:'_blank'},
  'Click Me to visit google',
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
       
    reactelement
)
