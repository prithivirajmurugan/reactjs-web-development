import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import Products from './Components/pages/products';
import Services from './Components/pages/Services';
import SignUp from './Components/pages/SignUp';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/products'  component={Products} />
                    <Route path='/services' component={Services} />
                    <Route path="/sign-up" component={SignUp} />
                    
                </Switch>
            </Router>
       </>
    );
}

export default App;