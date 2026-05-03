import { Component } from "react"
import { Container, Col, Row } from "react-bootstrap"

class SecondNetflixCarousel extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    this.FunzioneMovies2()
  }

  FunzioneMovies2 = () => {
    fetch("https://www.omdbapi.com/?s=twilight&apikey=6ba8a037")
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("ERRORE RICEZIONE JSON")
        }
      })

      .then((data) => {
        if (data.Search)
          this.setState({
            movies: data.Search,
          })
      })

      .catch((error) => {
        console.log("ERRORE CONTATTO SERVER", error)
      })
  }

  render() {
    return (
      <>
        <Container fluid className="px-4 py-2 bg-dark">
          <h4 className="text-white mb-3 pt-2 fs-5">The Twilight Saga</h4>
          {/*scorre con tastiera, carosello dava bug da md*/}
          <Row className="flex-nowrap overflow-auto no-scrollbar">
            {this.state.movies.map((movie) => {
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

export default SecondNetflixCarousel
