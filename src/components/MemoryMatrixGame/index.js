import {Component} from 'react'

import {Line} from 'rc-progress'

import Popup from 'reactjs-popup'

import {BiArrowBack} from 'react-icons/bi'

import {CgClose} from 'react-icons/cg'

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

const MMLEVEL6 = [
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
  {id: 49},
  {id: 50},
  {id: 51},
  {id: 52},
  {id: 53},
  {id: 54},
  {id: 55},
  {id: 56},
  {id: 57},
  {id: 58},
  {id: 59},
  {id: 60},
  {id: 61},
  {id: 62},
  {id: 63},
]

const MMLEVEL7 = [
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
  {id: 49},
  {id: 50},
  {id: 51},
  {id: 52},
  {id: 53},
  {id: 54},
  {id: 55},
  {id: 56},
  {id: 57},
  {id: 58},
  {id: 59},
  {id: 60},
  {id: 61},
  {id: 62},
  {id: 63},
  {id: 64},
  {id: 65},
  {id: 66},
  {id: 67},
  {id: 68},
  {id: 69},
  {id: 70},
  {id: 71},
  {id: 72},
  {id: 73},
  {id: 74},
  {id: 75},
  {id: 76},
  {id: 77},
  {id: 78},
  {id: 79},
  {id: 80},
]

const MMLEVEL8 = [
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
  {id: 49},
  {id: 50},
  {id: 51},
  {id: 52},
  {id: 53},
  {id: 54},
  {id: 55},
  {id: 56},
  {id: 57},
  {id: 58},
  {id: 59},
  {id: 60},
  {id: 61},
  {id: 62},
  {id: 63},
  {id: 64},
  {id: 65},
  {id: 66},
  {id: 67},
  {id: 68},
  {id: 69},
  {id: 70},
  {id: 71},
  {id: 72},
  {id: 73},
  {id: 74},
  {id: 75},
  {id: 76},
  {id: 77},
  {id: 78},
  {id: 79},
  {id: 80},
  {id: 81},
  {id: 82},
  {id: 83},
  {id: 84},
  {id: 85},
  {id: 86},
  {id: 87},
  {id: 88},
  {id: 89},
  {id: 90},
  {id: 91},
  {id: 92},
  {id: 93},
  {id: 94},
  {id: 95},
  {id: 96},
  {id: 97},
  {id: 98},
  {id: 99},
]

const MMLEVEL9 = [
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
  {id: 49},
  {id: 50},
  {id: 51},
  {id: 52},
  {id: 53},
  {id: 54},
  {id: 55},
  {id: 56},
  {id: 57},
  {id: 58},
  {id: 59},
  {id: 60},
  {id: 61},
  {id: 62},
  {id: 63},
  {id: 64},
  {id: 65},
  {id: 66},
  {id: 67},
  {id: 68},
  {id: 69},
  {id: 70},
  {id: 71},
  {id: 72},
  {id: 73},
  {id: 74},
  {id: 75},
  {id: 76},
  {id: 77},
  {id: 78},
  {id: 79},
  {id: 80},
  {id: 81},
  {id: 82},
  {id: 83},
  {id: 84},
  {id: 85},
  {id: 86},
  {id: 87},
  {id: 88},
  {id: 89},
  {id: 90},
  {id: 91},
  {id: 92},
  {id: 93},
  {id: 94},
  {id: 95},
  {id: 96},
  {id: 97},
  {id: 98},
  {id: 99},
  {id: 100},
  {id: 101},
  {id: 102},
  {id: 103},
  {id: 104},
  {id: 105},
  {id: 106},
  {id: 107},
  {id: 108},
  {id: 109},
  {id: 110},
  {id: 111},
  {id: 112},
  {id: 113},
  {id: 114},
  {id: 115},
  {id: 116},
  {id: 117},
  {id: 118},
  {id: 119},
  {id: 120},
]

