import './App.css';
import {useState} from 'react';
import Lotteryball from "./components/lotteryball.tsx";

interface IBalls {
    ball: number;
}

const App = () => {

  const [balls, setBalls] = useState<IBalls[]>([
    {ball: 5},
    {ball: 11},
    {ball: 16},
    {ball: 23},
    {ball: 32},
  ])


  const changeNumbers = () => {
    const numbersSet = new Set<number>();

    while (numbersSet.size < 5) {
      const randomNumber = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
      numbersSet.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbersSet).sort((a, b) => a - b);

    setBalls([
      {ball: sortedNumbers[0]},
      {ball: sortedNumbers[1]},
      {ball: sortedNumbers[2]},
      {ball: sortedNumbers[3]},
      {ball: sortedNumbers[4]},
    ]);
  };

  return (
    <>
      <Lotteryball ball={balls[0].ball}/>
      <Lotteryball ball={balls[1].ball}/>
      <Lotteryball ball={balls[2].ball}/>
      <Lotteryball ball={balls[3].ball}/>
      <Lotteryball ball={balls[4].ball}/>
      <button onClick={changeNumbers} type={"button"}>New numbers</button>
    </>
  )
};

export default App
