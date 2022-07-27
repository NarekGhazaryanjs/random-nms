import { useState } from 'react';
import './App.css';
import Card from './ui/Card/Card';
import Header from './ui/Header/Header';
import Wrapper from './ui/Wrapper/Wrapper';
import classes from './ui/Global.module.css'
import Button from './components/Button/Button';
import Textitem from './components/Textitem/Textitem';


const App = () => {
  const [numbers,setNumbers] = useState([]);
  const [newNumberId, setNewNumberId] = useState(1)

  const addRandomNUmber = () => {
    const newRandomNumber = {
      value: Math.ceil(Math.random() * 200),
      id: newNumberId
    };
    setNumbers(numbers.concat(newRandomNumber));
    setNewNumberId(newNumberId + 1)
  }

  const sortNumbers = () => {
    setNumbers([].concat(numbers.sort((itemFirst,itemSecond) => itemFirst.value - itemSecond.value)))
  }

  const deleteItem = (id) => {
    const filteredItems = numbers.filter(number => number.id !== id);
    setNumbers(filteredItems)
  }

  return (
    <Wrapper>
      <Header className={classes['header-block']}>
        <Button onClick={addRandomNUmber} className={classes['header-block__button']}> Add Number </Button>
        <Button onClick={sortNumbers} className={classes['header-block__button']}> Sort Numbers </Button>
      </Header>
      <Card className={classes['main-block']}>
           {
            numbers.map(number => {
              return (
                <Textitem className={classes['main-block__item']} key={number.id}>
                  <Button onClick={() => deleteItem(number.id)} className={classes['delete-item-button']}> X </Button>
                  {number.value}
                </Textitem>
              )
            })
           }
      </Card>
    </Wrapper>
  ) 
}

export default App