import React from "react";
import { Link } from 'react-router-dom'
import { Menu, Drawer } from 'antd';
import "./style.scss";

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false
		};
	}
	showDrawer = () => {
	    this.setState({
	      visible: true,
	    });
	  };

	  onClose = () => {
	    this.setState({
	      visible: false,
	    });
	  };

	render() {
		return (
			<>
				<div className="header">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<Menu
						          theme="light"
						          mode="horizontal"
						          overflowedIndicator={<i className="fa fa-list"></i>}
						          className="header_wrap"
						        >
						          <Menu.Item key="/a" className="left_menu no_border" >
						            <Link to="/">
						              <p className="menu_company">⦃param⦄.network</p>
						            </Link>
						          </Menu.Item>
						          <Menu.Item key="/b">
						            <Link to="/">
						              <p>Home</p>
						            </Link>
						          </Menu.Item>
						          <Menu.Item key="/c">
						            <Link to="/solutions">
						              <p>Solutions</p>
						            </Link>
						          </Menu.Item>
						          <Menu.Item key="/d">
						            <Link to="/">
						              <p>Technology</p>
						            </Link>
						          </Menu.Item>
						          <Menu.Item key="/e">
						            <Link to="/">
						              <p>Team</p>
						            </Link>
						          </Menu.Item>
						          <Menu.Item key="/f" className="no_border" >
						            <Link to="/">
						            	<button className="btn btn_purpel">Get Started</button>
						            </Link>
						          </Menu.Item>
						        </Menu>
							</div>
						</div>
					</div>
					<div className="mobile_header">
						<div className="mobile_sub_wrapper">
							<div className="left_wrapper">
								<button onClick={this.showDrawer} className="btn btn_drawer"><i className="fa fa-list"></i></button>
								<p className="company_name">⦃param⦄.network</p>
							</div>
							<button className="btn btn_purpel">Get Started</button>
							<Drawer
					          title={<h1 className="menu_drawer">Menu</h1>}
					          placement="left"
					          closable={false}
					          onClose={this.onClose}
					          visible={this.state.visible}
					          className="drawer_menu"
					        >
				          	<Link to="/">
				              	<p>Home</p>
				            </Link>
				          	<Link to="/solutions">
				              	<p>Solutions</p>
				            </Link>
				          	<Link to="/">
				              	<p>Technology</p>
				            </Link>
				            <Link to="/">
				              	<p>Team</p>
				            </Link>
					        </Drawer>
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default Header