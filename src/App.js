import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row, Column } from './styles'
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState ('0');
  const [operation, setOperation ] = useState('');

  const handlerAddNumnber = (num) =>{
    setCurrentNumber(prev => `${prev === '0'? '' : prev}${num}`)
  };

  const handlerOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };


  const handlerSomaNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    }else{
      const soma = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(soma));
      setOperation('')
      
    }
  }
  const handlerSubNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    }else{
      const subtrair = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(subtrair));
      setOperation('')
      
    }
  }
  const handlerMulNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    }else{
      const multiplicar = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiplicar));
      setOperation('')
      
    }
  }
  const handlerDivNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    }else{
      const dividir = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(dividir));
      setOperation('')
      
    }
  }
  const handlerIguals = () => {
    if(firstNumber != '0' && operation != '' && currentNumber != '0'){
      switch(operation){
        case '+':
          handlerSomaNumbers();
           break;
      }
      switch(operation){
        case '-':
          handlerSubNumbers();
           break;
      }
      switch(operation){
        case '*':
          handlerMulNumbers();
           break;
      }
      switch(operation){
        case '/':
          handlerDivNumbers();
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
        <Button label="7" onClick={() => handlerAddNumnber('7')}/>
        <Button label="8" onClick={() => handlerAddNumnber('8')}/>
        <Button label="9" onClick={() => handlerAddNumnber('9')}/>
        <Button label="/" onClick={handlerDivNumbers}/>
        </Row>
        <Row>
        <Button label="4" onClick={() => handlerAddNumnber('4')}/>
        <Button label="5" onClick={() => handlerAddNumnber('5')}/>
        <Button label="6" onClick={() => handlerAddNumnber('6')}/>
        <Button label="-" onClick={handlerSubNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handlerAddNumnber('1')}/>
          <Button label="2" onClick={() => handlerAddNumnber('2')}/>
          <Button label="3" onClick={() => handlerAddNumnber('3')}/>
          <Button label="+" onClick={handlerSomaNumbers}/>
        </Row>
        <Row>
        <Button label="C" onClick={() => handlerOnClear('C')}/>
        <Button label="0" onClick={() => handlerAddNumnber('0')}/>
        <Button label="*" onClick={handlerMulNumbers}/>
        <Button label="=" onClick={handlerIguals}/>
        </Row>
      </Content>
    </Container>
    
  );
}

export default App;
