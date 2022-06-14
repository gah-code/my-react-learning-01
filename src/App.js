import React, { useState, useCallback } from 'react';

import DemoOutput from './components/Demo/Demo';
import Button from './components/Button';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle! </Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph! </Button>
    </div>
  );
}

export default App;

// Window.localStorage:
// Allows one to access a Storage object for the Document's origin; the stored data is saved across browser sessions.
