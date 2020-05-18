import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom'
import { Menu, Drawer } from 'antd';
import "./style.scss";

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false,
			routerClass: ""
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

      componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
        	let ar = ["/solutions", "/technology"]
        	let rClass = ar.includes(this.props.location.pathname) ? "white_header": ""
            this.setState({ routerClass: rClass })
        }
    }

	componentDidMount(){
		let ar = ["/solutions", "/technology"]
    	let rClass = ar.includes(this.props.location.pathname) ? "white_header": ""
        this.setState({ routerClass: rClass, activePage: this.props.location.pathname })
	}

	render() {
		const { routerClass, activePage } = this.state
		return (
			<>
				<div className={`header ${routerClass}`}>
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<Menu
						          theme="light"
						          mode="horizontal"
						          overflowedIndicator={<i className="fa fa-list"></i>}
						          className="header_wrap"
						          selectedKeys={[activePage]}
						          onSelect={item => this.setState({ activePage: item.key })}
						        >
						          <Menu.Item key="/a" className="left_menu no_border" >
						            <Link to="/">
						              <p className="menu_company">⦃param⦄.network</p>
						            </Link>
						          </Menu.Item>
						          <Menu.Item key="/">
						            <Link to="/">
						              <p>Home</p>
						            </Link>
						          </Menu.Item>
						          <Menu.Item key="/solutions">
						            <Link to="/solutions">
						              <p>Solutions</p>
						            </Link>
						          </Menu.Item>
						          <Menu.Item key="/technology">
						            <Link to="/technology">
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
								<button onClick={this.showDrawer} className="btn btn_drawer"><i className="fa fa-bars"></i></button>
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
				          	<Link to="/technology">
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
export default withRouter(Header)