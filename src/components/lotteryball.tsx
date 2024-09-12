import './lotteryball.css';
import React from 'react';

interface Props {
    ball: number;
}

const Lotteryball: React.FC<Props> = ({ball}) => {
    return (
        <div className="lottery-ball">
            <p>{ball}</p>
        </div>
    );
};

export default Lotteryball;