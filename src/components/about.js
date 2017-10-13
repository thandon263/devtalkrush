import React, { Component } from 'react'

const style = {
    border: {
        borderRight: '.4px solid #E0E0E0'
    },
    banner: {
        position: 'relative',
        top: '10px'
    },
    padding: {
        padding: '40px'
    },
    textAlignLeft: {
        textAlign: 'left'
    },
    textAlign: {
        position: 'relative',
        top: '16px'
    }
}

export default class Work extends Component {
  constructor(props) {
      super(props)
      this.state = {
        picture: props.picture,
        movie: props.movie,
        location: props.location,
        title: props.title,
        content: props.content
      }
  }

  render() {
    return (
        <section className="cd-container right">
            <div className="cd-timeline-block">
                <div className={this.props.className}>
                    <img src={this.props.image} alt="Picture"/>
                </div>

                <div id="#works" className="cd-timeline-content">
                    <h2>{this.state.title}</h2>
                    <p>{this.state.content}</p>
                    <div>{this.props.children}</div>
                </div>
            </div>
        </section>
    )
  }
}


