import React, { Component } from 'react'

const style = {
  color: '#FFFFFF'
}

export default class Header extends Component {
  render() {
    return (
      <section id="home">
            <div id="bgimage" className="header-image">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 col-xs-12">
                            <div className="iphone center-content wow fadeInLeft" data-wow-duration="1s">
                                <img src="images/iphone.png" alt="" />
                            </div>
                        </div>
          <div className="col-sm-7 col-xs-12 heading-text center-content">
              <div className="single_home_content wow zoomIn" data-wow-duration="1s">
                <h1>DISCOVER AND EXPLORE</h1>
								<p className="bannerDescription">Travel for free and experience hundreds of Food, Activity and Event offeringsaround you.</p>
								<div className="button">
									<a href="" className="btn">Downlod Android APP</a>
								</div>
							</div>
            </div>
          </div>
        </div>
            <div className="scrolldown">
              <a href="#works" className="scroll_btn"></a>
            </div>
          </div>
        </section>
    )
  }
}