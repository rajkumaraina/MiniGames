import {BiArrowBack} from 'react-icons/bi'

import './index.css'

const RPSRules = props => {
  const {history} = props
  const BackButtonClicked = () => {
    history.replace('/')
  }
  const startGame = () => {
    history.replace('/RockPaperScissor')
  }
  return (
    <div className="RPSRulesMainContainer">
      <div className="EmojiHomeBack ">
        <div className="rulesBackWidth">
          <button
            className="BackButton"
            onClick={BackButtonClicked}
            type="button"
          >
            <BiArrowBack className="BackIcon white" />
            <p className="backpara white">Back</p>
          </button>
        </div>
      </div>
      <div className="RPSRulesTopContainer">
        <h1 className="RPSRulesHeading white">ROCK PAPER SCISSOR</h1>
        <img
          src="https://res.cloudinary.com/dktgcdgar/image/upload/v1711193814/Group_7469_knno7c.png"
          className="RPSRulesImage"
          alt="rock paper scissor"
        />
      </div>
      <h1 className="RPSRulesName white">Rules</h1>
      <ul className="RpsUnorderedList">
        <li className="RpsListItem">
          The game result should be based on user and user opponent choices
        </li>
        <li className="RpsListItem">
          When the user choice is rock and his opponent choice is scissors then
          the result will be <span className="RpsSpanElement">YOU WON</span>
        </li>
        <li className="RpsListItem">
          When the user choice is rock and his opponent choice is rock then the
          result will be <span className="RpsSpanElement">IT IS DRAW </span>
        </li>
        <li className="RpsListItem">
          When the user choice is paper and his opponent choice is scissors then
          the result will be
          <span className="RpsSpanElement"> YOU LOSE</span>
        </li>
        <li className="RpsListItem">
          When the user choice is paper and his opponent choice is rock then the
          result will be
          <span className="RpsSpanElement"> YOU WON</span>
        </li>
        <li className="RpsListItem">
          When the user choice is scissors and his opponent choice is scissors
          then the result will be
          <span className="RpsSpanElement"> IT IS DRAW</span>
        </li>
        <li className="RpsListItem">
          When the user choice is a scissor and his opponent choice is rock then
          the result will be
          <span className="RpsSpanElement"> YOU LOSE</span>
        </li>
        <li className="RpsListItem">
          When the result is <span className="RpsSpanElement">YOU WON</span>,
          then the count of the score should be incremented by 1
        </li>
        <li className="RpsListItem">
          When the user choice is paper and his opponent choice is paper then
          the result will be
          <span className="RpsSpanElement"> IT IS DRAW</span>
        </li>
        <li className="RpsListItem">
          When the result is <span className="RpsSpanElement"> IT IS DRAW</span>
          , then the count of the score should be the same
        </li>
        <li className="RpsListItem">
          When the user choice is scissors and his opponent choice is paper then
          the result will be
          <span className="RpsSpanElement"> YOU WON</span>
        </li>
        <li className="RpsListItem">
          When the result is<span className="RpsSpanElement"> YOU LOSE</span>,
          then the count of the score should be decremented by 1.
        </li>
      </ul>
      <button className="RpsPlayButton" type="button" onClick={startGame}>
        Start Playing
      </button>
    </div>
  )
}

export default RPSRules
