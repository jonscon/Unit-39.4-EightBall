import { useState } from 'react';

import defaultAnswers from './answers.json';
import { random } from './random.js';
import './EightBall.css';

/**
 * 
 *  EightBall: shows a random answer. on click, change answer
 * 
 *  Props:
 * - answers: array of { msg, color }
 * 
 * State:
 * - answer: { msg, color } of current color
 */

function EightBall({ answers = defaultAnswers }) {
    const [answer, changeAnswer] = useState({
        msg: "Think of a question.",
        color: "black",
    });

    function handleClick(e) {
        changeAnswer(random(answers));
    }

    return (
        <div className="EightBall" onClick={ handleClick } style={{ backgroundColor: answer.color }}>
            <b>{ answer.msg }</b>
        </div>
    )
}

export default EightBall;