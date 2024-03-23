import {Component} from 'react'

import Popup from 'reactjs-popup'

import {MdClose} from 'react-icons/md'

import {RiCloseLine} from 'react-icons/ri'

import GameResultView from '../RPSGameResultView'

import './index.css'

import {
  Container,
  ScoreContainer,
  Heading,
  Score,
  ScorePara,
  PlayingView,
  PopUpContainer,
  RulesImg,
  RulesButton,
  RulesContainer,
  ScoreValueContainer,
  EachItem,
  ImageElement,
  CloseButton,
} from './styledComponents'

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
  switch (id) {
    case 'ROCK':
      value = 'rockButton'
      break
    case 'SCISSORS':
      value = 'scissorsButton'
      break
    case 'PAPER':
      value = 'paperButton'
      break
    default:
      break
  }

  const onClicked = () => {
    clicked(id)
    console.log(value)
  }
  return (
    <EachItem data-testid={value} type="button" onClick={onClicked}>
      <ImageElement src={imageUrl} alt={id} />
    </EachItem>
  )
}

class RPSGame extends Component {
  state = {
    itemClicked: false,
    score: 0,
    random: choicesList[0],
    selected: choicesList[0],
  }

  clicked = id => {
    const {score} = this.state
    const selectedItem = choicesList.find(each => each.id === id)
    const r = Math.floor(Math.random() * choicesList.length)
    console.log(r)
    const randomItem = choicesList[r]
    console.log(selectedItem.id)
    console.log(randomItem.id)
    let result
    let newScore
    if (id === 'ROCK') {
      switch (randomItem.id) {
        case 'PAPER':
          result = 'YOU LOSE'
          newScore = score - 1
          break
        case 'SCISSORS':
          result = 'YOU WON'
          newScore = score + 1
          break
        default:
          result = 'IT IS DRAW'
          newScore = score
          break
      }
    }
    if (id === 'PAPER') {
      switch (randomItem.id) {
        case 'ROCK':
          result = 'YOU WON'
          newScore = score + 1
          break
        case 'SCISSORS':
          result = 'YOU LOSE'
          newScore = score - 1
          break
        default:
          result = 'IT IS DRAW'
          newScore = score
          break
      }
    }
    if (id === 'SCISSORS') {
      switch (randomItem.id) {
        case 'PAPER':
          result = 'YOU WON'
          newScore = score + 1
          break
        case 'ROCK':
          result = 'YOU LOSE'
          newScore = score - 1
          break
        default:
          result = 'IT IS DRAW'
          newScore = score
          break
      }
    }
    this.setState({
      itemClicked: true,
      random: randomItem,
      selected: selectedItem,
      result,
      score: newScore,
    })
  }

  playAgain = () => {
    this.setState({itemClicked: false})
  }

  render() {
    const {itemClicked, score, random, selected, result} = this.state
    return (
      <Container>
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

        <ScoreContainer>
          <div>
            <Heading>Rock Paper Scissors</Heading>
          </div>
          <ScoreValueContainer>
            <ScorePara inside>Score</ScorePara>
            <Score>{score}</Score>
          </ScoreValueContainer>
        </ScoreContainer>
        {itemClicked ? (
          <GameResultView
            selected={selected}
            random={random}
            result={result}
            playAgain={this.playAgain}
          />
        ) : (
          <PlayingView>
            {choicesList.map(each => (
              <EachGameItem item={each} key={each.id} clicked={this.clicked} />
            ))}
          </PlayingView>
        )}
      </Container>
    )
  }
}

export default RPSGame
