import React from 'react';
import './Score.css';

const Score = (props) => (
    <div className="container">
        <div className="row">
            <div className="col-sm-3 mx-auto mt-3" id="score">
                <h6>YOUR SCORE</h6>
                <p>{props.score}</p>
            </div>
        </div>
    </div>
);

export default Score;