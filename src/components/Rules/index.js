import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import {
  RulesButton,
  CloseButton,
  RulesImage,
  PopUpContainer,
} from './styledComponents'

const Rules = () => (
  <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
    {close => (
      <PopUpContainer>
        <CloseButton type="button" onClick={() => close()}>
          <RiCloseLine />
        </CloseButton>

        <RulesImage
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
      </PopUpContainer>
    )}
  </Popup>
)
export default Rules
