import {BiArrowBack} from 'react-icons/bi'

import './index.css'

const MMRules = props => {
  const {history} = props
  const BackButtonClicked = () => {
    history.replace('/')
  }
  const startGame = () => {
    history.replace('/MemoryMatrix')
  }
  return (
    <div className="MMRulesMaincontainer">
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
        <h1 className="MMRulesHeading white">Memory Matrix</h1>
        <img
          src="https://res.cloudinary.com/dktgcdgar/image/upload/v1713680660/memory_n1oiwj.png"
          className="MMRulesImage"
          alt="memory matrix"
        />
      </div>
      <h1 className="RPSRulesName white">Rules</h1>
      <ul className="RpsUnorderedList">
        <li className="MMListItem">
          In each level of the Game, Users should be able to see the Grid with
          (N X N) size starting from 3 and the grid will highlight N cells in
          Blue, the N highlighted cells will be picked randomly.
        </li>
        <li className="MMListItem">
          The highlighted cells will remain N seconds for the user to memorize
          the cells. At this point, the user should not be able to perform any
          action.
        </li>
        <li className="MMListItem">
          After N seconds, the grid will clear the N highlighted cells.
        </li>
        <li className="MMListItem">
          At N seconds, the user can click on any cell. Clicking on a cell that
          was highlighted before it will turn blue. Clicking on the other cells
          that were not highlighted before then will turn to red.
        </li>
        <li className="MMListItem">
          The user should be promoted to the next level if they guess all N
          cells correctly in one attempt.
        </li>
        <li className="MMListItem">
          The user should be taken to the results page if the user clicks on the
          wrong cell.
        </li>
        <li className="MMListItem">
          If the user completed all the levels, then the user should be taken to
          the results page.
        </li>
      </ul>
      <button className="MMPlayButton" type="button" onClick={startGame}>
        Start Playing
      </button>
    </div>
  )
}

export default MMRules
