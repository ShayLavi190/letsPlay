import React, { useEffect, useState } from 'react';
import './Stage2.css';

function Stage2() {
    const queryParams = new URLSearchParams(window.location.search);
    const players = parseInt(queryParams.get('players'), 10) || 1;
    const mode = queryParams.get('mode');

    const [playerNames, setPlayerNames] = useState(Array(players).fill(''));

    const handleInputChange = (event, index) => {
        const updatedPlayerNames = [...playerNames];
        updatedPlayerNames[index] = event.target.value;
        setPlayerNames(updatedPlayerNames);
    };

    function handleSubmit(event) {
        event.preventDefault(); 
    
        const namesQueryParam = encodeURIComponent(JSON.stringify(playerNames));
        const queryParams = `?names=${namesQueryParam}&players=${players}&mode=${mode}`;
        window.location.href = '/stage3' + queryParams;
    }

    const playerInputs = [];

    for (let i = 0; i < players; i++) {
        playerInputs.push(
            <div key={i} className="form__group field" style={{ marginBottom: '25px' }}>
                <input
                    type="text"
                    className="form__field"
                    placeholder={`Player ${i + 1} Name`}
                    name={`player${i}`}
                    id={`player${i}`}
                    required
                    value={playerNames[i]}
                    onChange={(event) => handleInputChange(event, i)}
                />
                <label htmlFor={`player${i}`} className="form__label">{`Player ${i + 1} Name`}</label>
            </div>
        );
    }

    return (
        <div className='stage1'>
            <div className='textfield2' >
                <p className='desc21'>Enter players names</p>
                <form onSubmit={handleSubmit}>
                    <div className='pi'>{playerInputs}</div>
                    <button className='buttonletsplay' style={{ marginTop: '20px', position: 'relative' }}>
                        Next
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Stage2;
