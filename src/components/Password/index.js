import './index.css'

const Password = props => {
  const {deletePerson, passwordDetails} = props
  const {id, websiteName, personUserName, personPasswords} = passwordDetails

  const onDelete = () => {
    deletePerson(id)
  }

  return (
    <>
      <li className="password-list">
        <div className="sub-list">
          <div>
            <p className="website-name">{websiteName}</p>
            <p className="person-name">{personUserName}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars"
            />
          </div>
          <button type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
              alt="delete"
              className="delete-icon"
              onClick={onDelete}
            />
          </button>
        </div>
      </li>
    </>
  )
}

export default Password
