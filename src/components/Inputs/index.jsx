import {InputContainer,} from './style'

const Inputs = ({value}) => {
  return (
    <InputContainer>
    <input disabled value={value} placeholder='Calculadora'/>
    </InputContainer>
  )
}

export default Inputs