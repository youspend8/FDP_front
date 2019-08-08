import React from 'react';
import { Route, Router } from 'react-router';
import Main from './components/Main';
import Msrstn from './components/msrstn/Msrstn';
import Unity from './components/unity/Unity';
import Ctprvn from './components/ctprvn/Ctprvn';

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Main} />
      <Route exact path="/getMsrstnAcctoRltmMesureDnsty" component={Msrstn} />
      <Route exact path="/getUnityAirEnvrnIdexSnstiveAboveMsrstnList" component={Unity} />
      <Route exact path="/getCtprvnRltmMesureDnsty" component={Ctprvn} />
    </div>
  );
}

export default App;
