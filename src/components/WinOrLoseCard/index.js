// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {playBtnEl, finalScore} = props
  console.log(finalScore)

  const playBtnElClicked = () => {
    playBtnEl()
  }

  const text = finalScore === 11 ? 'You Won' : 'You Lose'
  const imgUrl =
    text === 'You Won'
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const scoreDetailsText = text === 'You Won' ? 'Best Score' : 'Score'
  const finalScoreText = text === 'You Won' ? 12 : finalScore

  return (
    <div className="CardContainer">
      <div className="cardScoreContainer">
        <h1 className="description">{text}</h1>
        <p className="description">{scoreDetailsText}</p>
        <p className="scoreText description">{finalScoreText}/12</p>
        <button type="button" className="btnPlay" onClick={playBtnElClicked}>
          Play Again
        </button>
      </div>
      <img src={imgUrl} alt="win or lose" className="gameImg" />
    </div>
  )
}

export default WinOrLoseCard
