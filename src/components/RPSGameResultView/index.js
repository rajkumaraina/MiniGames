import {
  ResultPara,
  PlayAgainButton,
  OneItem,
  Person,
  ImageElement,
  ResultView,
  ResultContainer,
} from '../RPSGame/styledComponents'

const RPSGameResultView = props => {
  const {selected, random, result, playAgain} = props
  const play = () => {
    playAgain()
  }
  return (
    <ResultView>
      <OneItem>
        <Person>You</Person>
        <ImageElement src={selected.imageUrl} clicked alt="your choice" />
      </OneItem>
      <OneItem>
        <Person>Opponent</Person>
        <ImageElement src={random.imageUrl} clicked alt="opponent choice" />
      </OneItem>
      <ResultContainer>
        <ResultPara>{result}</ResultPara>
        <PlayAgainButton onClick={play} type="button">
          PLAY AGAIN
        </PlayAgainButton>
      </ResultContainer>
    </ResultView>
  )
}

export default RPSGameResultView
