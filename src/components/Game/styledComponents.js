import styled from 'styled-components'

export const GameContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
`
export const GamePlayContainer = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const RockScissorContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ChoiceButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
`
export const ChoiceImage = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`
export const ResultParagraph = styled.p`
  color: #ffffff;
  font-weight: 600;
  text-align: center;
`
export const PlayAgainButton = styled(ChoiceButton)`
  background-color: #ffffff;
  padding: 14px;
  border-radius: 10px;
  color: #223a5f;
  align-self: center;
`
