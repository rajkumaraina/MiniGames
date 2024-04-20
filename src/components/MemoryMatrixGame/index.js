import {Component} from 'react'

import {Line} from 'rc-progress'

import Popup from 'reactjs-popup'

import {MdClose} from 'react-icons/md'

import {RiCloseLine} from 'react-icons/ri'

import './index.css'

const emojisArray = [
  {
    emojiName: 'neutral face',
    id: 1,
    url:
      'https://res.cloudinary.com/dktgcdgar/image/upload/v1713612175/neutral-face_1f610_nfcmnd.png',
  },
  {
    emojiName: 'grimacing face',
    id: 2,
    url:
      'https://res.cloudinary.com/dktgcdgar/image/upload/v1713613979/grimacing-face_1f62c_fbldrr.png',
  },
  {
    emojiName: 'slightly smiling face',
    id: 3,
    url:
      'https://res.cloudinary.com/dktgcdgar/image/upload/v1713614186/slightly-smiling-face_1f642_sctvdb.png',
  },
  {
    emojiName: 'grinning face with big eyes',
    id: 4,
    url:
      'https://res.cloudinary.com/dktgcdgar/image/upload/v1713614304/grinning-face-with-big-eyes_1f603_ytzhjq.png',
  },
  {
    emojiName: 'grinning face with smiling eyes',
    id: 5,
    url:
      'https://res.cloudinary.com/dktgcdgar/image/upload/v1713614533/smiling-face-with-open-mouth-and-smiling-eyes_1f604_vd4nod.png',
  },
  {
    emojiName: 'beaming face with smiling eyes',
    id: 6,
    url:
      ' https://res.cloudinary.com/dktgcdgar/image/upload/v1713614747/beaming-face-with-smiling-eyes_1f601_cjfkwz.png',
  },
  {
    emojiName: 'grinning face',
    id: 7,
    url:
      'https://res.cloudinary.com/dktgcdgar/image/upload/v1713614980/grinning-face_1f600_qajh9n.png',
  },
  {
    emojiName: 'smiling face with sunglasses',
    id: 8,
    url:
      'https://res.cloudinary.com/dktgcdgar/image/upload/v1713615104/smiling-face-with-sunglasses_1f60e_k0gdh0.png',
  },
]

const Emojis = props => {
  const {item} = props
  const {emojiName, id, url} = item
  return (
    <li className="MMResultEmojisListItem">
      <img src={url} alt={emojiName} className="MMemojis" />
    </li>
  )
}

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

const MMLEVEL2 = [
  {id: 0},
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9},
  {id: 10},
  {id: 11},
  {id: 12},
  {id: 13},
  {id: 14},
  {id: 15},
]

const MMLEVEL3 = [
  {id: 0},
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9},
  {id: 10},
  {id: 11},
  {id: 12},
  {id: 13},
  {id: 14},
  {id: 15},
  {id: 16},
  {id: 17},
  {id: 18},
  {id: 19},
  {id: 20},
  {id: 21},
  {id: 22},
  {id: 23},
  {id: 24},
]

const MMLEVEL4 = [
  {id: 0},
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9},
  {id: 10},
  {id: 11},
  {id: 12},
  {id: 13},
  {id: 14},
  {id: 15},
  {id: 16},
  {id: 17},
  {id: 18},
  {id: 19},
  {id: 20},
  {id: 21},
  {id: 22},
  {id: 23},
  {id: 24},
  {id: 25},
  {id: 26},
  {id: 27},
  {id: 28},
  {id: 29},
  {id: 30},
  {id: 31},
  {id: 32},
  {id: 33},
  {id: 34},
  {id: 35},
]

