import '../RPSGame/index.css'

const RPSGameResultView = props => {
  const {selected, random, result, playAgain, emojiUrl} = props
  const play = () => {
    playAgain()
  }
  let altvalue
  if (result === 'YOU WON') {
    altvalue = 'Smiling face with star eyes'
  } else if (result === 'YOU LOSE') {
    altvalue = 'Frowning face'
  } else {
    altvalue = 'Face without mouth'
  }
  let choiceAlt
  let randomAlt
  if (selected.id === 'ROCK') {
    choiceAlt = 'rock'
  } else if (selected.id === 'SCISSORS') {
    choiceAlt = 'scissor'
  } else {
    choiceAlt = 'paper'
  }
  if (random.id === 'ROCK') {
    randomAlt = 'rock'
  } else if (random.id === 'SCISSORS') {
    randomAlt = 'scissor'
  } else {
    randomAlt = 'paper'
  }
  return (
    <div className="ResultView">
      <div className="OneItem">
        <p className="Person">You</p>
        <img className="ImageElement" src={selected.imageUrl} alt={choiceAlt} />
      </div>
      <div className="OneItem">
        <p className="Person">Opponent</p>
        <img className="ImageElement" src={random.imageUrl} alt={randomAlt} />
      </div>
      <div className="RPSResultContainer">
        <img src={emojiUrl} alt={altvalue} />
        <p className="ResultPara">{result}</p>
        <button className="RPSPlayAgainButton" onClick={play} type="button">
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default RPSGameResultView
