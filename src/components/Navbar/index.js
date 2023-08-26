import './index.css'

const Navbar = props => {
  const {currentScore, timerStart} = props

  return (
    <nav className="nav-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <div className="timer-container">
        <p className="score">score:{currentScore}</p>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p>{timerStart}sec</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
