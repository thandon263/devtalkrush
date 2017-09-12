import React, { Component } from 'react'

const style = {
    border: {
        borderRight: '.4px solid #E0E0E0'
    },
    banner: {
        position: 'relative',
        top: '10px'
    },
    padding: {
        padding: '40px'
    },
    textAlignLeft: {
        textAlign: 'left'
    },
    textAlign: {
        position: 'relative',
        top: '16px'
    }
}

export default class Work extends Component {
  constructor(props) {
      super(props)
      this.state = {
        picture: props.picture,
        movie: props.movie,
        location: props.location,
        title: props.title,
        content: props.content
      }
  }

  render() {
    return (
        <section className="cd-container right">
            <div className="cd-timeline-block">
                <div className={this.props.className}>
                    <img src={this.props.image} alt="Picture"/>
                </div>

                <div id="#works" className="cd-timeline-content">
                    <h2>{this.state.title}</h2>
                    <p>{this.state.content}</p>
                    <div>{this.props.children}</div>
                </div>
            </div>
        </section>
    )
  }
}


/*<section id="works" className="center-content">
            <div className="container">
                <div className="row">
                <h1>How It Works</h1>
                  <hr/>
                    <div className="media">
                        <div className="media">
                            <div className="col-md-4">
                                <h3><code>Download the application.</code></h3>
                            </div>
                            <div className="col-md-4">
                                <a href="#"><img className="media-object" width="150" src="images/google-play.png" alt="simple"/></a>
                                <div className="media-alt" style={style.banner}><code>Limited public Beta ~ 2000 spot per City</code></div>
                            </div>
                            <div className="col-md-4">
                                <a href="#"><img src="images/notification-icon.png" width='50' alt="notification icon."/></a>
                                <div className="media-alt" style={style.banner}><code>Notify me of iOS Launch.</code></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <hr />
                    <div className="media">
                        <div className="media" >
                            <div className="col-md-4" style={style.textAlign}>
                                <h3>Pay the security deposit.</h3>
                            </div>
                            <div className="col-md-8" style={style.textAlignLeft}>
                                <p>A $99 security deposit is required of all the members. This covers the cost of the flight if members do not meet their pledged spending with ZeroJet partners.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <hr />
                    <div className="media">
                        <div className="media" >
                            <div className="col-md-4" style={style.textAlign}>
                                <h3>Fly.</h3>
                            </div>
                            <div className="col-md-8" style={style.textAlignLeft}>
                                <p>Use the ZeroJet app to reserve flight to a chosen destination up to the airport and return.</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="row">
                    <hr />    
                    <div className="media">
                        <div className="media" >
                            <div className="col-md-4" style={style.textAlign}>
                                <h3>Spend with ZeroJet Partners.</h3>
                            </div>
                            <div className="col-md-8" style={style.textAlignLeft}>
                                <p>Spend as little as $500 on food, accomodation, transportation, activities and event options offered by ZeroJet partners at your destination.</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="row">
                    <hr />
                    <div className="media">
                        <div className="media" >
                            <div className="col-md-4" style={style.textAlign}>
                                <h3>Come back home.</h3>
                            </div>
                            <div className="col-md-8" style={style.textAlignLeft}>
                                <p>Fly back to your city of origin (This is optional).</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">

                    <div className="media">
                        <div className="media" >
                            <div className="col-md-4" style={style.textAlign}>
                                <h3>Best Price Guarantee.</h3>
                            </div>
                            <div className="col-md-8" style={style.textAlignLeft}>
                                <p>We guarantee that all ZeroJet partner prices match or beat our competitors prices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        */