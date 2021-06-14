import React from 'react';
import MenuProject from './menuProject';
import About from '././about/about';
import Products from './product/products';
import Basket from './payment/choosenProducts'
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from 'react-router-dom';
import Welcome from './welcome';
import OneProduct from './product/oneProduct';
import Payment from './payment/payment';
import Contact from './contact';
export default function HomePage(props) {
    return (
        <>
            <div>
                <Router>
                    <MenuProject />
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/products">
                            <Products />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/oneproduct/:id">
                            <OneProduct />
                        </Route>
                        <Route path="/payment">
                            <Payment />
                        </Route>
                        <Route path="/choozenProducts">
                            <Basket/>
                        </Route>
                        
                        <Route path="/">
                            <Welcome />
                        </Route>


                    </Switch>

                </Router>
            </div>
        </>
    )
}
