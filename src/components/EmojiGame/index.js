import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {MdClose} from 'react-icons/md'

import {WinNavbarItem, LooseNavbarItem} from '../EmojiNavBar'

import {Win, Loose} from '../EmojiResultCard'

import './index.css'

import EachEmojiCard from '../EmojiCard'

const initialEmojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class EmojiGame extends Component {
  state = {
    emojisList: initialEmojisList,
    standardList: initialEmojisList,
    emojiClicked: [],
    count: 0,
    topScore: 0,
    result: false,
    won: false,
    scoreCard: 0,
  }

  startGame = () => {
    this.setState({
      emojiClicked: [],
      result: false,
      won: false,
    })
  }

  BackButtonClicked = () => {
    const {history} = this.props
    history.replace('/')
  }

  emojiClicked = id => {
    const {
      emojisList,
      emojiClicked,
      standardList,
      count,
      result,
      topScore,
    } = this.state
    const isEmojiClicked = emojiClicked.includes(
      emojiClicked.find(eachItem => eachItem.id === id),
    )

    if (isEmojiClicked === true) {
      console.log('You lost the game')
      let bestScore
      if (count > topScore) {
        bestScore = count
      } else if (bestScore === 11) {
        bestScore = 12
      } else {
        bestScore = topScore
      }
      this.setState({
        count: 0,
        won: false,
        result: !result,
        scoreCard: count,
        emojiClicked: [],
        topScore: bestScore,
      })
    } else {
      console.log('Continue')
      if (emojiClicked.length === 11) {
        this.setState({won: true, result: !result, count: 0, topScore: 12})
      } else {
        const item = standardList.find(each => each.id === id)
        this.setState(prevState => ({
          emojiClicked: [...prevState.emojiClicked, item],
          count: prevState.count + 1,
        }))
      }
    }

    const shuffledEmojisList = () => emojisList.sort(() => Math.random() - 0.5)
    this.setState({emojisList: shuffledEmojisList()})
  }

  render() {
    const {emojisList, count, topScore, result, won, scoreCard} = this.state
    const scoreBoard = {SCORE: count, TOPSCORE: topScore}
    let resultCard
    if (result === true) {
      if (won === true) {
        resultCard = <Win result={won} startGame={this.startGame} />
      } else {
        resultCard = (
          <Loose
            result={won}
            scoreCard={scoreCard}
            startGame={this.startGame}
          />
        )
      }
    } else {
      resultCard = (
        <div className="cardsContainer">
          <ul className="UnorderedList">
            {emojisList.map(eachItem => (
              <EachEmojiCard
                item={eachItem}
                key={eachItem.id}
                emojiClicked={this.emojiClicked}
              />
            ))}
          </ul>
        </div>
      )
    }
    let NavbarToDisplay
    if (result === true) {
      NavbarToDisplay = (
        <WinNavbarItem scoreBoard={scoreBoard} startGame={this.startGame} />
      )
    } else {
      NavbarToDisplay = (
        <LooseNavbarItem scoreBoard={scoreBoard} startGame={this.startGame} />
      )
    }
    return (
      <div className="EmojiGameMainContainer">
        {NavbarToDisplay}
        <div className="EmojiHomeBack">
          <div className="EmojiBackIconContainer">
            <button
              className="BackButton"
              onClick={this.BackButtonClicked}
              type="button"
            >
              <img
                src="https://res.cloudinary.com/dktgcdgar/image/upload/v1711019747/arrow-left_p58uae.svg"
                className="BackIcon"
                alt="backIcon"
              />
              <p className="backpara">Back</p>
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
                    <div>
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
                      <h1 className="rulesHeading">Rules</h1>
                      <ul className="rulesUnorderedList">
                        <li className="rulesListItem">
                          User should able to see the lists of Emojis
                        </li>
                        <li className="rulesListItem">
                          When the user clicks any of the Emoji for the first
                          time, then the count of the score should be
                          incremented by 1 and the List of emoji cards should be
                          shuffled.
                        </li>
                        <li className="rulesListItem">
                          This process should be repeated every time the user
                          clicks on an emoji card
                        </li>
                        <li className="rulesListItem">
                          When the user clicks on all Emoji cards without
                          clicking any of it twice, then the user will win the
                          game
                        </li>
                        <li className="rulesListItem">
                          When the user clicks on the same Emoji for the second
                          time, then the user will lose the game.
                        </li>
                        <li className="rulesListItem">
                          Once the game is over, the user will be redirected to
                          the results page.
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </Popup>
            </div>
          </div>
        </div>

        <div className="rContainer">{resultCard}</div>
      </div>
    )
  }
}

export default EmojiGame
