import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const ScoreContainer = styled.div`
  border: 1px solid #ffffff;
  width: 80%;
  height: 115px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
`
export const ScorePara = styled.p`
  font-family: 'Bree Serif';
  margin: 3px;
  font-size: 18px;
  color: ${props => (props.inside ? '#000000' : '#ffffff')};
  margin-left: ${props => (props.inside ? '0px' : '35px')};
`

export const Score = styled.p`
  font-family: 'Roboto';
  margin: 2px;
  font-weight: bold;
  margin-top: 8px;
  font-size: 25px;
`
export const ScoreValueContainer = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  margin-right: 35px;
  display: flex;
  flex-direction: column;
  width: 105px;
  height: 85px;
  align-items: center;
`
export const RulesContainer = styled.div`
  width: 80%;
  text-align: end;
`
export const PlayingView = styled.div`
  width: 35%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 35px;
  @media (max-width: 576px) {
    width: 80%;
  }
`
export const EachItem = styled.button`
  border: 0 none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  margin: 12px;
`

export const ImageElement = styled.img`
  width: 135px;
  height: 135px;
`
export const RulesButton = styled.button`
  background-color: #ffffff;
  padding: 8px;
  width: 85px;
  font-family: 'Bree-serif';
  border: 0 none;
  outline: none;
  cursor: pointer;
  font-size: 20px;
  border-radius: 8px;
  margin-bottom: 12px;
`
export const PopUpContainer = styled.div`
  background-color: #ffffff;
  height: 100%;
  width: 600px;
  padding: 18px;
  @media (max-width: 576px) {
    width: 80%;
    margin-left: 38px;
  }
`
export const RulesImg = styled.img`
  width: 100%;
  height: 450px;
  @media (max-width: 576px) {
    width: 100%;
    height: 350px;
  }
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 0 none;
  cursor: pointer;
  width: 100%;
  text-align: end;
  font-size: 25px;
  outline: none;
`

export const ResultView = styled(PlayingView)`
  width: 50%;
  @media (max-width: 576px) {
    width: 80%;
  }
`
export const OneItem = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Person = styled(ScorePara)`
  margin-left: 20px;
  margin-right: 28px;
  margin-bottom: 20px;
`

export const ResultPara = styled.p`
  font-size: 25px;
  color: #ffffff;
  font-family: 'Bree-serif';
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
`

export const PlayAgainButton = styled.button`
  width: 155px;
  background-color: #ffffff;
  padding: 12px;
  font-family: 'Bree-serif';
  border: 0 none;
  outline: none;
  cursor: pointer;
  font-size: 18px;
  border-radius: 8px;
  margin-bottom: 12px;
`
export const Heading = styled.h1`
  width: 40px;
  font-family: 'Bree Serif';
  margin: 3px;
  font-size: 18px;
  color: #ffffff;
  margin-left: 35px;
`
