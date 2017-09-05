import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
    <footer>
      <div className="last-div">
			<div className="container">
				<div className="row">					
					<div className="copyright">
						&copy; 2017 Zerojet travel webpage
                        <div className="credits">
                            {/* -- 
                                All the links in the footer should remain intact. 
                                You can delete the links only if you purchased the pro version.
                                Licensing information: https://bootstrapmade.com/license/
                                Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=MeFamily
                            -- */}
                            <a href="#">Custom theme</a> by <a href="http://zerojet.com/">Zerojet Developers</a>
                        </div>
					</div>					
				
		
					<ul className="social-network">
						<li><a href="https://www.facebook.com/goZerojet/" target="_blank" data-placement="top" title="Facebook"><i className="fa fa-facebook fa-1x"></i></a></li>
						<li><a href="https://www.instagram.com/zerojet/" target="_blank" data-placement="top" title="Twitter"><i className="fa fa-instagram fa-1x"></i></a></li>
						<li><a href="#" data-placement="top" title="Google plus"><i className="fa fa-google-plus fa-1x"></i></a></li>
					</ul>
				</div>
			</div>
		</div>		
	</footer>
    )
  }
}

