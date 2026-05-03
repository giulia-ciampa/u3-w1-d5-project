import { Component } from "react"
import { Container, Col, Row } from "react-bootstrap"

class ThirdNetflixCarousel extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    this.FunzioneMovies3()
  }

  FunzioneMovies3 = () => {
    fetch("https://www.omdbapi.com/?s=matrix&apikey=6ba8a037")
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("ERRORE NELLA RICEZIONE DEL JSON")
        }
      })

      .then((data) => {
        if (data.Search) {
          this.setState({ movies: data.Search })
        }
      })

      .catch((error) => {
        console.log("ERRORE NEL CONTATTARE IL SERVER", error)
      })
  }

  render() {
    const filtroImg = this.state.movies.filter((movie, index) => {
      return index >= 0 && index <= 9 && index !== 6 && index !== 8
    }) //le immagini 6 e 8 sono rotte
    return (
      <>
        <Container fluid className="px-4 py-2 bg-dark">
          <h4 className="text-white mb-3 pt-2 fs-5">Matrix</h4>
          {/*scorre con tastiera, carosello dava bug da md*/}
          <Row className="flex-nowrap overflow-auto no-scrollbar">
            {filtroImg.map((movie) => {
              return (
                <Col key={movie.imdbID} lg={2} md={4} xs={6} className="px-2">
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="movie-landscape"
                  />
                </Col>
              )
            })}
          </Row>
        </Container>
      </>
    )
  }
}

export default ThirdNetflixCarousel
