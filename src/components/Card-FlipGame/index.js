import {Component} from 'react'

import {BiArrowBack} from 'react-icons/bi'

import CardFlipRulesPopUp from '../Card-FlipModal'

import './index.css'

const cardsData = [
  {
    id: 0,
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    id: 1,
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    id: 2,
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    id: 3,
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    id: 4,
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    id: 5,
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    id: 6,
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    id: 7,
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    id: 8,
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    id: 9,
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
  {
    id: 10,
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    id: 11,
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    id: 12,
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    id: 13,
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    id: 14,
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
  {
    id: 15,
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    id: 16,
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    id: 17,
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    id: 18,
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    id: 19,
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
]

const CardFlip = props => {
  const {
    item,
    CardSelected,
    selected,
    selectedId,
    correctlySelected,
    NoAction,
    wrongIds,
  } = props
  const {name, image, id} = item
  let itemId
  const ParticularItem = cardsData.find(each => each.id === id)
  let CardBackground = wrongIds.includes(id)
  let ImageElement
  let imageAlt
  if (CardBackground) {
    CardBackground = 'WrongChoice'
  }
  if (selected.length > 0) {
    itemId = selected[0].id
    if (itemId === id) {
      CardBackground = 'CorrectChoice'
    }
  }

  const Clicked = () => {
    CardSelected(id)
  }
  if (correctlySelected.includes(ParticularItem)) {
    ImageElement = image
    imageAlt = name
  } else {
    let SameId = false
    const selectedIdPresent = selectedId.includes(id)
    if (selected.length > 0 && selectedIdPresent) {
      SameId = true
    }
    if (SameId) {
      ImageElement = image
      imageAlt = name
    } else {
      ImageElement =
        'https://res.cloudinary.com/dktgcdgar/image/upload/v1713775574/foot-print_1_v2i0ik.png'
      imageAlt = 'footprint'
    }
  }
  if (correctlySelected.includes(ParticularItem)) {
    CardBackground = 'CorrectChoice'
  }
  return NoAction ? (
    <li className={`CardsListItem ${CardBackground}`} data-testid={name}>
      <img src={ImageElement} className="FootPrintImg" alt={imageAlt} />
    </li>
  ) : (
    <li
      className={`CardsListItem ${CardBackground}`}
      onClick={Clicked}
      data-testid={name}
    >
      <img src={ImageElement} className="FootPrintImg" alt={imageAlt} />
    </li>
  )
}

class CardFlipGame extends Component {
  state = {
    selected: [],
    selectedId: [],
    correctlySelected: [],
    NoAction: false,
    wrongIds: [],
    TimerSec: 60,
    TimerMin: 2,
    FlipCount: 0,
    Score: 0,
    lowestFlipCount: 0,
    Result: false,
    Win: false,
  }

  componentDidMount = () => {
    this.TimerValue = setInterval(() => {
      this.TimerCount()
    }, 1000)
  }

  componentWillUnMount = () => {
    clearInterval(this.TimerValue)
  }

  TimerCount = () => {
    const {TimerSec, TimerMin} = this.state
    if (TimerSec === 60) {
      this.setState(prevState => ({
        TimerSec: prevState.TimerSec - 1,
        TimerMin: prevState.TimerMin - 1,
      }))
    } else if (TimerSec === 0 && TimerMin === 0) {
      clearInterval(this.TimerValue)
      this.setState({Result: true, Win: false})
    } else if (TimerSec === 1 && TimerMin !== 0) {
      this.setState({
        TimerSec: 60,
      })
    } else {
      this.setState(prevState => ({TimerSec: prevState.TimerSec - 1}))
    }
  }

  playAgainClicked = () => {
    this.setState(
      {
        selected: [],
        selectedId: [],
        correctlySelected: [],
        NoAction: false,
        wrongIds: [],
        TimerSec: 60,
        TimerMin: 2,
        FlipCount: 0,
        Score: 0,
        Result: false,
        Win: false,
      },
      this.componentDidMount,
    )
  }

  check = () => {
    const {selected, correctlySelected, lowestFlipCount, FlipCount} = this.state
    const firstItem = selected[0]
    const secondItem = selected[1]
    if (firstItem.name === secondItem.name) {
      this.setState(prevState => ({
        correctlySelected: [
          ...prevState.correctlySelected,
          firstItem,
          secondItem,
        ],
        selected: [],
        NoAction: false,
        wrongIds: [],
        Score: prevState.Score + 1,
      }))
      if (correctlySelected.length === 18) {
        if (FlipCount < lowestFlipCount || lowestFlipCount === 0) {
          this.setState({lowestFlipCount: FlipCount, Result: true, Win: true})
        } else {
          this.setState({Result: true, Win: true})
        }
      }
    } else {
      const timeOut = setTimeout(() => {
        this.setState(prevState => ({
          selected: [],
          selectedId: [],
          NoAction: false,
          wrongIds: [],
        }))
        clearTimeout(timeOut)
      }, 2000)
    }
  }

  BackButtonClicked = () => {
    const {history} = this.props
    history.replace('/')
  }

  CardSelected = id => {
    const {selected} = this.state
    const reminder = selected.find(each => each.id === id)
    if (selected.length > 0) {
      this.setState(prevState => ({FlipCount: prevState.FlipCount + 1}))
    }
    if (reminder === undefined) {
      if (selected.length === 0) {
        const SelectedItem = cardsData.find(each => each.id === id)
        this.setState(prevState => ({
          selected: [...prevState.selected, SelectedItem],
          selectedId: [...prevState.selectedId, id],
        }))
      }
      if (selected.length > 0) {
        const SecondItem = cardsData.find(each => each.id === id)
        const wrongcheck = selected.includes(id)
        if (wrongcheck === false) {
          this.setState(prevState => ({wrongIds: [...prevState.wrongIds, id]}))
        }
        this.setState(
          prevState => ({
            selected: [...prevState.selected, SecondItem],
            selectedId: [...prevState.selectedId, id],
            NoAction: true,
          }),
          this.check,
        )
      }
    }
  }

  render() {
    const {
      selected,
      selectedId,
      correctlySelected,
      NoAction,
      wrongIds,
      Result,
      Win,
    } = this.state
    let {TimerSec, FlipCount, Score, lowestFlipCount, TimerMin} = this.state
    if (TimerSec === 60) {
      TimerSec = `00`
    } else if (TimerSec < 10) {
      TimerSec = `0${TimerSec}`
    }
    if (TimerMin === 60) {
      TimerMin = `00`
    } else if (TimerMin < 10) {
      TimerMin = `0${TimerMin}`
    }
    if (FlipCount < 10) {
      FlipCount = `0${FlipCount}`
    }
    if (Score < 10) {
      Score = `0${Score}`
    }
    if (lowestFlipCount < 10) {
      lowestFlipCount = `0${lowestFlipCount}`
    }
    let ResultPage
    if (Win) {
      ResultPage = (
        <div className="CardFlipResultContainer">
          <img
            src="https://res.cloudinary.com/dktgcdgar/image/upload/v1713614304/grinning-face-with-big-eyes_1f603_ytzhjq.png"
            className="CardFlipResultEmoji"
            alt="grinning face with big eyes"
          />
          <h1 className="CardFlipResultCongrats">Congratulations!</h1>
          <p className="CardFlipResultPara">No.of Flips - {FlipCount}</p>
          <h1 className="CardFlipResultPara2">
            You matched all of the cards in record time
          </h1>
          <button
            className="CardFlipPlayAgainButton"
            type="button"
            onClick={this.playAgainClicked}
          >
            Play Again
          </button>
        </div>
      )
    } else {
      ResultPage = (
        <div className="CardFlipResultContainer">
          <img
            src="https://res.cloudinary.com/dktgcdgar/image/upload/v1713612175/neutral-face_1f610_nfcmnd.png"
            className="CardFlipResultEmoji"
            alt="neutral face"
          />
          <h1 className="CardFlipResultCongrats">Better luck next time</h1>
          <p className="CardFlipResultPara">No.of Flips-{FlipCount}</p>
          <h1 className="CardFlipResultPara2">
            You did not match all of the cards in record time
          </h1>
          <button
            className="CardFlipPlayAgainButton"
            type="button"
            onClick={this.playAgainClicked}
          >
            Play Again
          </button>
        </div>
      )
    }

    return Result ? (
      ResultPage
    ) : (
      <div className="CardFlipMainContainer">
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
          </div>
          <CardFlipRulesPopUp />
        </div>
        <h1 className="CardFlipGameHeading">Card-Flip Memory Game</h1>
        <p className="CardFlipTimer">
          {TimerMin}:{TimerSec}
        </p>
        <div className="Containerone">
          <p className="CardLowestFlip">Lowest Flip Count-00</p>
          <p className="CardFlipTimerSmallDevices">
            {TimerMin}:{TimerSec}
          </p>
        </div>
        <div className="Containertwo">
          <p className="CardFlipCount">Card flip count - {FlipCount}</p>
          <p className="CardFlipScore">Score - {Score}</p>
        </div>
        <div className="CardFlipScoreContainer">
          <p className="CardFlipCount">Card flip count-{FlipCount}</p>
          <p className="CardLowestFlip">Lowest Flip Count-{lowestFlipCount}</p>
          <p className="CardFlipScore">Score-{Score}</p>
        </div>
        <ul className="CardFlipUnordered">
          {cardsData.map(each => (
            <CardFlip
              item={each}
              key={each.id}
              CardSelected={this.CardSelected}
              selected={selected}
              selectedId={selectedId}
              correctlySelected={correctlySelected}
              NoAction={NoAction}
              wrongIds={wrongIds}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CardFlipGame
