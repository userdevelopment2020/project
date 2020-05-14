import React from "react";
import "./style.scss";

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<>
			<div className="light_main_wrap">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="section_title_wrap">
								<h6>FROM OPERATIONS TO FINANCE</h6>
								<h1>A better business collaboration standard</h1>
							</div>
							<div className="text_width">
								<p className="text_black">Streamlining intra-departmental and inter-business communication, automating supply-chain processes and improving cash flow in an order management environment that <span>provides utmost transparency and security.</span></p>
							</div>
						</div>
					</div>
					<img src="/images/composition1-color2-01.png" />
				</div>
			</div>
			<div className="drak_main_wrap workflow_wrap">
				<div className="container">
					<p className="top_text">Get started with pi</p>
					<div className="sub_wrap">
						<div className="left_wrap">
							<h1>And watch your work flow.</h1>
							<p>is a collaborative process management platform for companies interacting with suppliers and carriers that uniquely combines procure-to-pay and order-to-cash business processes, enabling digitized transactions across the supply chain.</p>
							<button className="btn btn_purpel">Get Started</button>
						</div>
						<div className="right_wrap">
							<div className="box_main_wrapper">
								<div className="box_container">
									<img src="/images/Vendor&cust_onboard-01.png" />
									<p>Vendors & Customers Onboarding</p>
								</div>
								<div className="box_container pad_in">
									<img src="/images/Contract-01.png" />
									<p>Contracts Management</p>
								</div>
								<div className="box_container">
									<img src="/images/Order-01.png" />
									<p>Order Life-cycle Management</p>
								</div>
								<div className="box_container pad_in">
									<img src="/images/imgpsh_fullsize_anim2.jpg" />
									<p>ePoD Establishment</p>
								</div>
								<div className="box_container">
									<img src="/images/Invoice-01.png" />
									<p>Automated Invoice Validation</p>
								</div>
								<div className="box_container pad_in last_child">
									<img src="/images/Instant-01.png" />
									<p>Instant Reconciliation</p>
								</div>
								<img src="images/Tab.png" className="tab_img" />
							</div>
						</div>
					</div>
				</div>				
			</div>
			<div className="challenges_wrap">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="challenge_sub_wrap">
								<div className="title_wrap_section">
									<h6>BENEFITS</h6>
									<h1>Tackling the most critical order management challenges.</h1>
								</div>
								<div className="text_wrapper">
									<p className="text_black"><span> Customize workflows, craft professional invoices and streamline collaboration</span> within and between organizations.</p>
								</div>
								<div className="box_wrapper">
									<div className="box_container">
										<img src="/images/Collab-01.png" />
										<p>SEAMLESS COLLABORATION</p>
									</div>
									<div className="box_container pad_in">
										<img src="/images/Reduce_cost-01.png" />
										<p>REDUCES COSTS</p>
									</div>
									<div className="box_container">
										<img src="/images/Instant_recon-01.png" />
										<p>INSTANT RECONCILIACION</p>
									</div>
									<div className="box_container">
										<img src="/images/Improve_productivity-01.png" />
										<p>IMPROVED PRODUCTIVITY</p>
									</div>
									<div className="box_container">
										<img src="/images/Data_Privacy-01.png" />
										<p>FULL DATA PRIVACY</p>
									</div>
									<div className="box_container">
										<img src="/images/Track-in-trace-01.png" />
										<p>INSTANT TRACK-N-TRACE</p>
									</div>
									<div className="box_container">
										<img src="/images/Trust-01.png" />
										<p>INCREASED TRUST IN TRADE</p>
									</div>
									<div className="box_container">
										<img src="/images/Cashflow-01.png" />
										<p>IMPROVED CASHFLOW</p>
									</div>
								</div>
								<div className="btn_wrap">
									<button className="btn btn_dark">Documentation</button>
									<button className="btn btn_purpel">Documentation</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="block_chain">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="title_wrapper">
								<h6>TECHNOLOGY</h6>
								<h1>Blockchain is at the core of Param's DNA</h1>
							</div>
							<p>We built ⦃pi⦄ on blockchain & semantic web technologies to allow enterprises safely automate the exchange of information between their teams, customers, and suppliers.</p>
						</div>
					</div>
				</div>
				<div className="img_wrapper">
					<img src="images/Image_middle.png" className="side_img" />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<ul className="list_wrap">
								<li><p><i className="fa fa-check"></i>ENHANCED LEDGER</p></li>
								<li><p><i className="fa fa-check"></i>WHATSAPP-LIKE</p></li>
								<li><p><i className="fa fa-check"></i>ZERO-CODE COLLABORATIVE</p></li>
								<li><p>FOR COMMERCE</p></li>
								<li><p>EXPERIENCE</p></li>
								<li><p>WORKFLOW CREATION</p></li>
							</ul>
							<button className="btn btn_purpel">Learn more</button>
						</div>
					</div>
				</div>
			</div>
			<div className="bottom_section">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="onetapaway_wrapper">
								<h6>ANYWHERE. ANYTIME. ANYDEVICE.</h6>
								<h1>One tap away</h1>
								<p>
									Our platform allows you to remotely
									access your workflows and documents from
									your iOS devices - mobile, tablet,
									laptop or desktop.
								</p>
								<button className="btn btn_purpel">
									Try it now!
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="img_wrap">
					<img src="/images/Image_bottom.png" />
				</div>
			</div>
			</>
		);
	}
}
export default Home;
