import React from 'react';
import store from "../../store";
import {connect} from "react-redux";

class Tariff extends React.Component {

  componentDidMount() {
    console.log(this.props.tariff);
  }

  render() {
    return (
      <div>Тариф {this.props.routeProps.match.params.id}</div>
    );
  }

}

const mapStateToProps = function(store, props) {

  return {
    tariff: store.tariffs.find((tariff) => tariff._id === props.routeProps.match.params.id)
  }
}

export default connect(mapStateToProps)(Tariff);