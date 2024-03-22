import './index.css'

const EmojiRules = props => {
  const {history} = props
  const BackButtonClicked = () => {
    history.replace('/')
  }
  const startGame = () => {
    history.replace('/EmojiGame')
  }
  return (
    <div className="EmojiRulesMainContainer">
      <div className="EmojiHomeBack ">
        <div className="rulesBackWidth">
          <button
            className="BackButton"
            onClick={BackButtonClicked}
            type="button"
          >
            <img
              src="https://res.cloudinary.com/dktgcdgar/image/upload/v1711019747/arrow-left_p58uae.svg"
              className="BackIcon"
              alt="backIcon"
            />
            <p className="backpara">Back</p>
          </button>
        </div>
      </div>
      <div className="initialRules">
        <div className="InitialRulesContainer">
          <div className="InitialRulesFirstContainer">
            <img
              src="https://res.cloudinary.com/dktgcdgar/image/upload/v1711105908/Group_7428_jpd5vz.png"
              className="InitialEmojiRulesImage"
              alt="EmojiGame"
            />
          </div>
          <div className="InitialRulesSecondContainer">
            <h1 className="InitialRulesHeading">Rules</h1>
            <ul>
              <li className="InitialrulesListItem">
                User should able to see the lists of Emojis
              </li>
              <li className="InitialrulesListItem">
                When the user clicks any of the Emoji for the first time, then
                the count of the score should be incremented by 1 and the List
                of emoji cards should be shuffled.
              </li>
              <li className="InitialrulesListItem">
                This process should be repeated every time the user clicks on an
                emoji card
              </li>
              <li className="InitialrulesListItem">
                When the user clicks on all Emoji cards without clicking any of
                it twice, then the user will win the game
              </li>
              <li className="InitialrulesListItem">
                When the user clicks on the same Emoji for the second time, then
                the user will lose the game.
              </li>
              <li className="InitialrulesListItem">
                Once the game is over, the user will be redirected to the
                results page.
              </li>
            </ul>
            <div className="InitialRulesPlayContainer">
              <button
                className="EmojiStartPlayingButton"
                type="button"
                onClick={startGame}
              >
                Start Playing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmojiRules
