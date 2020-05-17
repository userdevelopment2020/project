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
								<button className="btn btn_yellow">Try it now! <i className="fa fa-arrow-right"></i></button>
								<p className="bottom_text">This allows enterprises to automatically exchange digital assets between each other, in a highly secure way.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="bottom_top_section">
					<div className="container">
						<div className="row">
							<div className="wrapper">
								<p>We work well with</p>
								<img src="images/sap_icon.png" alt="" />
								<img src="images/zoho_icon.png" alt="" />
								<img src="images/tally_icon.png" alt="" />
								<img src="images/quick_icon.png" alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="time_tracking_wrapper">
					<div className="container-fluid">
						<div className="main_wrap">
							<div className="left_wrap">
								<h6>REAL TIME TRACKING</h6>
								<h1>Achieving complete trade lifecycle transparency</h1>
								<p>Our platform was designed to provide all trading partners with real-time data driven trade lifecycle tracking and monitoring, enhancing collaboration, reducing risks and building trust.</p>
							</div>
							<div className="right_wrap">
								<img src="images/Middle_image.png" alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="reporting_wrapper">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="img_wrap">
									<img src="images/Graph_image.png" alt="" />
								</div>
							</div>
							<div className="col-md-6">
								<div className="content_brief">
									<h6>REPORTING</h6>
									<h1>A bird’s-eye view of your business transactions</h1>
									<p>Check the status of your transactions, get a complete breakdown of your cashflow and gain relevant business insights to smoothly manage your finances.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="use_cases_wrapper">
					<div className="container">
						<div className="sub_wrap">
							<h6>USE CASES</h6>
							<h1>Param digital invoicing in a nutshell</h1>
							<p>⦃pi⦄ is an all-in-one collaborative platform that enables enterprises and financial institutions to manage inventories and workflows, streamline procure-to-pay invoicing, handle expenses and track end-to-end supply chain performance in real-time.</p>
							<img src="images/SolutionsDiagram.png" alt="" />
							<div className="btn_wrapper">
								<button className="btn btn_purpel">Get Started</button>
								<button className="btn btn_dark">View Documentation</button>
							</div>
						</div>
					</div>
				</div>
				<div className="security_wrapper">
					<div className="container-fluid">
						<div className="main_wrap">
							<div className="left_wrap">
								<h6>SECURITY</h6>
								<h1>Building trust in data democracy</h1>
								<p>Our enterprise-grade secure document sharing platform allows companies to instantly share documents over a new type of business oriented decentralized collaboration network.</p>
								<button className="btn btn_purpel">Learn More</button>
							</div>
							<div className="right_wrap">
								<img src="images/security.png" alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="main_feature_wrapper">
					<div className="container">
						<div className="content_head">
							<h6>MAIN FEATURES</h6>
							<h1>Gather your finances in one place</h1>
						</div>
						<div className="box_wrapper">
							<div className="box_container">
								<img src="/images/Vendor&cust_onboard-01.png" alt="" />
								<p>Vendors & Customers Onboarding</p>
								<div className="image_change">
									<img src="/images/Vendor&cust_onboard-gold.png" alt="" />
									<p>Vendors & Customers Onboarding</p>
								</div>
							</div>
							<div className="box_container pad_in">
								<img src="/images/Contract-01.png" alt="" />
								<p>Contracts Management</p>
								<div className="image_change pad_in">
									<img src="/images/Contract-gold.png" alt="" />
									<p>Contracts Management</p>
								</div>
							</div>
							<div className="box_container">
								<img src="/images/Order-01.png" alt="" />
								<p>Order Life-cycle Management</p>
								<div className="image_change">
									<img src="/images/Order-gold.png" alt="" />
									<p>Order Life-cycle Management</p>
								</div>
							</div>
							<div className="box_container pad_in">
								<img src="/images/Purchase_order-01.png" alt="" />
								<p>ePoD Establishment</p>
								<div className="image_change pad_in">
									<img src="/images/Purchase_order-gold.png" alt="" />
									<p>ePoD Establishment</p>
								</div>
							</div>
							<div className="box_container">
								<img src="/images/Invoice-01.png" alt="" />
								<p>Automated Invoice Validation</p>
								<div className="image_change">
									<img src="/images/Invoice-gold.png" alt="" />
									<p>Automated Invoice Validation</p>
								</div>
							</div>
							<div className="box_container pad_in last_child">
								<img src="/images/Instant-01.png" alt="" />
								<p>Instant Reconciliation</p>
								<div className="image_change pad_in">
									<img src="/images/Instant-glod.png" alt="" />
									<p>Instant Reconciliation</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-5">
								<div className="list_wrap">
									<p>Generate automated invoices based on your contractual agreements and share them with your globally distributed client base.</p>
									<p>✓ validate the requirement for payment</p>
									<p>✓ minimize the chances of payment refusal</p>
									<p>✓ reduce costs</p>
								</div>
							</div>
							<div className="col-md-7">
								<img src="/images/Tab.png" className="img_tab" alt="" />
							</div>
						</div>
						<div><button className="btn btn_yellow">Try it now! <i className="fa fa-arrow-right"></i></button></div>
					</div>
				</div>
				<div className="benefit_wrapper">
					<div className="container-fluid">
						<div className="main_wrap">
							<div className="left_wrap">
								<div className="box_wrap">
									<div className="box_container">
									<img src="/images/Integration.png" alt="" />
									<p>SEAMLESS INTEGRATION</p>
									</div>
									<div className="box_container pad_in">
										<img src="/images/Workflow.png" alt="" />
										<p>WORKFLOW AUTOMATION</p>
									</div>
									<div className="box_container">
										<img src="/images/Instant_recon-01.png" alt="" />
										<p>INSTANT RECONCILIATION</p>
									</div>
									<div className="box_container">
										<img src="/images/Supply_chain-01.png" alt="" />
										<p>SYPPLY CHAIN TRACEASBILITY</p>
									</div>
									<div className="box_container pad_in">
										<img src="/images/Secure_sharing-01.png" alt="" />
										<p>SECURE SHARING</p>
									</div>
									<div className="box_container">
										<img src="/images/Easy_access-01.png" alt="" />
										<p>EASY ACCESS</p>
									</div>
								</div>
							</div>
							<div className="right_wrap">
								<h6>BENEFITS</h6>
								<h1>Enjoy the perks of business collaboration</h1>
								<p>With ⦃pi⦄you can now automate invoice processing, compliance monitoring and reconciliation, so you can put your finances on autopilot. Our solution acts like a magnet that integrates and connects buyers, suppliers and logistics in one place, providing everyone with real-time access to their activity in an extremely secure environment.</p>
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
								</div>
								<div className="footer_top_image">
									<div className="content_wrapper">
										<button className="btn btn_purpel">
											Try it now!
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Solutions;
