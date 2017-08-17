import React, { Component } from 'react'

class Faq extends Component {
  render() {
    return (
      <div className="container">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2"/>
          <span className="input-group-addon" id="basic-addon2">@example.com</span>
        </div>
      </div>
    )
  }
}

export default Faq