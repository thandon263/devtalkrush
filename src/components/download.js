import React, { Component } from 'react'

export default class Download extends Component {
  render() {
    return (
      <section id="downloadApps">
            <div className="container">
                <div className="row">
                    <div className="download_heading_text center-content">
                    <img src="images/zerojet-logo.jpeg" width="300" height="200" alt="zerojet logo"/>    
                    <h1>Download the App:</h1>
                       
                        <div className="down_text_des wow fadeInUp" data-wow-duration="1.5s">
                            <a href=""><img src="images/d2.png" alt="" /></a>
                            <a href=""><img src="images/d1.png" alt="" /></a>
                            <a href=""><img src="images/d3.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}