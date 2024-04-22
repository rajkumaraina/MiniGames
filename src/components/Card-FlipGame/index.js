import {Component} from 'react'

import Popup from 'reactjs-popup'

import {MdClose} from 'react-icons/md'

import {RiCloseLine} from 'react-icons/ri'

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
  console.log(wrongIds)
  const ParticularItem = cardsData.find(each => each.id === id)
  let CardBackground = wrongIds.includes(id)
  let ImageElement
  if (CardBackground) {
    CardBackground = 'WrongChoice'
  }
  console.log(CardBackground)
  const Clicked = () => {
    CardSelected(id)
  }
  if (correctlySelected.includes(ParticularItem)) {
    ImageElement = image
  } else {
    let SameId = false
    const selectedIdPresent = selectedId.includes(id)
    if (selected.length > 0 && selectedIdPresent) {
      SameId = true
    }
    if (SameId) {
      ImageElement = image
    } else {
      ImageElement =
        'https://res.cloudinary.com/dktgcdgar/image/upload/v1713775574/foot-print_1_v2i0ik.png'
    }
  }
  return NoAction ? (
    <li className={`CardsListItem ${CardBackground}`}>
      <img src={ImageElement} className="FootPrintImg" alt="animalImg" />
    </li>
  ) : (
    <li className="CardsListItem" onClick={Clicked}>
      <img src={ImageElement} className="FootPrintImg" alt="animalImg" />
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
  }

  check = () => {
    const {selected, correctlySelected} = this.state
    console.log(selected)
    const firstItem = selected[0]
    const secondItem = selected[1]
    console.log(firstItem)
    console.log(secondItem)
    if (firstItem.name === secondItem.name) {
      console.log('Same')
      this.setState(prevState => ({
        correctlySelected: [
          ...prevState.correctlySelected,
          firstItem,
          secondItem,
        ],
        selected: [],
        NoAction: false,
        wrongIds: [],
      }))
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

  render() {
    const {
      selected,
      selectedId,
      correctlySelected,
      NoAction,
      wrongIds,
    } = this.state
    return (
      <div className="CardFlipMainContainer">
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
                      <h1 className="rulesHeading blackcolor">Rules</h1>
                      <ul className="RpsUnorderedList">
                        <li className="MMListItem RPSRULESLIST blackcolor">
                          When the game is started, the users should be able to
                          see the list of Cards that are shuffled and turned
                          face down.
                        </li>
                        <li className="MMListItem RPSRULESLIST blackcolor">
                          When a user starts the game, the user should be able
                          to see the Timer running.
                        </li>
                        <li className="MMListItem RPSRULESLIST blackcolor">
                          The Timer starts from 2 Minutes.
                        </li>
                        <li className="MMListItem RPSRULESLIST blackcolor">
                          If the two cards have the same image, they remain face
                          up. If not, they should be flipped face down again
                          after a short 2 seconds.
                        </li>
                        <li className="MMListItem RPSRULESLIST blackcolor">
                          Users should be able to compare only two cards at a
                          time.
                        </li>
                        <li className="MMListItem RPSRULESLIST blackcolor">
                          When the user is not able to find all the cards before
                          the timer ends then the game should end and redirect
                          to the Time Up Page.
                        </li>
                        <li className="MMListItem RPSRULESLIST blackcolor">
                          If the user finds all the matching cards before the
                          timer ends, then the user should be redirected to the
                          results page.
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </Popup>
            </div>
          </div>
        </div>
        <h1 className="CardFlipGameHeading">Card-Flip Memory Game</h1>
        <div className="CardFlipScoreContainer">
          <p className="CardFlipCount">Card flip count-00</p>
          <p className="CardFlipTimer">Timer-02:00</p>
          <p className="CardFlipScore">Score-00</p>
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
