import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/SearchPage';

function App() {
   return (
      <div className="app">
         <Router>
            <Header />
            <Switch>
               <Route path="/search">
                  <SearchPage />
               </Route>
               <Route exact="/">
                  <Home />
               </Route>
            </Switch>
            <Footer />
         </Router>
      </div>
   );
}

export default App;
