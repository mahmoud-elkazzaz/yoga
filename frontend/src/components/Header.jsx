import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import "./../styles/header.scss";
import { Link } from "react-router-dom";
import logo_slogan from "./../assets/logo_slogan.png";
import favouriteIcon from "./../assets/favourite.svg";
import profileIcon from "./../assets/profile.svg";
import logoutIcon from "./../assets/logout.svg";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__nav__brand">
          {userInfo ? (
            <Link to="/">
              <img
                className="header__nav__brand__logo"
                src={logo_slogan}
                alt="Flexy Mind Logo"
              />
            </Link>
          ) : (
            <Link to="/login">
              <img
                className="header__nav__brand__logo"
                src={logo_slogan}
                alt="Flexy Mind Logo"
              />
            </Link>
          )}
        </div>
        {userInfo && (
          <div className="header__nav__menu__container">
            <ul className="header__nav__menu">
              <li>
                <Link to="/">
                  <img
                    className="header__nav__menu__icon"
                    src={favouriteIcon}
                    alt="favourite"
                  />
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <img
                    className="header__nav__menu__icon"
                    src={profileIcon}
                    alt="profile"
                  />
                </Link>
              </li>
              <li onClick={logoutHandler}>
                <img
                  className="header__nav__menu__icon header__nav__menu__icon--logout"
                  src={logoutIcon}
                  alt="logout"
                />
              </li>
            </ul>
          </div>
        )}
      </nav>
      {/* <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          {userInfo ? (
            <>
              <LinkContainer to="/">
                <Navbar.Brand>Flexy Mind</Navbar.Brand>
              </LinkContainer>
            </>
          ) : (
            <>
              <LinkContainer to="/login">
                <Navbar.Brand>Flexy Mind</Navbar.Brand>
              </LinkContainer>
            </>
          )}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {userInfo ? (
                <>
                  <NavDropdown title={userInfo.name} id="username">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <FaSignInAlt /> Sign In
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>
                      <FaSignOutAlt /> Sign Up
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </header>
  );
};

export default Header;
