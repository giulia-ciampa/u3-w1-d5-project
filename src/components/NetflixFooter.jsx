import { Container, Row, Col, Button } from "react-bootstrap"
import { FaInstagram } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const NetflixFooter = () => {
  const footerLinks = [
    ["Audio and Subtitles", "Media Center", "Privacy", "Contact Us"],
    ["Audio Description", "Investor Relations", "Legal Notices"],
    ["Help Center", "Jobs", "Cookie Preferences"],
    ["Gift Cards", "Terms of Use", "Corporate Information"],
  ]

  return (
    <footer className="bg-dark text-secondary py-3">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <div className="d-flex mb-2">
              <FaFacebook size={18} className="me-3 cursor-pointer" />
              <FaInstagram size={18} className="me-3 cursor-pointer" />
              <FaXTwitter size={18} className="me-3 cursor-pointer" />
              <FaYoutube size={18} className="me-3 cursor-pointer" />
            </div>

            {/*Link mappati */}
            <Row className="row-cols-2 row-cols-md-4">
              {footerLinks.map((column, index) => {
                return (
                  <Col key={`col-${index}`} className="mb-2">
                    <ul className="list-unstyled">
                      {column.map((link) => {
                        return (
                          <li key={link} className="mb-2">
                            <a
                              href="#"
                              className="text-secondary text-decoration-none small"
                            >
                              {link}
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </Col>
                )
              })}
            </Row>

            <Button
              variant="outline-secondary"
              size="sm"
              className="rounded-0 my-2"
            >
              Service Code
            </Button>

            <p className="small mt-2">
              © 1997-{new Date().getFullYear()} Netflix, Inc.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default NetflixFooter
