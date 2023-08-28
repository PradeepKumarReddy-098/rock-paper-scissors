import {Component} from 'react'
import Score from '../Score'
import Rules from '../Rules'
import {
  GameContainer,
  GamePlayContainer,
  RockScissorContainer,
  ChoiceButton,
  ChoiceImage,
  ResultContainer,
  ResultParagraph,
  PlayAgainButton,
} from './styledComponents'

const displayView = {
  playingView: 'PLAYING',
  resultView: 'RESULT',
}

class Game extends Component {
  state = {
    score: 0,
    gameView: displayView.playingView,
    result: '',
    userChoice: {},
    opponentChoice: {},
  }

  getRandomValue = () => {
    const {choicesList} = this.props
    return choicesList[Math.ceil(Math.random() * 3) - 1]
  }

  onSelectingRock = () => {
    const {score} = this.state
    const {choicesList} = this.props
    const opponentChoice = this.getRandomValue()
    let gameResult = null
    let newScore = score
    if (opponentChoice.id === 'PAPER') {
      gameResult = 'YOU LOSE'
      newScore -= 1
    } else if (opponentChoice.id === 'SCISSORS') {
      gameResult = 'YOU WON'
      newScore += 1
    } else {
      gameResult = 'IT IS DRAW'
    }
    this.setState({
      score: newScore,
      result: gameResult,
      userChoice: choicesList[0],
      opponentChoice,
      gameView: displayView.resultView,
    })
  }

  onSelectingScissors = () => {
    const {score} = this.state
    const {choicesList} = this.props
    const opponentChoice = this.getRandomValue()
    let gameResult = null
    let newScore = score
    if (opponentChoice.id === 'ROCK') {
      gameResult = 'YOU LOSE'
      newScore -= 1
    } else if (opponentChoice.id === 'PAPER') {
      gameResult = 'YOU WON'
      newScore += 1
    } else {
      gameResult = 'IT IS DRAW'
    }
    this.setState({
      score: newScore,
      result: gameResult,
      userChoice: choicesList[1],
      opponentChoice,
      gameView: displayView.resultView,
    })
  }

  onSelectingPaper = () => {
    const {score} = this.state
    const {choicesList} = this.props
    const opponentChoice = this.getRandomValue()
    let gameResult = null
    let newScore = score
    if (opponentChoice.id === 'SCISSORS') {
      gameResult = 'YOU LOSE'
      newScore -= 1
    } else if (opponentChoice.id === 'ROCK') {
      gameResult = 'YOU WON'
      newScore += 1
    } else {
      gameResult = 'IT IS DRAW'
    }
    this.setState({
      score: newScore,
      result: gameResult,
      userChoice: choicesList[2],
      opponentChoice,
      gameView: displayView.resultView,
    })
  }

  playAgain = () => {
    this.setState({gameView: displayView.playingView})
  }

  getGameView = () => {
    const {choicesList} = this.props
    return (
      <GamePlayContainer>
        <RockScissorContainer>
          <ChoiceButton
            type="button"
            onClick={this.onSelectingRock}
            data-testid={`${choicesList[0].id.toLowerCase()}Button`}
          >
            <ChoiceImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
            />
          </ChoiceButton>
          <ChoiceButton
            type="button"
            onClick={this.onSelectingScissors}
            data-testid={`${choicesList[1].id.toLowerCase()}Button`}
          >
            <ChoiceImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
            />
          </ChoiceButton>
        </RockScissorContainer>
        <ChoiceButton
          type="button"
          onClick={this.onSelectingPaper}
          data-testid={`${choicesList[2].id.toLowerCase()}Button`}
        >
          <ChoiceImage src={choicesList[2].imageUrl} alt={choicesList[2].id} />
        </ChoiceButton>
      </GamePlayContainer>
    )
  }

  getResultView = () => {
    const {result, userChoice, opponentChoice} = this.state
    return (
      <ResultContainer>
        <RockScissorContainer>
          <ChoiceImage src={userChoice.imageUrl} alt="your choice" />
          <ChoiceImage src={opponentChoice.imageUrl} alt="opponent choice" />
        </RockScissorContainer>
        <ResultParagraph>{result}</ResultParagraph>
        <PlayAgainButton type="button" onClick={this.playAgain}>
          Play Again
        </PlayAgainButton>
      </ResultContainer>
    )
  }

  renderGame = () => {
    const {gameView} = this.state
    switch (gameView) {
      case displayView.playingView:
        return this.getGameView()
      case displayView.resultView:
        return this.getResultView()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state
    return (
      <GameContainer>
        <Score score={score} />
        {this.renderGame()}
        <Rules />
      </GameContainer>
    )
  }
}

export default Game
