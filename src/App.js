import React, { Component } from 'react';
import './App.css';

import 'rsuite/dist/styles/rsuite-default.css';
import { Sidenav, Nav, Dropdown, Icon, Avatar } from 'rsuite';

const styles = {
  width: 150,
  display: 'inline-table',
	marginRight: 10,
};

const SidenavInstance = ({ ...props }) => {
	return (
		<div style={styles}>
			<Sidenav style={{ paddingTop: ".5rem" }} className="navStyle" {...props} defaultOpenKeys={['2']}>
				<Sidenav.Header style={{ marginLeft: "1rem" }}>
					<Avatar circle src={require("./images/drawn_icon.jpg")} size={"lg"} />
					<h3>WillyBDev</h3>
				</Sidenav.Header>
				<Sidenav.Body>
					<Nav className="navContainer">
						<Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />}>
							Dashboard
						</Nav.Item>
						<Dropdown eventKey="2" title="Development" icon={<Icon icon="laptop" />}>
						<Dropdown.Item eventKey="2-1">Applications</Dropdown.Item>
							<Dropdown.Item eventKey="2-2">Devices</Dropdown.Item>
							<Dropdown.Item eventKey="2-3">Resume</Dropdown.Item>
						</Dropdown>
						<Dropdown eventKey="3" title="Photography" icon={<Icon icon="camera-retro" />}>
							<Dropdown.Item eventKey="3-1">Gallary</Dropdown.Item>
							<Dropdown.Item eventKey="3-2">Current Gear</Dropdown.Item>
						</Dropdown>
						<Dropdown eventKey="4" title="Vices" icon={<Icon icon="gamepad" />}>
							<Dropdown.Item eventKey="4-1">Gaming</Dropdown.Item>
							<Dropdown.Item eventKey="4-2">Modeling</Dropdown.Item>
							<Dropdown.Item eventKey="4-3">Misc.</Dropdown.Item>
						</Dropdown>
						<div style={{ bottom: '0', position: 'fixed' }}>
							<h3>*Instert Github*</h3>
						</div>
					</Nav>
				</Sidenav.Body>
			</Sidenav>
		</div>
	);
}

class App extends Component {
	

	render() {
		return (
			<div style={{ height: "100vh" }}>
				<div style={{ width: 150 }}>
					<SidenavInstance appearance="default" />
				</div>
			</div>
		);
	}
}

export default App;