// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachObject, emojiClickedAction} = props
  const {id, emojiName, emojiUrl} = eachObject

  const emojiClicked = () => {
    emojiClickedAction(id)
  }

  return (
    <li className="liContainer">
      <button type="button" className="btnEmojiEl" onClick={emojiClicked}>
        <img src={emojiUrl} alt={emojiName} className="emojiImage" />
      </button>
    </li>
  )
}

export default EmojiCard
