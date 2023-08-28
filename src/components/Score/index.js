import {
  ScoreContainer,
  GameHeading,
  ScoreCountContainer,
  Paragraph,
  Heading,
} from './styledComponents'

const Score = props => {
  const {score} = props
  return (
    <ScoreContainer>
      <GameHeading>
        <Heading>
          ROCK <br />
          PAPER <br />
          SCISSORS
        </Heading>
      </GameHeading>
      <ScoreCountContainer>
        <Paragraph>Score</Paragraph>
        <Paragraph>{score}</Paragraph>
      </ScoreCountContainer>
    </ScoreContainer>
  )
}

export default Score
