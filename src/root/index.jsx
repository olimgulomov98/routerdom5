import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Home } from '../Components/Home'
import {Login} from '../Components/Login'
import { Navbar } from '../Components/Navbar'
import { Shop } from '../Components/Shop'
import {NotFound} from '../Components/NotFound'


export const Root = () => {
  return (
    <div>
      <Switch>
            <Route path='/' exact component={Navbar} />
            <Route path='/home' component={Navbar} />
            <Route path='/shop' component={Navbar} />
            <Route path='/login' component={Navbar} />
      </Switch>

      <Switch>
      <Route path='/' exact >
                <Redirect to='/home' />
            </Route>
        <Route path='/home' component={Home}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/login' component={Login}/>
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  )
}
