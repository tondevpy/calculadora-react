import {ButtonContainer} from './style'

const Buttons = ({label, onClick}) => {
  return (
    <ButtonContainer onClick={onClick} type='number'>
      {label}
    </ButtonContainer>
  )
}

export default Buttons