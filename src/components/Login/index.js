import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect, withRouter} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
    showAlert: false,
  }

  componentDidMount() {
    // Show an alert with a sample username and password for 10 seconds
    this.showAlertWithTimer()
  }

  showAlertWithTimer = () => {
    this.setState({showAlert: true})

    setTimeout(() => {
      this.setState({showAlert: false})
    }, 5000)
  }

  setCookie = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 3})
    history.replace('/')
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const url = 'https://apis.ccbp.in/login'
    const cred = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(cred),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      console.log('Login Success')
      this.setCookie(data.jwt_token)
    } else {
      this.setState({errorMessage: data.error_msg})
    }
  }

  render() {
    const {errorMessage, showAlert} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="app-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="logo-img"
          />
          <form onSubmit={this.onSubmit}>
            <label htmlFor="username" className="label-for-login">
              USERNAME
            </label>
            <input
              id="username"
              placeholder="Username"
              onChange={this.onChangeUsername}
            />
            <label htmlFor="password" className="label-for-login">
              PASSWORD
            </label>
            <input
              id="password"
              placeholder="Password"
              type="password"
              onChange={this.onChangePassword}
            />
            <button type="submit" className="login-btn">
              Login
            </button>
            {errorMessage && (
              <p className="error-message">{`*${errorMessage}`}</p>
            )}
          </form>
        </div>
        {showAlert && (
          <div className="custom-alert">
            <p>
              Sample Username: rahul <br />
              Sample Password: rahul@2021
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default withRouter(Login)
