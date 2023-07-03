import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
        <Route path="/" element={<News pageSize={6} category="general" country="in"/>}></Route>
        
        <Route path="/health" element={<News pageSize={6} category="health" country="in"/>}></Route>

        <Route path="/entertainment" element={<News pageSize={6} category="entertainment" country="in"/>}></Route>

        <Route path="/science" element={<News pageSize={6} category="science" country="in"/>}></Route>

        <Route path="/sports" element={<News pageSize={6} category="sports" country="in"/>}></Route>

        <Route path="/technology" element={<News pageSize={6} category="technology" country="in"/>}></Route>

        <Route path="/business" element={<News pageSize={6} category="business" country="in"/>}></Route>

        </Routes>
      </div>
    )
  }
}
