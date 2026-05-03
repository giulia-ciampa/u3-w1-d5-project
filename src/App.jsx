import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import NetflixNavbar from "./components/NetflixNavbar"
import TvShows from "./components/TvShows"
import FirstNetflixCarousel from "./components/FirstNetflixCarousel"
import SecondNetflixCarousel from "./components/SecondNetflixCarousel"
import ThirdNetflixCarousel from "./components/ThirdNetflixCarousel"
import NetflixFooter from "./components/NetflixFooter"

function App() {
  return (
    <>
      <NetflixNavbar />
      <TvShows />
      <FirstNetflixCarousel />
      <SecondNetflixCarousel />
      <ThirdNetflixCarousel />
      <NetflixFooter />
    </>
  )
}

export default App
