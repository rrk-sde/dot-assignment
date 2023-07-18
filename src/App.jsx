import React, { useState, useEffect } from 'react';

const App = () => {
  const [timeInSeconds, setTimeInSeconds] = useState(5);
  const [percentage, setPercentage] = useState((5 / 60) * 100);

  useEffect(() => {
    setPercentage((timeInSeconds / 60) * 100);
  }, [timeInSeconds]);

  const increaseTimer = () => {
    if (timeInSeconds + 5 <= 60) {
      setTimeInSeconds((prevTime) => prevTime + 5);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ height: '100vh', width: '100vw', textAlign: 'center', margin: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
      <div style={{ backgroundColor: 'white', textAlign: 'center', width: '200px', height: '400px', margin: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 16 }}>

        <p style={{ color: 'black' }}>Routine Starting in ....</p>

        <div style={{ position: 'relative', width: '100px', height: '100px', borderRadius: '50%' }} >
          <div
            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '18px', color: "black" }}
          >
            {formatTime(timeInSeconds)}
          </div>

          <svg
            viewBox="0 0 36 36"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              transform: 'rotate(-90deg)',
            }}
          >
            <circle
              cx="18"
              cy="18"
              r="15.91549430918954"
              fill="transparent"
              stroke="whitesmoke"
              strokeWidth="3"
              strokeDasharray={100}
            />

            <circle
              cx="18"
              cy="18"
              r="15.91549430918954"
              fill="transparent"
              stroke="#324AB2"
              strokeWidth="3"
              strokeDasharray={`${percentage} 100`}
            />
          </svg>
        </div>

        <div style={{ display: 'flex', padding: '0px 24px', justifyContent: 'space-around', width: '100%', fontSize: '12px' }}>
          <button style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', cursor: 'pointer', color: 'blue', padding: '2px 4px', backgroundColor: 'white' }} onClick={increaseTimer}>+ 5 Sec</button>
          <button style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', cursor: 'pointer', color: 'blue', padding: '2px 4px', backgroundColor: 'white' }}>skip</button>
        </div>
      </div>
    </div>
  );
};

export default App;