const MMLEVEL5 = [
  {id: 0},
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9},
  {id: 10},
  {id: 11},
  {id: 12},
  {id: 13},
  {id: 14},
  {id: 15},
  {id: 16},
  {id: 17},
  {id: 18},
  {id: 19},
  {id: 20},
  {id: 21},
  {id: 22},
  {id: 23},
  {id: 24},
  {id: 25},
  {id: 26},
  {id: 27},
  {id: 28},
  {id: 29},
  {id: 30},
  {id: 31},
  {id: 32},
  {id: 33},
  {id: 34},
  {id: 35},
  {id: 36},
  {id: 37},
  {id: 38},
  {id: 39},
  {id: 40},
  {id: 41},
  {id: 42},
  {id: 43},
  {id: 44},
  {id: 45},
  {id: 46},
  {id: 47},
  {id: 48},
]

const MMLevelListItems = props => {
  const {
    item,
    randomBoxes,
    SelectedBox,
    timeUp,
    choosedBoxes,
    wrongClick,
    CorrectChoice,
    ListItemWidth,
  } = props
  const {id} = item
  const activeBox = randomBoxes.includes(id)
  const MMBackGroundClassName = activeBox
    ? `${ListItemWidth} Active`
    : `${ListItemWidth}`
  const BoxBackground = choosedBoxes.includes(id)
    ? `${ListItemWidth} Active`
    : `${ListItemWidth}`
  const WrongBackground = wrongClick.includes(id)
    ? `${ListItemWidth} Red`
    : `${ListItemWidth}`
  const FinalBackground = CorrectChoice ? BoxBackground : WrongBackground
  const boxClicked = () => {
    SelectedBox(id)
  }
  return timeUp ? (
    <li className={`${FinalBackground}`} onClick={boxClicked}>
      <button type="button" className="MMBoxButton">
        {' '}
      </button>
    </li>
  ) : (
    <li className={`${MMBackGroundClassName}`}>
      <button type="button" className="MMBoxButton">
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
    choosedBoxes: [],
    timeUp: false,
    wrongClick: [],
    CorrectChoice: false,
    Result: false,
  }

  componentDidMount = () => {
    this.Random()
  }

  Random = () => {
    const {level} = this.state
    let counter = 0
    const TimerId = setInterval(() => {
      counter += 1
      console.log('hi')
      if (counter === 3) {
        clearInterval(TimerId)
        this.setState(prevState => ({
          hiddenBoxes: prevState.randomBoxes,
          timeUp: true,
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
        if (isPresent === false && randomValues.length < 3) {
          randomValues.push(value)
        }
      }
      this.setState({randomBoxes: randomValues})
    } else if (level === 2) {
      console.log('level 2')
      const randomValues = []
      let value
      let isPresent
      for (let i = 1; i < 16; i = i + 1) {
        value = Math.floor(Math.random() * 16)
        console.log(value)
        isPresent = randomValues.includes(value)
        if (isPresent === false && randomValues.length < 4) {
          randomValues.push(value)
        }
      }
      this.setState({randomBoxes: randomValues})
    } else if (level === 3) {
      console.log('level 3')
      const randomValues = []
      let value
      let isPresent
      for (let i = 1; i < 25; i = i + 1) {
        value = Math.floor(Math.random() * 25)
        console.log(value)
        isPresent = randomValues.includes(value)
        if (isPresent === false && randomValues.length < 5) {
          randomValues.push(value)
        }
      }
      this.setState({randomBoxes: randomValues})
    } else if (level === 4) {
      console.log('level 4')
      const randomValues = []
      let value
      let isPresent
      for (let i = 1; i < 36; i = i + 1) {
        value = Math.floor(Math.random() * 36)
        console.log(value)
        isPresent = randomValues.includes(value)
        if (isPresent === false && randomValues.length < 6) {
          randomValues.push(value)
        }
      }
      this.setState({randomBoxes: randomValues})
    } else if (level === 5) {
      console.log('level 5')
      const randomValues = []
      let value
      let isPresent
      for (let i = 1; i < 49; i = i + 1) {
        value = Math.floor(Math.random() * 49)
        console.log(value)
        isPresent = randomValues.includes(value)
        if (isPresent === false && randomValues.length < 7) {
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

  playAgainButton = () => {
    this.setState(
      {
        level: 1,
        Result: false,
        timeUp: false,
        randomBoxes: [],
        selectedBoxes: [],
        hiddenBoxes: [],
        choosedBoxes: [],
        wrongClick: [],
        CorrectChoice: false,
      },
      this.Random,
    )
  }

  SelectedBox = id => {
    const {hiddenBoxes, choosedBoxes} = this.state
    const BoxPresent = hiddenBoxes.includes(id)
    if (BoxPresent === false) {
      this.setState(prevState => ({
        wrongClick: [...prevState.wrongClick, id],
        CorrectChoice: false,
        Result: true,
      }))
    } else {
      this.setState(prevState => ({
        choosedBoxes: [...prevState.choosedBoxes, id],
        CorrectChoice: true,
      }))
      if (choosedBoxes.length === hiddenBoxes.length - 1) {
        this.setState(
          prevState => ({
            level: prevState.level + 1,
            choosedBoxes: [],
            hiddenBoxes: [],
            randomBoxes: [],
            timeUp: false,
          }),
          this.Random,
        )
      }
    }
  }

  render() {
    const {
      randomBoxes,
      selectedBoxes,
      level,
      hiddenBoxes,
      choosedBoxes,
      timeUp,
      Result,
      CorrectChoice,
      wrongClick,
    } = this.state
    let LEVELS
    let UnorderedListBackground
    let progress
    let ListItemWidth
    if (level === 1) {
      LEVELS = MMLEVEL1
      progress = 20
      ListItemWidth = 'MMListItemBox-level1'
      UnorderedListBackground = 'MMUnorderedBox-level1'
    } else if (level === 2) {
      LEVELS = MMLEVEL2
      progress = 40
      ListItemWidth = 'MMListItemBox-level2'
      UnorderedListBackground = 'MMUnorderedBox-level2'
    } else if (level === 3) {
      LEVELS = MMLEVEL3
      progress = 60
      ListItemWidth = 'MMListItemBox-level3'
      UnorderedListBackground = 'MMUnorderedBox-level3'
    } else if (level === 4) {
      LEVELS = MMLEVEL4
      progress = 80
      ListItemWidth = 'MMListItemBox-level4'
      UnorderedListBackground = 'MMUnorderedBox-level4'
    } else if (level === 5) {
      LEVELS = MMLEVEL5
      progress = 100
      ListItemWidth = 'MMListItemBox-level5'
      UnorderedListBackground = 'MMUnorderedBox-level5'
    }
    return Result ? (
      <div className="MMGameResultContainer">
        <ul className="MMGameResultUnorderedList">
          {emojisArray.map(each => (
            <Emojis key={each.id} item={each} />
          ))}
        </ul>
        <Line
          percent={progress}
          strokeWidth={1}
          strokeColor="#0320fc"
          trailWidth={1}
          trailColor="#D3D3D3"
          className="ProgressBar"
        />
        <ul className="MMGameResultUnorderedList">
          <li className="MMResultLevel">Level 1</li>
          <li className="MMResultLevel">Level 2</li>
          <li className="MMResultLevel">Level 3</li>
          <li className="MMResultLevel">Level 4</li>
          <li className="MMResultLevel">Level 5</li>
        </ul>
        <h1 className="MMResultCongratsHeading">Congratulation!</h1>
        <p className="MMResultPara">You have reached level {level}</p>
        <button
          className="MMResultButton"
          type="button"
          onClick={this.playAgainButton}
        >
          Play Again
        </button>
      </div>
    ) : (
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
          <ul className={`${UnorderedListBackground}`}>
            {LEVELS.map(each => (
              <MMLevelListItems
                item={each}
                key={each.id}
                randomBoxes={randomBoxes}
                SelectedBox={this.SelectedBox}
                timeUp={timeUp}
                choosedBoxes={choosedBoxes}
                wrongClick={wrongClick}
                CorrectChoice={CorrectChoice}
                ListItemWidth={ListItemWidth}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default MatrixGame
