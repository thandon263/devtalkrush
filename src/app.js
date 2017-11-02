import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
            <div className="sticky-nav">
            	<a id="mobile-nav" className="menu-nav" href="#menu-nav"></a>

                <div id="logo">
                	<a id="goUp" href="#home-slider" title="DevTALK | Web developer with a touch of good design">DEVTALK RUSH</a>
                </div>

                <nav id="menu">
                	<ul id="menu-nav">
                    	<li className="current"><a href="#home-slider">Home</a></li>
                        <li><a href="#work">Our Work</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
        				<li><a href="shortcodes.html" className="external">Shortcodes</a></li>
                    </ul>
                </nav>

            </div>
        </header>

        <div id="work" className="page">
        	<div className="container">

                <div className="row">
                    <div className="span12">
                        <div className="title-page">
                            <h2 className="title">Our Work</h2>
                            <h3 className="title-description">Check Out My Projects on <a href="https://www.instagram.com/officially_thando/?hl=en" target="_blank">Instagram</a>.</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                	<div className="span3">

                        <nav id="options" className="work-nav">
                            <ul id="filters" className="option-set" data-option-key="filter">
                            	<li className="type-work">Type of Work</li>
                                <li><a href="#filter" data-option-value="*" className="selected">All Projects</a></li>
                                <li><a href="#filter" data-option-value=".design">Web Development</a></li>
                                <li><a href="#filter" data-option-value=".photography">Photography</a></li>
                                <li><a href="#filter" data-option-value=".video">Video</a></li>
                            </ul>
                        </nav>

                    </div>

                    <div className="span9">
                    	<div className="row">
                        	<section id="projects">
                            	<ul id="thumbs">


                                	<li className="item-thumbs span3 design">

                                    	<a className="hover-wrap fancybox" data-fancybox-group="gallery" title="The City" href="/_include/img/work/full/image-01-full.jpg">
                                        	<span className="overlay-img"></span>
                                            <span className="overlay-img-thumb font-icon-plus"></span>
                                        </a>

                                        <img src="/_include/img/work/thumbs/image-01.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                                    </li>



                                	<li className="item-thumbs span3 design">

                                    	<a className="hover-wrap fancybox" data-fancybox-group="gallery" title="The Office" href="/_include/img/work/full/image-02-full.jpg">
                                        	<span className="overlay-img"></span>
                                            <span className="overlay-img-thumb font-icon-plus"></span>
                                        </a>

                                        <img src="/_include/img/work/thumbs/image-02.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                                    </li>



                                	<li className="item-thumbs span3 photography">

                                    	<a className="hover-wrap fancybox" data-fancybox-group="gallery" title="The Mountains" href="/_include/img/work/full/image-03-full.jpg">
                                        	<span className="overlay-img"></span>
                                            <span className="overlay-img-thumb font-icon-plus"></span>
                                        </a>

                                        <img src="/_include/img/work/thumbs/image-03.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                                    </li>



                                	<li className="item-thumbs span3 video">

                                    	<a className="hover-wrap fancybox-media" data-fancybox-group="video" title="Video Content From Vimeo" href="http://vimeo.com/51460511">
                                        	<span className="overlay-img"></span>
                                            <span className="overlay-img-thumb font-icon-plus"></span>
                                        </a>

                                        <img src="/_include/img/work/thumbs/image-08.jpg" alt="Video"/>
                                    </li>



                                	<li className="item-thumbs span3 photography">

                                    	<a className="hover-wrap fancybox" data-fancybox-group="gallery" title="The Sea" href="/_include/img/work/full/image-04-full.jpg">
                                        	<span className="overlay-img"></span>
                                            <span className="overlay-img-thumb font-icon-plus"></span>
                                        </a>

                                        <img src="/_include/img/work/thumbs/image-04.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                                    </li>



                                	<li className="item-thumbs span3 photography">

                                    	<a className="hover-wrap fancybox" data-fancybox-group="gallery" title="Clouds" href="/_include/img/work/full/image-05-full.jpg">
                                        	<span className="overlay-img"></span>
                                            <span className="overlay-img-thumb font-icon-plus"></span>
                                        </a>

                                        <img src="/_include/img/work/thumbs/image-05.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                                    </li>



                                	<li className="item-thumbs span3 video">

                                    	<a className="hover-wrap fancybox-media" data-fancybox-group="video" title="Video Content From Vimeo" href="http://vimeo.com/50834315">
                                        	<span className="overlay-img"></span>
                                            <span className="overlay-img-thumb font-icon-plus"></span>
                                        </a>

                                        <img src="/_include/img/work/thumbs/image-09.jpg" alt="Video"/>
                                    </li>



                                	<li className="item-thumbs span3 design">

                                    	<a className="hover-wrap fancybox" data-fancybox-group="gallery" title="The Dark" href="/_include/img/work/full/image-06-full.jpg">
                                        	<span className="overlay-img"></span>
                                            <span className="overlay-img-thumb font-icon-plus"></span>
                                        </a>

                                        <img src="/_include/img/work/thumbs/image-06.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                                    </li>



                                	<li className="item-thumbs span3 design">

                                    	<a className="hover-wrap fancybox" data-fancybox-group="gallery" title="The Beach" href="/_include/img/work/full/image-07-full.jpg">
                                        	<span className="overlay-img"></span>
                                            <span className="overlay-img-thumb font-icon-plus"></span>
                                        </a>

                                        <img src="/_include/img/work/thumbs/image-07.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis." />
                                    </li>

                                </ul>
                            </section>

                    	</div>
                    </div>
                </div>

            </div>
        </div>



        <div id="about" className="page-alternate">
        <div className="container">

            <div className="row">
                <div className="span12">
                    <div className="title-page">
                        <h2 className="title">About Us</h2>
                        <h3 className="title-description">Learn About My Team &amp; Culture.</h3>
                    </div>
                </div>
            </div>



            <div className="row">


            	<div className="span4 profile">
                	<div className="image-wrap">
                        <div className="hover-wrap">
                            <span className="overlay-img"></span>
                            <span className="overlay-text-thumb">Founder/CTO</span>
                        </div>
                        <img src="/_include/img/profile/profile-01.jpg" alt="John Doe" />
                    </div>
                    <h3 className="profile-name">Thando Ncube</h3>
                    <p className="profile-description">Web development is the creation of a plan or convention for the construction of an object or a system as in architectural blueprints, engineering drawings, business processes, circuit diagrams and sewing patterns. <a href="#">Read more</a>.
                    The artistry of understanding design and implementing it on usable informative art keep eager to learn a lot more. I proactively challenge myself to think and see beyond the lines of code.</p>

                    <div className="social">
                    	<ul className="social-icons">
                        	<li><a href="https://twitter.com/thandon20"><i className="font-icon-social-twitter"></i></a></li>
                            <li><a href="https://www.facebook.com/thandothedev/"><i className="font-icon-social-facebook"></i></a></li>
                        </ul>
                    </div>
                </div>



            	<div className="span4 profile">
                	<div className="image-wrap">
                        <div className="hover-wrap">
                            <span className="overlay-img"></span>
                            <span className="overlay-text-thumb">Creative Director</span>
                        </div>
                        <img src="/_include/img/profile/profile-02.jpg" alt="Jane Helf" />
                    </div>
                    <h3 className="profile-name">Jane Helf</h3>
                    <p className="profile-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat <a href="#">hendrerit dictum</a>.
                    Praesent porta, purus eget sagittis imperdiet, nulla mi ullamcorper metus, id hendrerit metus diam vitae est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                    <div className="social">
                    	<ul className="social-icons">
                        	<li><a href="#"><i className="font-icon-social-twitter"></i></a></li>
                            <li><a href="#"><i className="font-icon-social-email"></i></a></li>
                        </ul>
                    </div>
                </div>


            	<div className="span4 profile">
                	<div className="image-wrap">
                        <div className="hover-wrap">
                            <span className="overlay-img"></span>
                            <span className="overlay-text-thumb">Lead Designer</span>
                        </div>
                        <img src="/_include/img/profile/profile-03.jpg" alt="Joshua Insanus"/>
                    </div>
                    <h3 className="profile-name">Joshua Insanus</h3>
                    <p className="profile-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat <a href="#">hendrerit dictum</a>.
                    Praesent porta, purus eget sagittis imperdiet, nulla mi ullamcorper metus, id hendrerit metus diam vitae est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                    <div className="social">
                    	<ul className="social-icons">
                        	<li><a href="#"><i className="font-icon-social-twitter"></i></a></li>
                            <li><a href="#"><i className="font-icon-social-linkedin"></i></a></li>
                            <li><a href="#"><i className="font-icon-social-google-plus"></i></a></li>
                            <li><a href="#"><i className="font-icon-social-vimeo"></i></a></li>
                        </ul>
                    </div>
                </div>


            </div>

        </div>
        </div>




        <div id="contact" className="page">
        <div className="container">

            <div className="row">
                <div className="span12">
                    <div className="title-page">
                        <h2 className="title">Get in Touch</h2>
                        <h3 className="title-description">I'm currently accepting new client questions. I'm look forward to hearing you.</h3>
                    </div>
                </div>
            </div>




            <div className="row">
            	<div className="span9">
                <form id="contact-form" className="contact-form" method="post" action="ncubethando20@gmail.com">
                    <p className="contact-name">
                      <input id="contact_name" type="text" onChange={this.updateMessageName} placeholder="Full Name" value="" name="name" />
                      </p>
                      <p className="contact-email">
                        <input id="contact_email" type="text" onChange={this.updateMessageEmail} placeholder="Email Address" value="" name="email" />
                      </p>
                      <p className="contact-message">
                        <textarea id="contact_message" placeholder="Your Message" onChange={this.updateMessage} name="message" rows="15" cols="40"></textarea>
                      </p>
                      <p className="contact-submit">
                        <a id="contact-submit" className="submit" onClick={this.submitMessage} href="#">Send Your Email</a>
                      </p>

                      <div id="response">

                      </div>
                  </form>
                  {/* This is the component for the email system

                      <Email_Template />

                  */}


                </div>

                <div className="span3">
                	<div className="contact-details">
                		<h3>Contact Details</h3>
                        <ul>
                            <li><a href="mailto:ncubethando20@gmail.com">ncubethando20@gmail.com</a></li>
                            <li>(647) 529-7303</li>
                            <li>
                                Development Studio
                                <br/>
                                Toronto, Ontario
                                <br/>
                                Canada
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        </div>



        <div id="social-area" className="page">
        	<div className="container">
            	<div className="row">
                    <div className="span12">
                        <nav id="social">
                            <ul>
                                <li><a href="https://twitter.com/thandon20" title="Follow Me on Twitter" target="_blank"><span className="font-icon-social-twitter"></span></a></li>
                                <li><a href="https://www.facebook.com/thandothedev/" title="Follow Me on Facebook" target="_blank"><span className="font-icon-social-facebook"></span></a></li>
                                <li><a href="https://plus.google.com/111881825768554516801" title="Follow Me on Google Plus" target="_blank"><span className="font-icon-social-google-plus"></span></a></li>
                                <li><a href="http://www.linkedin.com/in/thando-ncube" title="Follow Me on LinkedIn" target="_blank"><span className="font-icon-social-linkedin"></span></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>



        <footer>
        	<p className="credits">&copy;2017 DevTalk Rush. Crafted by <a href="#" title="Thando Ncube | Responsive Web Application development">Thando</a></p>
        </footer>



        <a id="back-to-top" href="#">
        	<i className="font-icon-arrow-simple-up"></i>
        </a>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
