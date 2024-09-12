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

  return (
    <>
      <Lotteryball ball={balls[0].ball}/>
      <Lotteryball ball={balls[1].ball}/>
      <Lotteryball ball={balls[2].ball}/>
      <Lotteryball ball={balls[3].ball}/>
      <Lotteryball ball={balls[4].ball}/>
    </>
  )
};

export default App