const MMLEVEL10 = [
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
  {id: 49},
  {id: 50},
  {id: 51},
  {id: 52},
  {id: 53},
  {id: 54},
  {id: 55},
  {id: 56},
  {id: 57},
  {id: 58},
  {id: 59},
  {id: 60},
  {id: 61},
  {id: 62},
  {id: 63},
  {id: 64},
  {id: 65},
  {id: 66},
  {id: 67},
  {id: 68},
  {id: 69},
  {id: 70},
  {id: 71},
  {id: 72},
  {id: 73},
  {id: 74},
  {id: 75},
  {id: 76},
  {id: 77},
  {id: 78},
  {id: 79},
  {id: 80},
  {id: 81},
  {id: 82},
  {id: 83},
  {id: 84},
  {id: 85},
  {id: 86},
  {id: 87},
  {id: 88},
  {id: 89},
  {id: 90},
  {id: 91},
  {id: 92},
  {id: 93},
  {id: 94},
  {id: 95},
  {id: 96},
  {id: 97},
  {id: 98},
  {id: 99},
  {id: 100},
  {id: 101},
  {id: 102},
  {id: 103},
  {id: 104},
  {id: 105},
  {id: 106},
  {id: 107},
  {id: 108},
  {id: 109},
  {id: 110},
  {id: 111},
  {id: 112},
  {id: 113},
  {id: 114},
  {id: 115},
  {id: 116},
  {id: 117},
  {id: 118},
  {id: 119},
  {id: 120},
  {id: 121},
  {id: 122},
  {id: 123},
  {id: 124},
  {id: 125},
  {id: 126},
  {id: 127},
  {id: 128},
  {id: 129},
  {id: 130},
  {id: 131},
  {id: 132},
  {id: 133},
  {id: 134},
  {id: 135},
  {id: 136},
  {id: 137},
  {id: 138},
  {id: 139},
  {id: 140},
  {id: 141},
  {id: 142},
  {id: 143},
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
    maxlevel: 0,
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
    const {level, maxlevel} = this.state
    if (level > maxlevel) {
      this.setState({maxlevel: level})
    }
    let counter = 0
    const TimerId = setInterval(() => {
      counter += 1
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
      const randomValues = []
      let value
      let isPresent
      for (let i = 1; i < 16; i = i + 1) {
        value = Math.floor(Math.random() * 16)
        isPresent = randomValues.includes(value)
        if (isPresent === false && randomValues.length < 4) {
          randomValues.push(value)
        }
      }
      this.setState({randomBoxes: randomValues})
    } else if (level === 3) {
      const randomValues = []
      let value
      let isPresent
      for (let i = 1; i < 25; i = i + 1) {
        value = Math.floor(Math.random() * 25)
        isPresent = randomValues.includes(value)
        if (isPresent === false && randomValues.length < 5) {
          randomValues.push(value)
        }
      }
      this.setState({randomBoxes: randomValues})
    } else if (level === 4) {
      const randomValues = []
      let value
      let isPresent
      for (let i = 1; i < 36; i = i + 1) {
        value = Math.floor(Math.random() * 36)
        isPresent = randomValues.includes(value)
        if (isPresent === false && randomValues.length < 6) {
          randomValues.push(value)
        }
      }
      this.setState({randomBoxes: randomValues})
    } else if (level === 5) {
      const randomValues = []
      let value
      let isPresent
      for (let i = 1; i < 49; i = i + 1) {
        value = Math.floor(Math.random() * 49)
        isPresent = randomValues.includes(value)
        if (isPresent === false && randomValues.length < 7) {
          randomValues.push(value)
        }
      }
      this.setState({randomBoxes: randomValues})
    } else if (level === 6) {
      const randomValues = []
      let value
      let isPresent
      for (let i = 1; i < 64; i = i + 1) {
        value = Math.floor(Math.random() * 64)
        isPresent = randomValues.includes(value)
        if (isPresent === false && randomValues.length < 8) {
          randomValues.push(value)
        }
      }
      this.setState({randomBoxes: randomValues})
    } else if (level === 7) {
      const randomValues = []
      let value
      let isPresent
      for (let i = 1; i < 81; i = i + 1) {
        value = Math.floor(Math.random() * 81)
        isPresent = randomValues.includes(value)
        if (isPresent === false && randomValues.length < 9) {
          randomValues.push(value)
        }
      }
      this.setState({randomBoxes: randomValues})
    } else if (level === 8) {
      const randomValues = []
      let value
      let isPresent
      for (let i = 1; i < 100; i = i + 1) {
        value = Math.floor(Math.random() * 100)
        isPresent = randomValues.includes(value)
        if (isPresent === false && randomValues.length < 10) {
          randomValues.push(value)
        }
      }
      this.setState({randomBoxes: randomValues})
    } else if (level === 9) {
      const randomValues = []
      let value
      let isPresent
      for (let i = 1; i < 121; i = i + 1) {
        value = Math.floor(Math.random() * 121)
        isPresent = randomValues.includes(value)
        if (isPresent === false && randomValues.length < 11) {
          randomValues.push(value)
        }
      }
      this.setState({randomBoxes: randomValues})
    } else if (level === 10) {
      const randomValues = []
      let value
      let isPresent
      for (let i = 1; i < 144; i = i + 1) {
        value = Math.floor(Math.random() * 144)
        isPresent = randomValues.includes(value)
        if (isPresent === false && randomValues.length < 12) {
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
      }))
      this.timer = setTimeout(() => {
        this.setState(prevState => ({
          Result: true,
        }))
        clearTimeout(this.timer)
      }, 1000)
    } else {
      const countOfBox = choosedBoxes.filter(each => each === id)
      const FinalCount = countOfBox.length
      if (FinalCount === 0) {
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
  }

  render() {
    const {
      randomBoxes,
      level,
      choosedBoxes,
      timeUp,
      Result,
      CorrectChoice,
      wrongClick,
    } = this.state
    let {maxlevel} = this.state
    let LEVELS
    let UnorderedListBackground
    let progress
    let ListItemWidth
    let LevelContainer
    if (maxlevel < 10) {
      maxlevel = `0${maxlevel}`
    }
    if (level === 1) {
      LEVELS = MMLEVEL1
      progress = 10
      ListItemWidth = 'MMListItemBox-level1'
      UnorderedListBackground = 'MMUnorderedBox-level1'
      LevelContainer = 'MMLevelMainContainer-level1'
    } else if (level === 2) {
      LEVELS = MMLEVEL2
      progress = 20
      ListItemWidth = 'MMListItemBox-level2'
      UnorderedListBackground = 'MMUnorderedBox-level2'
      LevelContainer = 'MMLevelMainContainer-level2'
    } else if (level === 3) {
      LEVELS = MMLEVEL3
      progress = 30
      ListItemWidth = 'MMListItemBox-level3'
      UnorderedListBackground = 'MMUnorderedBox-level3'
      LevelContainer = 'MMLevelMainContainer-level3'
    } else if (level === 4) {
      LEVELS = MMLEVEL4
      progress = 40
      ListItemWidth = 'MMListItemBox-level4'
      UnorderedListBackground = 'MMUnorderedBox-level4'
      LevelContainer = 'MMLevelMainContainer-level4'
    } else if (level === 5) {
      LEVELS = MMLEVEL5
      progress = 50
      ListItemWidth = 'MMListItemBox-level5'
      UnorderedListBackground = 'MMUnorderedBox-level5'
      LevelContainer = 'MMLevelMainContainer-level5'
    } else if (level === 6) {
      LEVELS = MMLEVEL6
      progress = 60
      ListItemWidth = 'MMListItemBox-level6'
      UnorderedListBackground = 'MMUnorderedBox-level6'
      LevelContainer = 'MMLevelMainContainer-level6'
    } else if (level === 7) {
      LEVELS = MMLEVEL7
      progress = 70
      ListItemWidth = 'MMListItemBox-level7'
      UnorderedListBackground = 'MMUnorderedBox-level7'
      LevelContainer = 'MMLevelMainContainer-level7'
    } else if (level === 8) {
      LEVELS = MMLEVEL8
      progress = 80
      ListItemWidth = 'MMListItemBox-level8'
      UnorderedListBackground = 'MMUnorderedBox-level8'
      LevelContainer = 'MMLevelMainContainer-level8'
    } else if (level === 9) {
      LEVELS = MMLEVEL9
      progress = 90
      ListItemWidth = 'MMListItemBox-level9'
      UnorderedListBackground = 'MMUnorderedBox-level9'
      LevelContainer = 'MMLevelMainContainer-level9'
    } else if (level === 10) {
      LEVELS = MMLEVEL10
      progress = 100
      ListItemWidth = 'MMListItemBox-level10'
      UnorderedListBackground = 'MMUnorderedBox-level10'
      LevelContainer = 'MMLevelMainContainer-level10'
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
          strokeWidth={5}
          strokeColor="#0320fc"
          trailWidth={5}
          trailColor="#D3D3D3"
          className="ProgressBarSmallDevices"
        />
        <Line
          percent={progress}
          strokeWidth={1}
          strokeColor="#0320fc"
          trailWidth={1}
          trailColor="#D3D3D3"
          className="ProgressBar"
        />
        <ul className="MMGameResultUnorderedList">
          <li className="MMResultLevel">Level 2</li>
          <li className="MMResultLevel">Level 4</li>
          <li className="MMResultLevel">Level 6</li>
          <li className="MMResultLevel">Level 8</li>
          <li className="MMResultLevel">Level 10</li>
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
              <BiArrowBack className="BackIcon white" />
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
                          data-testid="close"
                          className="closeButton"
                          onClick={() => close()}
                        >
                          {' '}
                          <CgClose />
                        </button>
                      </div>
                      <h1 className="rulesHeading blackcolor">Rules</h1>
                      <ul className="RpsUnorderedList">
                        <li className="MMListItem RPSRULESLIST blackcolor">
                          In each level of the Game, Users should be able to see
                          the Grid with (N X N) size starting from 3 and the
                          grid will highlight N cells in Blue, the N highlighted
                          cells will be picked randomly.
                        </li>
                        <li className="MMListItem RPSRULESLIST blackcolor">
                          The highlighted cells will remain N seconds for the
                          user to memorize the cells. At this point, the user
                          should not be able to perform any action.
                        </li>
                        <li className="MMListItem RPSRULESLIST blackcolor">
                          After N seconds, the grid will clear the N highlighted
                          cells.
                        </li>
                        <li className="MMListItem RPSRULESLIST blackcolor">
                          At N seconds, the user can click on any cell. Clicking
                          on a cell that was highlighted before it will turn
                          blue. Clicking on the other cells that were not
                          highlighted before then will turn to red.
                        </li>
                        <li className="MMListItem RPSRULESLIST blackcolor">
                          The user should be promoted to the next level if they
                          guess all N cells correctly in one attempt.
                        </li>
                        <li className="MMListItem RPSRULESLIST blackcolor">
                          The user should be taken to the results page if the
                          user clicks on the wrong cell.
                        </li>
                        <li className="MMListItem RPSRULESLIST blackcolor">
                          If the user completed all the levels, then the user
                          should be taken to the results page.
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
          <div className={`${LevelContainer}`}>
            <p className="MMLevel">Level {level}</p>
            <p className="MMMaxLevel">Max Level-{maxlevel}</p>
          </div>

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
