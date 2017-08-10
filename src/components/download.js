import React, { Component } from 'react'

export default class Download extends Component {
  render() {
    return (
      <section id="downloadApps">
            <div className="container">
                <div className="row">
                    <div className="download_heading_text center-content">
                        <h1>Download the App</h1>
                        <p>Phasellus nisl leo congue eu malesuada lobortis fringilla et nulla. Curabitur posuere sem nec bibendum finibus.</p>

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