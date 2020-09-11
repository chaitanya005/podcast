import React from "react";
import Headroom from "headroom.js";
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-area">
          <Navbar
            className="navbar-main  header"
            expand="lg"
            style={{ backgroundColor: "black" }}
            id="navbar-main"
          >
            <Container>
              <a class="nav-brand" href="/">
                <img
                  src="/img/core-img/Exploiting_logo.png"
                  alt="Teja Kummarikuntla"
                  height="100"
                  width="200"
                />
              </a>

              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <Nav
                  className="align-items-lg-center ml-lg-auto"
                  navbar
                  style={{ backgroundColor: "black" }}
                >
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="/"
                      target="_self"
                      id="tooltip333589074"
                      style={{ color: "white" }}
                    >
                      HOME
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="/episodes/all"
                      id="tooltip356693867"
                      target="_self"
                      style={{ color: "white" }}
                    >
                      EPISODES
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="/newsletter"
                      target="_blank"
                      id="tooltip184698705"
                      target="_blank"
                      style={{ color: "white" }}
                    >
                      NEWSLETTER
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="/team"
                      target="_blank"
                      id="tooltip184698705"
                      target="_self"
                      style={{ color: "white" }}
                    >
                      TEAM
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="/sponsor"
                      id="tooltip112445449"
                      style={{ color: "white" }}
                    >
                      SUPPORT US
                    </NavLink>
                    {/*<UncontrolledTooltip delay={0} target="tooltip112445449">
                      Star us on Github
                    </UncontrolledTooltip> */}
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar"
                      target="_blank"
                    >
                      <a
                        href="#footer"
                        class="btn confer-btn mt-3 mt-lg-0 ml-3 ml-lg-5"
                      >
                        PING<i class="zmdi zmdi-long-arrow-right"></i>
                      </a>
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
