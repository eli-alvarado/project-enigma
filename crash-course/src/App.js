import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'
import SingleProduct from './Views/SingleProduct'
import ProductCard from './Components/ProductCard'

function App() {
    
    return (
        <div>
            <div className="min-h-screen relative pb-10">
                <Router>
                    <Header/>
                    <div className="p-3" style={{'background': '#354453'}}>
                        <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/products/:id">
                            <SingleProduct />
                        </Route>
                        <Route path="/products">
                            <Product />
                        </Route>
                        </Switch>
                    </div>
                    <Footer/>
                </Router>
            </div>
        </div>
    );
}

export default App;
