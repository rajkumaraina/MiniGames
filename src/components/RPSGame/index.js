import {Component} from 'react'

import {CgClose} from 'react-icons/cg'

import {BiArrowBack} from 'react-icons/bi'

import GameResultView from '../RPSGameResultView'

import RulesPopUp from '../RPSModal'

import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://res.cloudinary.com/dktgcdgar/image/upload/v1711197247/Group_7600_awpk1i.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://res.cloudinary.com/dktgcdgar/image/upload/v1711197246/Group_7598_egnae1.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://res.cloudinary.com/dktgcdgar/image/upload/v1711197246/Group_6943_xytdyl.png',
  },
]

const EachGameItem = props => {
  const {item, clicked} = props
  const {id, imageUrl} = item
  let value
  let altvalue
  switch (id) {
    case 'ROCK':
      value = 'rockButton'
      altvalue = 'rock'
      break
    case 'SCISSORS':
      value = 'scissorButton'
      altvalue = 'scissor'
      break
    case 'PAPER':
      value = 'paperButton'
      altvalue = 'paper'
      break
    default:
      break
  }

  const onClicked = () => {
    clicked(id)
    console.log(value)
  }
  return (
    <button
      className="EachItem"
      data-testid={value}
      type="button"
      onClick={onClicked}
    >
      <img className="ImageElement" src={imageUrl} alt={altvalue} />
    </button>
  )
}

class RPSGame extends Component {
  state = {
    itemClicked: false,
    score: 0,
    random: choicesList[0],
    selected: choicesList[0],
  }

  BackButtonClicked = () => {
    const {history} = this.props
    history.replace('/')
  }

  clicked = id => {
    const {score} = this.state
    const selectedItem = choicesList.find(each => each.id === id)
    const r = Math.floor(Math.random() * choicesList.length)
    console.log(r)
    const randomItem = choicesList[r]
    console.log(selectedItem.id)
    console.log(randomItem.id)
    let result = 'INITIAL'
    let newScore
    let emojiUrl
    if (id === 'ROCK') {
      switch (randomItem.id) {
        case 'PAPER':
          result = 'YOU LOSE'
          newScore = score - 1
          emojiUrl =
            'https://res.cloudinary.com/dktgcdgar/image/upload/v1711204486/Emoji_2_rrrfqy.png'
          break
        case 'SCISSORS':
          result = 'YOU WON'
          emojiUrl =
            'https://res.cloudinary.com/dktgcdgar/image/upload/v1711204486/Emoji_zx2jkn.png'
          newScore = score + 1
          break
        default:
          result = 'IT IS DRAW'
          emojiUrl =
            'https://res.cloudinary.com/dktgcdgar/image/upload/v1711204486/Emoji_1_dop4bq.png'
          newScore = score
          break
      }
    }
    if (id === 'PAPER') {
      switch (randomItem.id) {
        case 'ROCK':
          result = 'YOU WON'
          newScore = score + 1
          emojiUrl =
            'https://res.cloudinary.com/dktgcdgar/image/upload/v1711204486/Emoji_zx2jkn.png'
          break
        case 'SCISSORS':
          result = 'YOU LOSE'
          newScore = score - 1
          emojiUrl =
            'https://res.cloudinary.com/dktgcdgar/image/upload/v1711204486/Emoji_2_rrrfqy.png'
          break
        default:
          result = 'IT IS DRAW'
          emojiUrl =
            'https://res.cloudinary.com/dktgcdgar/image/upload/v1711204486/Emoji_1_dop4bq.png'
          newScore = score
          break
      }
    }
    if (id === 'SCISSORS') {
      switch (randomItem.id) {
        case 'PAPER':
          result = 'YOU WON'
          emojiUrl =
            'https://res.cloudinary.com/dktgcdgar/image/upload/v1711204486/Emoji_zx2jkn.png'
          newScore = score + 1
          break
        case 'ROCK':
          result = 'YOU LOSE'
          newScore = score - 1
          emojiUrl =
            'https://res.cloudinary.com/dktgcdgar/image/upload/v1711204486/Emoji_2_rrrfqy.png'
          break
        default:
          result = 'IT IS DRAW'
          emojiUrl =
            'https://res.cloudinary.com/dktgcdgar/image/upload/v1711204486/Emoji_1_dop4bq.png'
          newScore = score
          break
      }
    }
    this.setState({
      itemClicked: true,
      random: randomItem,
      selected: selectedItem,
      result,
      emojiUrl,
      score: newScore,
    })
  }

  playAgain = () => {
    this.setState({itemClicked: false})
  }

  render() {
    const {itemClicked, score, random, selected, result, emojiUrl} = this.state
    let ScoreEmoji
    if (result === 'YOU WON') {
      ScoreEmoji = (
        <img
          src="https://res.cloudinary.com/dktgcdgar/image/upload/v1711203969/Group_7618_narfpl.png"
          alt="won emoji"
          className="rpsResultEmoji"
        />
      )
    } else if (result === 'YOU LOSE') {
      ScoreEmoji = (
        <img
          src="https://res.cloudinary.com/dktgcdgar/image/upload/v1711203969/Group_7618_1_uyj3zc.png"
          alt="lose emoji"
          className="rpsResultEmoji"
        />
      )
    } else if (result === 'IT IS DRAW') {
      ScoreEmoji = (
        <img
          src="https://res.cloudinary.com/dktgcdgar/image/upload/v1711205747/Group_7618_2_nd29qg.png"
          alt="draw emoji"
          className="rpsResultEmoji"
        />
      )
    } else {
      ScoreEmoji = (
        <img
          src="https://res.cloudinary.com/dktgcdgar/image/upload/v1711020459/wink_1_lnyiyp.png"
          className="rpsResultEmoji"
          alt="emoji"
        />
      )
    }

    return (
      <div className="rpsMainContainer">
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
          <RulesPopUp />
        </div>

        <div className="rpsscoreContainer">
          <div>
            <h1 className="rpsheading">Rock Paper Scissors</h1>
          </div>
          <div className="rpsScoreContainerEmojiAndScore">
            {ScoreEmoji}
            <div className="ScoreValueContainer">
              <p className="ScorePara" inside>
                Score
              </p>
              <p className="Score">{score}</p>
            </div>
          </div>
        </div>
        {itemClicked ? (
          <>
            <h1 className="white">Rock Paper Scissor</h1>
            <GameResultView
              selected={selected}
              random={random}
              result={result}
              emojiUrl={emojiUrl}
              playAgain={this.playAgain}
            />
          </>
        ) : (
          <>
            <h1 className="white">Let's pick</h1>
            <div className="PlayingView">
              {choicesList.map(each => (
                <EachGameItem
                  item={each}
                  key={each.id}
                  clicked={this.clicked}
                />
              ))}
            </div>
          </>
        )}
      </div>
    )
  }
}

export default RPSGame
