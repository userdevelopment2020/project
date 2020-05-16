import React from "react";
import "./style.scss";

class Solutions extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="solution_page_wrapper">
				<div className="top_section_solution">
					<div className="container-fluid">
						<div className="left_wrap">
							<img src="/images/Top_image.png" alt="" />
						</div>
						<div className="right_wrap">
							<div className="content_wrap">
								<h1>Multiple workflows.</h1>
								<h1>One workspace.</h1>
								<p className="top_text">⦃pi⦄ is a blockchain-powered, collaborative digital invoicing platform that gathers all workflows attached to a particular project to the same invoice.</p>
								<button className="btn btn_yellow">Try it now! <i className="fas fa-arrow-right"></i></button>
								<p>This allows enterprises to automatically exchange digital assets between each other, in a highly secure way.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Solutions;
