import React from 'react';
import PageOne from './Pages/compound-components/PageOne';
import PageTwo from './Pages/control-props-pattern/PageTwo';
import PageThree from './Pages/custom-hook-pattern/PageThree';
import PageFour from './Pages/props-getters-pattern/PageFour';
import './App.css';

function App() {
  return (
    <div className='App'>
      {/* <PageOne /> */}
      {/* <PageTwo /> */}
      {/* <PageThree /> */}
      <PageFour />
    </div>
  );
}

export default App;
