import { Navbar, Container, Nav } from "react-bootstrap"
import { IoIosSearch } from "react-icons/io"
import { FaRegBell } from "react-icons/fa"
import { FaRegUserCircle } from "react-icons/fa"

const NetflixNavbar = () => {
  return (
    <>
      <Navbar expand="lg" variant="dark" className="bg-dark px-0">
        <Container fluid className="px-4">
          <Navbar.Brand href="#home">
            <img
              src="/images/logo.png"
              alt="netflix_logo"
              className="navbar-logo img-fluid"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <Nav.Link href="#home" className="active">
                  Home
                </Nav.Link>
                <Nav.Link href="#link">TV Shows</Nav.Link>
                <Nav.Link href="#link">Movies</Nav.Link>
                <Nav.Link href="#link">Recently Added</Nav.Link>
                <Nav.Link href="#link">My List</Nav.Link>
              </div>

              <div className="d-flex align-items-center">
                <IoIosSearch color="white" size={20} cursor="pointer" />
                <a className="text-white mx-2 text-decoration-none">KIDS</a>
                <FaRegBell color="white" size={20} cursor="pointer" />
                <FaRegUserCircle
                  color="white"
                  className="ms-3"
                  size={22}
                  cursor="pointer"
                />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NetflixNavbar
