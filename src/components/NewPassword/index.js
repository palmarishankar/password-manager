import {Component} from 'react'

import {v4} from 'uuid'

import Password from '../Password'

import './index.css'

class NewPassword extends Component {
  state = {
    passwordList: [],
    website: '',
    userName: '',
    passwords: '',
    searchInput: '',
    count: 0,
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onWebsiteName = event => {
    this.setState({website: event.target.value})
  }

  onUserName = event => {
    this.setState({userName: event.target.value})
  }

  onPassword = event => {
    this.setState({passwords: event.target.value})
  }

  onClickedAdd = event => {
    event.preventDefault()

    const {website, userName, passwords} = this.state
    const addPassword = {
      id: v4,
      websiteName: website,
      personUserName: userName,
      personPasswords: passwords,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, addPassword],
      count: prevState.count + 1,
    }))

    const passwordLength = passwords.length
    console.log(passwordLength)
  }

  deletePerson = id => {
    const {passwordList} = this.state

    const filterPasswordList = passwordList.filter(
      eachPassword => eachPassword.id !== id,
    )
    this.setState({
      passwordList: filterPasswordList,
    })
  }

  render() {
    const {count, passwordList, searchInput} = this.state

    const searchResult = passwordList.filter(eachApp =>
      eachApp.personUserName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="new-password-container">
          <div className="form-container">
            <form className="form">
              <h1 className="heading">Add New Password</h1>
              <div className="input-container">
                <div className="input">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="website-image"
                  />
                  <hr />
                  <input
                    type="text"
                    className="input-element"
                    placeholder="Enter Website"
                    onChange={this.onWebsiteName}
                  />
                </div>
                <div className="input">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="username-image"
                  />
                  <hr />
                  <input
                    type="text"
                    className="input-element"
                    placeholder="Enter Username"
                    onChange={this.onUserName}
                  />
                </div>
                <div className="input">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="password-image"
                  />
                  <hr />
                  <input
                    type="password"
                    className="input-element"
                    placeholder="Enter Password"
                    onChange={this.onPassword}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="button"
                onClick={this.onClickedAdd}
              >
                Add
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager"
            />
          </div>
        </div>

        <ul className="down-container">
          <div className="password-container">
            <h1>Your Passwords {count}</h1>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search"
              />
              <input
                type="text"
                className="list-input"
                placeholder="Search"
                onChange={this.onChangeInput}
                value="search"
              />
            </div>
          </div>
          <hr />

          {searchResult.map(eachPassword => (
            <Password
              passwordDetails={eachPassword}
              id={eachPassword.id}
              deletePerson={this.deletePerson}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default NewPassword
