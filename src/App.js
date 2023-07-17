import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/header/Header';
import Home from "./pages/home/home";
import MovieList from './components/movieList/movieList';
import Movie from './components/movieDetail/movie';
import "./aboutsec.css"
function App() {
  return (
    <div className="App">
      <Router>
      <Header />

        <Routes>

        <Route index element = {<Home />}></Route>
        <Route path="movie/:id" element = {<Movie/>}></Route>
        <Route path="movies/:type" element = {<MovieList/>} ></Route>
        
        <Route path="/About__Developer" element = {<div className='about'> <h1>Hello folks i am <u>Rudraksh Mahajan</u>  and i have developed this mini project for learning purpose,</h1> <div className='border'><div className='technologies'>Here are some of the technologies i've used:-</div> <div className='techtypes'> <div>- HTML,</div> <div>- CSS,</div> <div>- JAVASCRIPT,</div> <div>- ReactJS,</div> <div>- React Router Dom,</div> <div>- React Loading Skeleton,</div> <div>- React Responsive Carousel,</div> <div>- Font Awesome.</div> </div></div> <div className='portfolio'> <a href="https://rudraksh-mahajan-portfolio-github-io.vercel.app/"> <h3>Go through my portfolio :-</h3></a> </div> </div>}></Route>

        </Routes>


      </Router>
    </div>
  );
}

export default App;
