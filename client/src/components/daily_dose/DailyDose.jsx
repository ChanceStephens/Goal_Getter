import React from 'react';
import Jokes from './Jokes';
import Advice from './Advice';
import Quotes from './Quotes';
import './DailyDose.css';

export default function DailyDose() {
    return (
        <div className='dailyDose'>
            <Jokes />
            <Advice />
            <Quotes />
        </div>
    );
}
