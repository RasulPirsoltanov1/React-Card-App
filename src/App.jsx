import logo from './logo.svg';
import './App.css';
import Crad from './components/cards';
import Test from './test/test';
import { useState } from 'react';
import { Checkbox, Input } from '@mantine/core';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import CardPro from './components/cards/CardPro';
import { Textarea } from '@mantine/core';
import { Container } from '@mantine/core';
import { Stack } from '@mantine/core';


let arr = [
  {
    title: "Test 1",
    par: "Par 1"
  },
  {
    title: "Test 2",
    par: "Par 2"
  },
  {
    title: "Test 3",
    par: "Par 3"
  }
];

function App() {
  const [val, setVal] = useState(0);
  const [list, setList] = useState(arr); // Use an array to store CardPro components

  // const addCard = () => {
  //   setCards([...cards, <CardPro className="cardPro" />]);
  // };


  function click() {
    let title = document.getElementById("inputTitle").value;
    let par = document.getElementById("inputPar").value;
    if(title!=""&&par!=""){
      setList([...list, { title, par }]);
      document.getElementById("inputTitle").value="";
      document.getElementById("inputPar").value="";
    }
  }

  return (
    <Container>
      <Stack h={300} sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
        <h1>Card Application</h1>
        <Input.Wrapper label="Title">
          <Input id='inputTitle'
            placeholder="Title..."
            radius="lg"
          />
        </Input.Wrapper>
        <Textarea
          id='inputPar'
          placeholder="Your comment"
          label="Your comment"
          withAsterisk
        />
        <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} onClick={click}>Add Card</Button>
      </Stack>
      <div className="card-container">
        {list.map(({ title, par }, index) => (
          <CardPro title={title} par={par} key={"CardIndex" + index}></CardPro>
        ))}
      </div>
    </Container>

  );
}
export default App;
