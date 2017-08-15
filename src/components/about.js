import React, { Component } from 'react'

const style = {
    border: {
        borderRight: '.4px solid #E0E0E0'
    }
}

export default class Work extends Component {
  render() {
    return (
        <section id="works" className="center-content">
            <div className="container">
                <div className="row">
                <h1>.</h1>
                  <hr/>
                    <div className="media">
                        <div className="media">
                            <div className="col-md-3">
                                <h3><code>Download the application.</code></h3>
                            </div>
                            <div className="col-md-3">
                                <a href="#"><img className="media-object" width="150" src="images/google-play.png" alt="simple"/></a>
                                <h6><code>Limited public Beta ~ 2000 spot per City</code></h6>
                            </div>
                            <div className="col-md-3">
                                <a href="#"><img className="media-object" width="150" src="images/available_apple.png" alt="simple"/></a>
                                <h6><code>Coming out Early 2018.</code></h6>
                            </div>
                            <div className="col-md-3">
                                <a href="#"><img src="images/notification-icon.png" width='50' alt="notification icon."/></a>
                                <h6><code>Notify of the Launch.</code></h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <hr />
                    <div className="media">
                        <div className="media">
                            <div className="col-md-3">
                                <h3><code>Pay the security deposit.</code></h3>
                            </div>
                            <div className="col-md-9">
                                <h6><code>A $99 security deposit is required of all the members. This covers the cost of the flight if members do not meet their pledged spending with ZeroJet partners.</code></h6>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="row">
                    <hr />
                    <div className="media">
                        <div className="media">
                            <div className="col-md-3">
                                <h3><code>Fly.</code></h3>
                            </div>
                            <div className="col-md-9">
                                <h6><code>Use the ZeroJet app to reserve flight to a chosen destination up to the airport and return.</code></h6>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="row">
                    <hr />
                    <div className="media">
                        <div className="media">
                            <div className="col-md-3">
                                <h3><code>Spend with ZeroJet Partners.</code></h3>
                            </div>
                            <div className="col-md-9">
                                <h6><code>Spend as little as $500 on food, accomodation, transportation, activities and event options offered by ZeroJet partners at your destination.</code></h6>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="row">
                    <hr />
                    <div className="media">
                        <div className="media">
                            <div className="col-md-3">
                                <h3><code>Come back home.</code></h3>
                            </div>
                            <div className="col-md-9">
                                <h6><code>Fly back to your city of origin (This of course is optional).</code></h6>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">

                    <div className="media">
                        <div className="media">
                            <div className="col-md-3">
                                <h3><code>Best Price Guarantee.</code></h3>
                            </div>
                            <div className="col-md-9">
                                <h6><code>We guarantee that all ZeroJet partner prices match or beat our competitors prices.</code></h6>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <h1>.</h1>
            </div>
        </section>
    )
  }
}