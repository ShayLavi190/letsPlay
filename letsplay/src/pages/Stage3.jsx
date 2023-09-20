import React, { useEffect, useState } from 'react';
import './Stage3.css'
function Stage3() {
    const queryParams = new URLSearchParams(window.location.search);
    const players = parseInt(queryParams.get('players'), 10) || 1;
    const mode = queryParams.get('mode');
    let names = queryParams.get('names');
    const [league, setLeague] = useState("All");
    const [rating, setRating] = useState("3");

    try {
        names = JSON.parse(decodeURIComponent(names || '[]'));
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }

    const handleOptionChange = (event) => {
        setLeague(event.target.value);
    };
    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault(); 
    
        const queryParams = `?names=${names}&players=${players}&mode=${mode}&league=${league}&rating=${rating}`;
        window.location.href = '/stage4' + queryParams;
    }

    return (
        <div className='stage1'>
            <div className='textfield3'>
                <p className='desc'><b>which league you want to play? (there is internetional and all team mode)</b></p>
                <form onSubmit={handleSubmit}>
                <div className="radio-inputs3">
                    <label>
                        <input className="radio-input" type="radio" value="Priemer league" checked={league === 'Priemer league'} onChange={handleOptionChange} />
                        <span className="radio-tile">
                            <span className="radio-icon"></span>
                            <span className="radio-label">Priemer league</span>
                        </span>
                    </label>
                    <label>
                        <input className="radio-input" type="radio" value="Seria A" checked={league === 'Seria A'} onChange={handleOptionChange} />
                        <span className="radio-tile">
                            <span className="radio-icon"></span>
                            <span className="radio-label">Seria A</span>
                        </span>
                    </label>
                    <label>
                        <input className="radio-input" type="radio" value="La liga" checked={league === 'La liga'} onChange={handleOptionChange} />
                        <span className="radio-tile">
                            <span className="radio-icon"></span>
                            <span className="radio-label">La liga</span>
                        </span>
                    </label>
                    <label>
                        <input className="radio-input" type="radio" value="Bundesliga" checked={league === 'Bundesliga'} onChange={handleOptionChange} />
                        <span className="radio-tile">
                            <span className="radio-icon"></span>
                            <span className="radio-label">Bundesliga</span>
                        </span>
                    </label>
                    <label className='inp'>
                        <input className="radio-input" type="radio" value="Ligue 1" checked={league === 'Ligue 1'} onChange={handleOptionChange} />
                        <span className="radio-tile">
                            <span className="radio-icon"></span>
                            <span className="radio-label">Ligue 1</span>
                        </span>
                    </label>
                    <label className='inp'>
                        <input className="radio-input" type="radio" value="International" checked={league === 'International'} onChange={handleOptionChange} />
                        <span className="radio-tile">
                            <span className="radio-icon"></span>
                            <span className="radio-label">International</span>
                        </span>
                    </label>
                    <label className='inp'>
                        <input className="radio-input" type="radio" value="All" checked={league === 'All'} onChange={handleOptionChange} />
                        <span className="radio-tile">
                            <span className="radio-icon"></span>
                            <span className="radio-label">All</span>
                        </span>
                    </label>
                </div>
                <p className='desc2'><b>How many good you want the team will be?</b></p>
                <form class="rating" onChange={handleRatingChange}>
                <label>
                    <input type="radio" name="stars" value="1" />
                    <span class="icon">★</span>
                </label>
                <label>
                    <input type="radio" name="stars" value="2" />
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                </label>
                <label>
                    <input type="radio" name="stars" value="3" />
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>   
                </label>
                <label>
                    <input type="radio" name="stars" value="4" />
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                </label>
                <label>
                    <input type="radio" name="stars" value="5" />
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                </label>
                </form>
                <button className='buttonletsplay3'  style={{ marginTop: '20px' }}>Let's start</button>
                </form>
            </div>
        </div>
    );
}

export default Stage3;
