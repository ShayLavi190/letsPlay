import React from 'react';
import './Stage1.css';
import { useState } from 'react';
function Stage1() {
    const [players, setPlayers] = useState(2); // Correctly destructure the useState hook
    const [mode, setMode] = useState("singles");
    function increment() {
        if(players<12)
        {
            setPlayers(players + 1);
        }
    }

    function decrement() {
        if(players>2)
        {
            setPlayers(players - 1);
        }
    }
    const handleOptionChange = (event) => {
        setMode(event.target.value);
    };
    function redirect() {
        
        if(mode ==='pairs')
        {
            if(players % 2 == 0 && players>3)
            {
                const queryParams = `?players=${players}&mode=${mode}`;
                window.location.href = '/stage2' + queryParams;
            }
            else
            {
                alert('For pairs mode you need even number of players and bigger than 3')
            } 
        }
        else
        {
            const queryParams = `?players=${players}&mode=${mode}`;
            window.location.href = '/stage2' + queryParams;
        }
    }

    return (
        <div className='stage1'>
            <div className='textfield'>
                <p className='desc'><b>How many players are you?</b></p>
                <div className="input-group">
                    <input type="button" value="-" className="button-minus" data-field="quantity" onClick={decrement}/>
                    <input type="number" step="1" min="1" max="10" value={players} name="quantity" className="quantity-field" />
                    <input type="button" value="+" className="button-plus" data-field="quantity" onClick={increment} />
                </div>
                <p className='desc'><b>Pairs or singles?</b></p>
                <div className='ss'>
                <div className="radio-inputs">
                    <label className='labell'>
                        <input className="radio-input" type="radio" value="pairs" checked={mode === 'pairs'} onChange={handleOptionChange} />
                        <span className="radio-tile">
                            <span className="radio-icon"></span>
                            <span className="radio-label">Pairs</span>
                        </span>
                    </label>
                    <label  className='labell'>
                        <input className="radio-input" type="radio" value="singles" checked={mode === 'singles'} onChange={handleOptionChange} />
                        <span className="radio-tile">
                            <span className="radio-icon"></span>
                            <span className="radio-label">Singles</span>
                        </span>
                    </label>
                </div>
                </div>
                <button className='buttonletsplay'  style={{ marginTop: '20px' }} onClick={redirect}>Let's start</button>
            </div>
        </div>
    );
}

export default Stage1;
