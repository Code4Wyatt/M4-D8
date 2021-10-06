import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import GenresMenu from './components/GenresMenu';
import ShowMovies from './components/ShowMovies';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
      <GenresMenu />
      <ShowMovies searchBar="true" query="Harry Potter" />
      <ShowMovies searchBar="false" query="Lord of The Rings" />
      <ShowMovies searchBar="false" query="Star Wars" />
        <Footer />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
