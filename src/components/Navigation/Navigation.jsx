import { Container, Navbar, Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import routes from "../../routes/routes.json";
import styles from "../Navigation/Navigation.module.css";

const Navigation = ()=>{

  const linkClasses = ({ isActive }) =>
    isActive ? styles.activeLink : styles.linkStyle;
  
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#">Thali</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
            <NavLink to={routes.HOME} className={linkClasses}>Home</NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink to={routes.MENU} className={linkClasses}>Menu</NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink to={routes.CHECKOUT} className={linkClasses}>Cart</NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;