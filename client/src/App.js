// Import packages
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Import Components
import Navbar from './components/layout/Navbar';

// Import Pages
import Home from './components/pages/Home';
import About from "./components/pages/About";

// Import States
import ContactState from './context/contact/ContactState';

// Import Css
import './App.css';


const App = () => {
    return (
        <Router>
          <ContactState>
            <Fragment className="App">
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                    </Switch>
                </div>
            </Fragment>
         </ContactState>
        </Router>
    );
};

export default App;
