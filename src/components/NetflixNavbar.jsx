import { Navbar, Container, Nav } from "react-bootstrap"
import { IoIosSearch } from "react-icons/io"
import { FaRegBell } from "react-icons/fa"
import { FaRegUserCircle } from "react-icons/fa"

const NetflixNavbar = () => {
  return (
    <>
      <Navbar expand="md" variant="dark" className="bg-dark px-0">
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
            <Nav className="me-auto flex-column flex-md-row">
              <Nav.Link href="#home" className="active">
                Home
              </Nav.Link>
              <Nav.Link href="#link">TV Shows</Nav.Link>
              <Nav.Link href="#link">Movies</Nav.Link>
              <Nav.Link href="#link">Recently Added</Nav.Link>
              <Nav.Link href="#link">My List</Nav.Link>
            </Nav>
            <Nav className="ms-auto d-none d-md-flex align-items-center gap-3">
              <Nav.Link href="#search" className="p-0">
                <IoIosSearch color="white" size={20} cursor="pointer" />
              </Nav.Link>
              <Nav.Link href="#kids" className="text-white p-0">
                KIDS
              </Nav.Link>
              <Nav.Link href="#notifications" className="p-0">
                <FaRegBell color="white" size={20} cursor="pointer" />
              </Nav.Link>
              <Nav.Link href="#profile" className="p-0">
                <FaRegUserCircle
                  color="white"
                  className="ms-3"
                  size={22}
                  cursor="pointer"
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NetflixNavbar
