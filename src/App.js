import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import TariffList from './pages/TariffList';
import Tariff from './pages/Tariff';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <TariffList/>
          </Route>
          <Route exact path="/:id">
            <Tariff/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
