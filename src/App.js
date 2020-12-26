import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Page from './components/Page';
import TariffList from './pages/TariffList/index';
import Tariff from './pages/Tariff/index';
import './styles/base.scss';

function App() {

  const getPage = (routeProps, Component) => (
    <Page>
      <Component/>
    </Page>
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={p => getPage(p, TariffList)}/>
          <Route path="/:id" render={p => getPage(p, Tariff)}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
