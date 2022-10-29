import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Pages/Home'
import './App.css'
import Logins from './Pages/Logins'
function App() {
  return (
    <div>
        <Router>
            <Route path exact="/">
                <Home></Home>

            </Route>
            <Route path="//">
              <Logins></Logins>
            </Route>
        </Router>
    </div>
  )
}

export default App