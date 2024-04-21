import './index.css'

const CardFlipRules = props => {
  const {history} = props
  const BackButtonClicked = () => {
    history.replace('/')
  }
  const startGame = () => {
    history.replace('/CardFlipGame')
  }
  return (
    <div className="CardFlipRulesMaincontainer">
      <div className="EmojiHomeBack ">
        <div className="rulesBackWidth">
          <button
            className="BackButton"
            onClick={BackButtonClicked}
            type="button"
          >
            <img
              src="https://res.cloudinary.com/dktgcdgar/image/upload/v1711193532/arrow-left_1_cqzsv4.png"
              className="BackIcon"
              alt="backIcon"
            />
            <p className="backpara white">Back</p>
          </button>
        </div>
      </div>
      <div className="RPSRulesTopContainer">
        <img
          src="https://res.cloudinary.com/dktgcdgar/image/upload/v1713681999/animals_m6eudc.png"
          className="CardFlipRulesImage"
          alt="RPS Rules"
        />
      </div>
      <h1 className="RPSRulesName white">Rules</h1>
      <ul className="RpsUnorderedList">
        <li className="CardFlipListItem">
          When the game is started, the users should be able to see the list of
          Cards that are shuffled and turned face down.
        </li>
        <li className="CardFlipListItem">
          When a user starts the game, the user should be able to see the Timer
          running.
        </li>
        <li className="CardFlipListItem">The Timer starts from 2 Minutes.</li>
        <li className="CardFlipListItem">
          If the two cards have the same image, they remain face up. If not,
          they should be flipped face down again after a short 2 seconds.
        </li>
        <li className="CardFlipListItem">
          Users should be able to compare only two cards at a time.
        </li>
        <li className="CardFlipListItem">
          When the user is not able to find all the cards before the timer ends
          then the game should end and redirect to the Time Up Page.
        </li>
        <li className="CardFlipListItem">
          If the user finds all the matching cards before the timer ends, then
          the user should be redirected to the results page.
        </li>
      </ul>
      <button className="CardFlipPlayButton" type="button" onClick={startGame}>
        Start Playing
      </button>
    </div>
  )
}

export default CardFlipRules
