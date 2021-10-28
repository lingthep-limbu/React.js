import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import First from './First'

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={First}/>

                
            </Switch>
            
        </Router>
    )
}
