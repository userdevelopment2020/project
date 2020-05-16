import React from "react";
import "./style.scss";

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="home_page_wrapper">
				<div className="top_section_home">
					<div className="container">
						<div className="top_wrapper">
							<div className="row">
								<div className="col-md-12">
									<h1>Powering the new business collaboration</h1>
									<p>Accelerate AP/AR processes with a management solution that provides 360-degree visibility over the order lifecycle.</p>
									<button className="btn btn_white">Start now!</button>
								</div>
							</div>
							<img src="images/Lappy.png" className="lappy_img" alt="" />
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="bottom_wrapper">
									<h6>For Teams & Enterprises</h6>
									<p>Improve collaboration, productivity and profitability with our <span>blockchain-powered</span> modular workflow automation platform.</p>
								</div>
								<div className="feature_wrap">
									<p>Featured in</p>
									<img src="images/inc42_icon.png" alt="" />
									<img src="images/yourstory_icon.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
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
					</div>
					<img src="/images/composition1-color2-01.png" alt="" />
				</div>
				<div className="drak_main_wrap workflow_wrap">
					<div className="container">
						<p className="top_text">Get started with ⦃pi⦄</p>
						<div className="sub_wrap">
							<div className="left_wrap">
								<h1>And watch your work flow.</h1>
								<p>⦃pi⦄ is a collaborative process management platform for companies interacting with suppliers and carriers that uniquely combines procure-to-pay and order-to-cash business processes, enabling digitized transactions across the supply chain.</p>
								<button className="btn btn_purpel">Get Started</button>
							</div>
							<div className="right_wrap">
								<div className="box_main_wrapper">
									<div className="box_mobile_wrapper">
										<div className="box_container">
											<img src="/images/Vendor&cust_onboard-01.png" alt="" />
											<p>Vendors & Customers Onboarding</p>
										</div>
										<div className="box_container pad_in">
											<img src="/images/Contract-01.png" alt="" />
											<p>Contracts Management</p>
										</div>
										<div className="box_container">
											<img src="/images/Order-01.png" alt="" />
											<p>Order Life-cycle Management</p>
										</div>
										<div className="box_container pad_in">
											<img src="/images/Purchase_order-01.png" alt="" />
											<p>ePoD Establishment</p>
										</div>
										<div className="box_container">
											<img src="/images/Invoice-01.png" alt="" />
											<p>Automated Invoice Validation</p>
										</div>
										<div className="box_container pad_in last_child">
											<img src="/images/Instant-01.png" alt="" />
											<p className="test_color">Instant Reconciliation</p>
										</div>
									</div>
									<img src="images/Tab.png" className="tab_img" alt="" />
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
											<img src="/images/Collab-01.png" alt="" />
											<p>SEAMLESS COLLABORATION</p>
										</div>
										<div className="box_container pad_in">
											<img src="/images/Reduce_cost-01.png" alt="" />
											<p>REDUCES COSTS</p>
										</div>
										<div className="box_container">
											<img src="/images/Instant_recon-01.png" alt="" />
											<p>INSTANT RECONCILIACION</p>
										</div>
										<div className="box_container">
											<img src="/images/Improve_productivity-01.png" alt="" />
											<p>IMPROVED PRODUCTIVITY</p>
										</div>
										<div className="box_container pad_in">
											<img src="/images/Data_Privacy-01.png" alt="" />
											<p>FULL DATA PRIVACY</p>
										</div>
										<div className="box_container">
											<img src="/images/Track-in-trace-01.png" alt="" />
											<p>INSTANT TRACK-N-TRACE</p>
										</div>
										<div className="box_container">
											<img src="/images/Trust-01.png" alt="" />
											<p>INCREASED TRUST IN TRADE</p>
										</div>
										<div className="box_container">
											<img src="/images/Cashflow-01.png" alt="" />
											<p>IMPROVED CASHFLOW</p>
										</div>
									</div>
									<div className="btn_wrap">
										<button className="btn btn_dark">Documentation</button>
										<button className="btn btn_purpel">How it Works</button>
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
						<img src="images/Image_middle.png" className="side_img" alt="" />
					</div>
					<div className="mobile_img_wrapper"></div>
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
								<button className="btn btn_purpel dektop_btn">Learn more</button>
							</div>
						</div>
					</div>
				</div>
				<div className="btn_mobile"><button className="btn btn_purpel mobile_btn">Learn more</button></div>
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
						<img src="/images/Image_bottom.png" alt="" />
					</div>
				</div>
			</div>
		);
	}
}
export default Home;
