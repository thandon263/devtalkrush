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
                <p>We possess within us two minds. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power.</p>
                
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
                <a href="#"><p><i className="fa fa-envelope"></i> zerojet@gmail.com</p></a>
                <p><i className="fa fa-phone"></i>  +1 647 - Zerojetline</p>
                <p><i className="fa fa-home"></i> Zerojet & Kazuwai  |  PO Box toronto 
                  North York, Toronto <br/>
                  Ontario *** Canada</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default FooterSection


// <section className="row">
//           <div className="col-md-12 footer-section">         
//             <div className="col-md-6 routes">
//               <h3 style={style.padding}>2017 - 2018 public <code>beta</code> routes</h3>
//               <p>Edmonton      - Vancouver</p>
//               <p>Toronto       - Montreal</p>
//               <p>Ottawa        - Toronto</p>
//               <p>Montreal      - Niagara Falls</p>
//               <p>Niagara Falls - Ottawa</p>
//             </div>
//             <div className="col-md-6">
//               <h3 style={style.padding}>2018 Destinations</h3>
//               <div className="row destination-list">
//                 <div className="col-md-6">
//                   <p>New York</p>
//                   <p>San Diego</p>
//                   <p>Orlando</p>
//                   <p>Philadelphia</p>
//                   <p>Los Angeles</p>
//                   <p>San Francisco</p>
//                 </div>
//                 <div className="col-md-6">
//                   <p>Las Vegas</p>
//                   <p>Boston</p>
//                   <p>Atlanta</p>
//                   <p>Washington</p>
//                   <p>Phoenix</p>
//                   <p>Chicago</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>