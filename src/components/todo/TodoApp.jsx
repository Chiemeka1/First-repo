import React, { Component } from 'react'
import{BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'

class TodoApp extends Component {
s
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <>

          <HeaderComponent/>
          <Switch>
              
              <Route path="/" exact component={LoginComponent}/>  
              <Route path="/login"component={LoginComponent}/>
              <AuthenticatedRoute path="/welcome/:name"component={WelcomeComponent}/>
              <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
              <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
              <Route component={ErrorComponent}/>
          </Switch>
          <FooterComponent/>
        </>
        </Router>
        {/*<LoginComponent/>
        <WelcomeCompnent/>*/}
      </div>
    )
  }
}










//function ShowInvalidCredentials(props) {
//if (props.hasLoginFailed) {
//return <div>Invalid Credentials</div>
//}
// return null
//}
//function ShowLoginSucessMessage(props) {
//if (props.showSuccessMessage) {
//  return <div>Login Successful</div>
//}
// return null
//}
export default TodoApp

