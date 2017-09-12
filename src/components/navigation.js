import React, { Component } from 'react'

const style = {
    logo: {
        color: '#FFFFFF',
        fontSize: '25pt'
    },
    logoText: {
        textShadow: '0 2px 6px #E91E63'
    },
    padding: {
        padding: '0 12px',
        position: 'relative',
        top: '-5px'
    }
}

export default class Navigation extends Component {
  render() {
    return (
        <header id="home" className="header navbar-fixed-top">
            <div className="navbar navbar-default main-menu">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a  href="/" className="navbar-brand"><span style={style.logo}><span style={style.padding}><img src="images/reverse.png" width="50"/></span>Zerojet</span></a>   
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#downloadApps" className="">Download</a></li>
                            <li><a href="/faq" className="">FAQ</a></li>
                            <li><a href="https://www.facebook.com/goZerojet/" target="_blank" className="">Contact Us</a></li>
                            <li><a href="https://www.facebook.com/goZerojet/"><i className="fa fa-facebook"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div> 
        </header>
    )
  }
}