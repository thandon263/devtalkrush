import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Navigation, Header, About, Download, Footer } from './components/index'

class App extends Component {
  render() {
    return (
      <div>
        {/*<div className='preloader'><div className='loaded'>&nbsp;</div></div>*/}
        <Navigation />
        <Header />
        <About />
        <Download />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))