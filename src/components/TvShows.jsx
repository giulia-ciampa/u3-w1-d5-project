import { Dropdown, Container, Row, Col } from "react-bootstrap"
import { IoGridOutline } from "react-icons/io5"
import { MdGridOn } from "react-icons/md"

const TvShows = () => {
  return (
    <>
      <Container fluid className="bg-dark text-white px-4 pb-2 m-0">
        <Row className="justify-content-between align-items-center">
          <Col className="d-flex align-items-center">
            <h1 className="fs-4 fw-normal m-0"> Tv Shows</h1>
            <Dropdown>
              <Dropdown.Toggle
                variant="transparent"
                id="dropdown-basic"
                className="text-white border-1 border-light p-1 ms-3 rounded-0"
                size="sm"
              >
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu className="bg-dark">
                <Dropdown.Item className="text-white" href="#/action-1">
                  Comedy
                </Dropdown.Item>
                <Dropdown.Item className="text-white" href="#/action-2">
                  Drama
                </Dropdown.Item>
                <Dropdown.Item className="text-white" href="#/action-3">
                  Thriller
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            <IoGridOutline
              color="white"
              size={20}
              cursor="pointer"
              className="me-2"
            />
            <MdGridOn
              color="white"
              size={20}
              cursor="pointer"
              className="ms-2"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default TvShows
