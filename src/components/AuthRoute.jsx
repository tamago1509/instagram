import React from 'react'
import { Route, useHistory } from 'react-router-dom'
export default function AuthRoute(props) {

    const user = localStorage.getItem("user")
    const history = useHistory()

    if(!user) history.push('/login')

    return (
        <div>
            <Route {...props} >
                { props.children }
            </Route>
        </div>
    )
}

//<AuthRoute >
//  <Post /> 
//</AuthRoute>