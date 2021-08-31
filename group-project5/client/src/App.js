import React from "react"
import {Route, Switch} from "react-router-dom"

import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "./Components/Home"
import CreaturesPage from "./Components/CreaturesPage"
import Creature from "./Components/Creature"

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/creatures">
          <CreaturesPage />
        </Route>
        <Route path="/creatures/:creatureId">
          <Creature />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
