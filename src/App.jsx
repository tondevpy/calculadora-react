import { Container, Content, Row } from './styles';
import Inputs from './components/Inputs';
import Buttons from './components/Buttons';
import { useState } from 'react';

const App = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  
  const handleNumber = (num) => {
    // Verifica se já existe uma vírgula no número
    if (num === '.' && number.includes('.')) return;

    setNumber(prev => {
      if (prev === '0' && num !== ',') {
        return num;
      } else if (prev === '0' && num === ',') {
        return '0.';
      } else {
        return `${prev}${num}`;
      }
    });
  }

  const clear = () => {
    setNumber('0');
    setPreviousNumber(null);
    setOperator(null);
  }

  const handleOperator = (op) => {
    setPreviousNumber(number);
    setNumber('0');
    setOperator(op);
  }

  const calculateResult = () => {
    if (operator && previousNumber && number) {
      let num1 = parseFloat(previousNumber.replace(',', '.'));
      let num2 = parseFloat(number.replace(',', '.'));
      let result;
      
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case 'x':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        default:
          break;
      }
      
      setNumber(result.toString());
      setPreviousNumber(null);
      setOperator(null);
    }
  }

  return (
    <Container>
      <Content>
        <Inputs value={number}/>
        <Row>
          <Buttons label="/" onClick={() => handleOperator('/')}/>
          <Buttons label="C" onClick={clear}/>
          <Buttons label="X" onClick={() => handleOperator('x')}/>
        </Row>
        <Row>
          <Buttons label="7" onClick={() => handleNumber('7')} />
          <Buttons label="8" onClick={() => handleNumber('8')}/>
          <Buttons label="9" onClick={() => handleNumber('9')}/>
          <Buttons label="-" onClick={() => handleOperator('-')}/>
        </Row>
        <Row>
          <Buttons label="4" onClick={() => handleNumber('4')}/>
          <Buttons label="5" onClick={() => handleNumber('5')}/>
          <Buttons label="6" onClick={() => handleNumber('6')}/>
          <Buttons label="+" onClick={() => handleOperator('+')}/>
        </Row>
        <Row>
          <Buttons label="1" onClick={() => handleNumber('1')}/>
          <Buttons label="2" onClick={() => handleNumber('2')}/>
          <Buttons label="3" onClick={() => handleNumber('3')}/>
          <Buttons label="," onClick={() => handleNumber('.')} />
        </Row>
        <Row>
          <Buttons label="0" onClick={() => handleNumber('0')}/>
          <Buttons label="=" onClick={calculateResult}/>
        </Row>
      </Content>
    </Container>
  );
};

export default App;
