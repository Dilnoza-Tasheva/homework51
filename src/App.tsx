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
    setBalls([
      {ball: 6},
      {ball: 15},
      {ball: 18},
      {ball: 25},
      {ball: 34},
    ])

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
