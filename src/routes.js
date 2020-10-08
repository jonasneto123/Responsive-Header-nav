import React from 'react'

import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Account from './pages/Account'
import Buy from './pages/buy'
import myProducts from './pages/myProducts'

const Routes  = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Header} />
            <Route path="/account" component={Account} />
            <Route path="/my-product" component={myProducts} />
            <Route path="/buy" component={Buy} />
        </Switch>
    </BrowserRouter>
)

export default Routes