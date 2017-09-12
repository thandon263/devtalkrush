import React, { Component } from 'react'


const style = {
  padding: {
    padding: '20px',
    color: '#FFFFFF',
    fontFamily: 'Open Sans'
  }
}

class FooterSection extends Component {
  render() {
    return (
      <footer>
        <div className="inner-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 f-about">
                <a href="/"><h1>Zerojet</h1></a>
                <p></p>
              </div>
              <div className="col-md-4 l-posts">
                <h3 className="widgetheading">2017 - 2018 Public beta Routes</h3>
                <ul>
                  <li><a href="#">Edmonton - Vancouver</a></li>
                  <li><a href="#">Toronto - Montreal</a></li>
                  <li><a href="#">Ottawa - Toronto</a></li>
                  <li><a href="#">Montreal - Niagara Falls</a></li>
                  <li><a href="#">Niagara Falls - Ottawa</a></li>
                </ul>
              </div>
              <div className="col-md-4 f-contact">
                <h3 className="widgetheading">Stay in touch</h3>
                <div>
                  <ul>
                    <li><a href="#"><p>New York</p></a></li>
                    <li><a href="#"><p>Chicago</p></a></li>
                    <li><a href="#"><p>Atlanta</p></a></li>
                    <li><a href="#"><p>Phoenix</p></a></li>
                    <li><a href="#"><p>Orlando</p></a></li>
                    <li><a href="#"><p>Las Vegas</p></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default FooterSection


// <div>
//   <ul>
//     <li><a href="#"><p>San Diego</p></a></li>
//     <li><a href="#"><p>Philadelphia</p></a></li>
//     <li><a href="#"><p>San Francisco</p></a></li>
//     <li><a href="#"><p>Washington</p></a></li>
//     <li><a href="#"><p>Boston</p></a></li>
//   </ul>
// </div>