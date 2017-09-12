import React, { Component } from 'react'

export default class Download extends Component {
  render() {
    return (
      <section style={{background:'rgb(247, 247, 247)'}}>
            <div className="download_container">
                <div className="row">
                    <div className="download_heading_text center-content">
            <img id="downloadApps" src="images/zerojet-logo.jpeg" width="300" alt="zerojet logo" style={{marginTop: '80px'}}/>    
                    <h4>Download now:</h4>   
                    <span className="banner" data-wow-duration="1s"><code>Coming Spring 2018 (AppStore)</code></span>
                        <div className="down_text_des wow fadeInUp" data-wow-duration="1.5s">
                            <a href=""><img src="images/Google_Play_Logo_2855.png" width="300" alt="" /></a>
                            <a href=""><img src="images/apple_appStore_logo.png" width="300"  alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}