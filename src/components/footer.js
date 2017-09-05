import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-container center-content">
        <div className="row">
            <div className="col-md-12">
                <div className="copyright_text">
                    <p className=" wow zoomIn" data-wow-duration="1s"><a href="http://zerojet.com">Zerojet</a> 2017 All Rights Reserved</p>
                </div>
            </div>
        </div>
      </footer>
    )
  }
}

