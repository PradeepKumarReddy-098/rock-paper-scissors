import styled from 'styled-components'

export const ScoreContainer = styled.div`
  background-color: transparent;
  border: 2px solid #ffffff;
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  @media screen and (min-width: 768px) {
    width: 75%;
  }
`
export const GameHeading = styled.div``

export const OptionItems = styled.li`
  color: #ffffff;
`
export const ScoreCountContainer = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  width: 120px;
  height: 100px;
  padding: 10px;
  box-sizing: content-box;
  @media screen and (min-width: 768 px) {
    width: 150px;
    height: 120px;
  }
`
export const Paragraph = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 20px;
  text-align: center;
`
export const Heading = styled.h3`
  color: #ffffff;
  font-family: 'Roboto';
`
