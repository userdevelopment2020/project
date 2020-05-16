import React from "react";
import "./style.scss";

class Footer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<>
				<footer className="footer_wrap">
				    <div className="container">
				    	<div className="row">
					    	<div className="col-md-12">
						    	<div className="footer_main_wrap">
						    		<ul>
						    			<li>
						    				<div className="first_div_wrap">
						    					<h6>⦃pi⦄</h6>
						    					<p>Address: Lorem Iposum, no. 14</p>
						    					<p>Phone Number: (800)7775555744</p>
						    					<p>Support@Mywebsite.com</p>
						    				</div>
						    			</li>
						    			<li>
						    				<div className="list_footer">
						    					<p>Product</p>
						    					<p>Home</p>
						    					<p>Solution</p>
						    					<p>Tecnology</p>
						    				</div>
						    			</li>
						    			<li>
						    				<div className="list_footer">
						    					<p>Company</p>
						    					<p>Home</p>
						    					<p>Solution</p>
						    					<p>Tecnology</p>
						    				</div>
						    			</li>
						    			<li>
						    				<div className="list_footer">
						    					<p>Resources</p>
						    					<p>Terms</p>
						    					<p>Privacy</p>
						    					<p>Cookies</p>
						    				</div>
						    			</li>
						    			<li>
						    				<div className="list_footer">
						    					<p>Social</p>
						    					<p>Linkedin</p>
						    					<p>Facebook</p>
						    					<p>Twitter</p>
						    				</div>
						    			</li>
						    		</ul>
				    				<div><button className="btn btn_purpel btn_footer">Get started with ⦃pi⦄</button></div>
						    	</div>
					    	</div>
				    	</div>
				    </div>
				</footer>
			</>
		);
	}
}
export default Footer