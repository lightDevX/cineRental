import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import MovieCard from "./components/MovieCard/MovieCard"
import SideBar from "./components/SideBar/SideBar"


function App() {


  return (
    <>
      <Header />
      <main className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <SideBar />
        <MovieCard />
      </main>
      <Footer />
    </>
  )
}

export default App
