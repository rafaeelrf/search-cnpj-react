import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faChartLine, faCheckCircle, faTimes, faTimesCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import Home from './pages/Home/Home';
import SearchCNPJ from './pages/SearchCNPJ/SearchCNPJ';
import './assets/styles/main.css';

library.add(faArrowRight, faChartLine, faCheckCircle, faTimesCircle, faSearch);


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/search-cnpj" component={SearchCNPJ} />
        </div>
      </Router>
    );
  }
}

export default App;
