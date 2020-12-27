import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Page from './components/Page';
import TariffList from './pages/TariffList/index';
import Tariff from './pages/Tariff/index';
import {connect} from "react-redux";
import store from "./store";
import {setTariffs} from "./actions";
import './styles/base.scss';

class App extends React.Component {

  componentDidMount() {
    fetch('/tariff/get',{
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }})
      .then(res => {
        res.json().then(body => {
          if (body.message) {
            alert(body.message);
          } else if (body.tariffs) {
            store.dispatch(setTariffs(body.tariffs));
          }
        });
      })
      .catch(err => {
        alert(err);
      });
  }

  getPage(routeProps, Component) {
    return (
      <Page>
        <Component
          routeProps={routeProps}
        />
      </Page>
    );
  }
  render() {
    const Modal = this.props.modal;

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={p => this.getPage(p, TariffList)}/>
            <Route path="/:id" render={p => this.getPage(p, Tariff)}/>
          </Switch>
        </BrowserRouter>
        { this.props.modalIsOpen &&
        <Modal/>
        }

      </div>
    );
  }

}

const mapStateToProps=function(store) {
  return {
    modalIsOpen: store.modalWindow.isOpen,
    modal: store.modalWindow.modal,
  }
}

export default connect(mapStateToProps)(App);
