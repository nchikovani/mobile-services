import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Page from './components/Page';
import TariffList from './pages/TariffList/index';
import Tariff from './pages/Tariff/index';
import {connect} from "react-redux";
import './styles/base.scss';

function App(props) {
  const Modal = props.modal;
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
      { props.modalIsOpen &&
        <Modal/>
      }

    </div>
  );
}

const mapStateToProps=function(store) {
  return {
    modalIsOpen: store.modalWindow.isOpen,
    modal: store.modalWindow.modal,
  }
}

export default connect(mapStateToProps)(App);
