import NewPassword from './components/NewPassword'

import './App.css'

const App = () => (
  <div className="password-manager-container ">
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
      alt="app logo"
      className="logo-image"
    />
    <div>
      <NewPassword />
    </div>
  </div>
)

export default App
