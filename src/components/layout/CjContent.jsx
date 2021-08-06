import React from 'react'
import routers from '@/views/index.js'
import { Route, Switch, Redirect } from 'react-router-dom'

export default () => {
  const renterRoute = () => {
    let res = []
    routers.map(ele => {
      ele.children && ele.children.map(ele => {
        res.push(
          <Route exact key={ele.id} path={ele.path} component={ele.component} />
        )
      })
    })
    return res
  }
  return (
    <div className='cj-content'>
      <Switch>
        {renterRoute()}
        <Redirect from='/*' to='/' />
      </Switch>
    </div>
  )
}