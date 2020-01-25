import React from 'react';
import { Header, Sidenav, Nav, Dropdown, Icon, Avatar, Container, Sidebar, Content, Navbar } from 'rsuite';
import { ComingSoon } from './views';

 import {
 	BrowserRouter as Router,
 	Switch,
 	Route,
 	Link
   } from "react-router-dom";

const headerStyles = {
  fontSize: 16,
  height: "3.8em",
  background: '#34c3ff',
  color: ' #fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
};

const iconStyles = {
  width: 56,
  height: 56,
  lineHeight: '56px',
  textAlign: 'center'
};

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Navbar.Body>
        <Nav>
          <Dropdown
            placement="topStart"
            trigger="click"
            renderTitle={children => {
              return <Icon style={iconStyles} icon="cog" />;
            }}
          >
            <Dropdown.Item>Help</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </Nav>

        <Nav pullRight>
          <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
            <Icon icon={expand ? 'angle-left' : 'angle-right'} />
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: true
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({
      expand: !this.state.expand
    });
  }
  render() {
    const { expand } = this.state;
    return (
      <div className="show-fake-browser sidebar-page">
        <Container>
          <Sidebar
            style={{ display: 'flex', flexDirection: 'column' }}
            width={expand ? 260 : 61}
            collapsible
          >
            <Sidenav.Header>
              <div style={headerStyles}>
								{
									//<Icon icon="logo-analytics" size="lg" style={{ verticalAlign: 0 }} />
								}
								<Avatar circle src={require("./images/drawn_icon.jpg")} style={{ verticalAlign: 0 }} size={"lg"} />
                <span style={{ marginLeft: 12, position: "fixed", top: "1.5%", display: expand ? '' : 'none' }}> WillyBDev</span>
              </div>
            </Sidenav.Header>
            <Sidenav
              expanded={expand}
              defaultOpenKeys={['1']}
              appearance="subtle"
            >
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
								</Dropdown>
							</Nav>
              </Sidenav.Body>
            </Sidenav>
            <NavToggle expand={expand} onChange={this.handleToggle} />
          </Sidebar>
          <Container>
							<Router>
								<Switch>
									<Route exact path="/">
										<Header>
											<h2>Page Title</h2>
										</Header>
										<Content>
											<ComingSoon />
										</Content>
									</Route>
								</Switch>
							</Router>
          </Container>
        </Container>
      </div>
    );
  }
}
