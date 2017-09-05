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
        <section className="row">
          <div className="col-md-12 footer-section">         
            <div className="col-md-6 routes">
              <h3 style={style.padding}>2017 - 2018 public <code>beta</code> routes</h3>
              <p>Edmonton      - Vancouver</p>
              <p>Toronto       - Montreal</p>
              <p>Ottawa        - Toronto</p>
              <p>Montreal      - Niagara Falls</p>
              <p>Niagara Falls - Ottawa</p>
            </div>
            <div className="col-md-6">
              <h3 style={style.padding}>2018 Destinations</h3>
              <div className="row destination-list">
                <div className="col-md-6">
                  <p>New York</p>
                  <p>San Diego</p>
                  <p>Orlando</p>
                  <p>Philadelphia</p>
                  <p>Los Angeles</p>
                  <p>San Francisco</p>
                </div>
                <div className="col-md-6">
                  <p>Las Vegas</p>
                  <p>Boston</p>
                  <p>Atlanta</p>
                  <p>Washington</p>
                  <p>Phoenix</p>
                  <p>Chicago</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
  }
}

export default FooterSection