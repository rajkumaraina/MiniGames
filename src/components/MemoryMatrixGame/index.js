import {Component} from 'react'

import Popup from 'reactjs-popup'

import {MdClose} from 'react-icons/md'

import {RiCloseLine} from 'react-icons/ri'

import './index.css'

const MMLEVEL1 = [
  {id: 0},
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
]

const MMLevelListItems = props => {
  const {item, randomBoxes} = props
  const {id} = item
  const activeBox = randomBoxes.includes(id)
  const MMBackGroundClassName = activeBox
    ? 'MMListItemBox Active'
    : 'MMListItemBox'
  const boxClicked = () => {}
  return (
    <li className={`${MMBackGroundClassName}`}>
      <button type="button" className="MMBoxButton" onClick={boxClicked}>
        {' '}
      </button>
    </li>
  )
}

class MatrixGame extends Component {
  state = {
    randomBoxes: [],
    selectedBoxes: [],
    level: 1,
    hiddenBoxes: [],
  }

  componentDidMount = () => {
    const {level} = this.state
    let counter = 0
    const TimerId = setInterval(() => {
      counter += 1
      console.log(counter)
      if (counter === 3) {
        clearInterval(TimerId)
        this.setState(prevState => ({
          hiddenBoxes: prevState.randomBoxes,
          randomBoxes: [],
        }))
      }
    }, 1000)
    if (level === 1) {
      const randomValues = []
      let value
      let isPresent
      for (let i = 1; i < 9; i = i + 1) {
        value = Math.floor(Math.random() * 9)
        isPresent = randomValues.includes(value)
        console.log(value, isPresent)
        if (isPresent === false && randomValues.length < 3) {
          randomValues.push(value)
        }
      }
      this.setState({randomBoxes: randomValues})
    }
    if (level === 2) {
      const randomValues = []
      let value
      let isPresent
      for (let i = 1; i < 16; i = i + 1) {
        value = Math.floor(Math.random() * 16)
        isPresent = randomValues.includes(value)
        console.log(value, isPresent)
        if (isPresent === false && randomValues.length < 4) {
          randomValues.push(value)
        }
      }
      this.setState({randomBoxes: randomValues})
    }
  }

  BackButtonClicked = () => {
    const {history} = this.props
    history.replace('/')
  }

  SelectedBox = id => {}

  render() {
    const {randomBoxes, selectedBoxes, level, hiddenBoxes} = this.state
    console.log(hiddenBoxes)
    return (
      <div className="MMGameMainContainer">
        <div className="EmojiHomeBack">
          <div className="EmojiBackIconContainer">
            <button
              className="BackButton"
              onClick={this.BackButtonClicked}
              type="button"
            >
              <img
                src="https://res.cloudinary.com/dktgcdgar/image/upload/v1711193532/arrow-left_1_cqzsv4.png"
                className="BackIcon"
                alt="backIcon"
              />
              <p className="backpara white">Back</p>
            </button>
            <div className="popup-container">
              <Popup
                modal
                trigger={
                  <button type="button" className="trigger-button">
                    Rules
                  </button>
                }
              >
                {close => (
                  <>
                    <div className="rpsRulesScrollContainer">
                      <div className="closeContainer">
                        <button
                          type="button"
                          className="closeButton"
                          onClick={() => close()}
                        >
                          {' '}
                          <MdClose />
                        </button>
                      </div>
                      <h1 className="rulesHeading white">Rules</h1>
                      <ul className="RpsUnorderedList">
                        <li className="RpsListItem RPSRULESLIST">
                          The game result should be based on user and user
                          opponent choices
                        </li>
                        <li className="RpsListItem RPSRULESLIST">
                          When the user choice is rock and his opponent choice
                          is scissors then the result will be{' '}
                          <span className="RpsSpanElement orange">YOU WON</span>
                        </li>
                        <li className="RpsListItem RPSRULESLIST">
                          When the user choice is rock and his opponent choice
                          is rock then the result will be{' '}
                          <span className="RpsSpanElement orange">
                            IT IS DRAW{' '}
                          </span>
                        </li>
                        <li className="RpsListItem RPSRULESLIST">
                          When the user choice is paper and his opponent choice
                          is scissors then the result will be
                          <span className="RpsSpanElement orange">
                            {' '}
                            YOU LOSE
                          </span>
                        </li>
                        <li className="RpsListItem RPSRULESLIST">
                          When the user choice is paper and his opponent choice
                          is rock then the result will be
                          <span className="RpsSpanElement orange">
                            {' '}
                            YOU WON
                          </span>
                        </li>
                        <li className="RpsListItem RPSRULESLIST">
                          When the user choice is scissors and his opponent
                          choice is scissors then the result will be
                          <span className="RpsSpanElement orange">
                            {' '}
                            IT IS DRAW
                          </span>
                        </li>
                        <li className="RpsListItem RPSRULESLIST">
                          When the user choice is a scissor and his opponent
                          choice is rock then the result will be
                          <span className="RpsSpanElement orange">
                            {' '}
                            YOU LOSE
                          </span>
                        </li>
                        <li className="RpsListItem RPSRULESLIST">
                          When the result is{' '}
                          <span className="RpsSpanElement orange">YOU WON</span>
                          , then the count of the score should be incremented by
                          1
                        </li>
                        <li className="RpsListItem RPSRULESLIST">
                          When the user choice is paper and his opponent choice
                          is paper then the result will be
                          <span className="RpsSpanElement orange">
                            {' '}
                            IT IS DRAW
                          </span>
                        </li>
                        <li className="RpsListItem RPSRULESLIST">
                          When the result is{' '}
                          <span className="RpsSpanElement orange">
                            {' '}
                            IT IS DRAW
                          </span>
                          , then the count of the score should be the same
                        </li>
                        <li className="RpsListItem RPSRULESLIST">
                          When the user choice is scissors and his opponent
                          choice is paper then the result will be
                          <span className="RpsSpanElement orange">
                            {' '}
                            YOU WON
                          </span>
                        </li>
                        <li className="RpsListItem RPSRULESLIST">
                          When the result is
                          <span className="RpsSpanElement orange">
                            {' '}
                            YOU LOSE
                          </span>
                          , then the count of the score should be decremented by
                          1.
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </Popup>
            </div>
          </div>
        </div>
        <h1 className="MMGameHeading">Memory Matrix</h1>
        <div className="MMLevelContainer">
          <p className="MMLevel">Level {level}</p>
          <ul className="MMUnorderedBox-level1">
            {MMLEVEL1.map(each => (
              <MMLevelListItems
                item={each}
                key={each.id}
                randomBoxes={randomBoxes}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default MatrixGame
