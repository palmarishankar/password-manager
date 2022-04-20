import {Component} from 'react'

import './index.css'

class Password extends Component {
  render() {
    const {passwordList} = this.props
    const {website, userName, passwords} = this.props
    console.log(passwordList)

    return (
      <div>
        <p>Your Password</p>
        <input type="text" className="list-input" />
        <li className="password-list">{website}</li>
        <hr />
      </div>
    )
  }
}

export default Password
