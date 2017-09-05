import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Navigation, Header, About, Download, Footer, FooterSection } from './components/index'

const style = {
    banner: {
        position: 'relative',
        top: '10px'
    }
}

class App extends Component {
  render() {
    return (
      <div>
        {/*<div className='preloader'><div className='loaded'>&nbsp;</div></div>*/}
        <Navigation />
        <Header />
        <About
          className="cd-timeline-img cd-movie"
          image='/images/dollar-symbol.svg'
          title='Pay the security deposit.'
          content='A $99 security deposit is required of all the members. This covers the cost of the flight if members do not meet their pledged spending with ZeroJet partners.'
        />
        <About
          className="cd-timeline-img cd-location"
          image='/images/airplane-flight.svg'
          title='Fly.'
          content='Use the ZeroJet app to reserve flight to a chosen destination up to the airport and return.'
        />
        <About
          className="cd-timeline-img cd-picture"
          image='/images/group.svg'
          title='Spend with ZeroJet Partners.'
          content='Spend as little as $500 on food, accomodation, transportation, activities and event options offered by ZeroJet partners at your destination.'
        />
        <About
          className="cd-timeline-img cd-fly"
          image='/images/home.svg'
          title='Come back home.'
          content='Fly back to your city of origin (This is optional).'
        />
        <About
          className="cd-timeline-img cd-guarantee"
          image='/images/guarantee-price.svg'
          title='Best Price Guarantee.' 
          content='We guarantee that all ZeroJet partner prices match or beat our competitors prices.'
        />
        <Download />
        <FooterSection />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

/*<About 
  title='Download the application.'>
  <div className="col-md-4">
    <a href="#"><img className="media-object" width="150" src="images/google-play.png" alt="simple"/></a>
    <div className="media-alt" style={style.banner}><code>Limited public Beta ~ 2000 spot per City</code></div>
  </div>
  <div className="col-md-4">
    <a href="#"><img src="images/notification-icon.png" width='50' alt="notification icon."/></a>
    <div className="media-alt" style={style.banner}><code>Notify me of iOS Launch.</code></div>
  </div>
</About>*/