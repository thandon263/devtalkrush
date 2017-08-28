import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="center-content">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="socail_bookmark">
                            <a href=""><i className="fa fa-facebook"></i></a>
                            <a href=""><i className="fa fa-linkedin"></i></a>
                            <a href=""><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12">
                        <div className="copyright_text">
                            <p className=" wow zoomIn" data-wow-duration="1s"><a href="http://zerojet.com">Zerojet</a>| All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
  }
}