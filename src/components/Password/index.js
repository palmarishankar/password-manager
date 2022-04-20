import {Component} from 'react'

import './index.css'

class Password extends Component {
  render() {
    const {passwordDetails} = this.props
    const {websiteName, personUserName, personPasswords} = passwordDetails
    console.log(passwordDetails)

    return (
      <div>
        <p>Your Password</p>
        <input type="text" className="list-input" />
        <hr />
        <li className="password-list">
          <p>{websiteName}</p>
          <p>{personUserName}</p>
          <p>{personPasswords}</p>
        </li>
      </div>
    )
  }
}

export default Password
