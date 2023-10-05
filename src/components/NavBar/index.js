// Write your code here.
import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {scoreDetails, isRepeated} = this.props
    const {scoreValue, topScoreValue} = scoreDetails
    // console.log(isRepeated)
    // const displayScore = isRepeated ? 'displayScoreDetails' : ''

    const renderAuthScore = () => {
      if (!isRepeated) {
        return (
          <div className="scoreContainer">
            <p className="scorePara">Score: {scoreValue}</p>
            <p className="scorePara">Top Score: {topScoreValue}</p>
          </div>
        )
      }
      return null
    }

    return (
      <nav className="navContainer">
        <div className="emojiLogoContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emojiLogoImage"
          />
          <h1 className="emojiPara">Emoji Game</h1>
        </div>

        {renderAuthScore()}
      </nav>
    )
  }
}

export default NavBar
