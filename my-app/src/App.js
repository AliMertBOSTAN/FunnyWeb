import './App.css';
import React, { useState } from 'react';

function App() {
  const [isShown, setIsShown] = useState(true);
  
  return (
    <div className="App">
      <div onMouseEnter={() => setIsShown(true)} className='textSoru'>
      <a>You can't touch the red button</a>
      </div>
      <div className='buttonBox'>
      <button className='buttonEvet'
       onMouseEnter={() => setIsShown(true)} onClick={ () => { alert('that`s green button')}}>Green Button</button>
      {isShown && (<button className='buttonHayır' 
        onMouseEnter={() => setIsShown(false)}
        onMouseLeave={() => setIsShown(true)}>Red Button</button> 
        )}
      </div>
    </div>
  );
}

export default App;
