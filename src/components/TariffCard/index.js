import React from 'react';
import Card from '../Card';
import './style.scss';
import store from "../../store";
import {setTariffs} from "../../actions";

function TariffCard({tariff}) {
  const deleteTariff = (id) => {
    fetch('/tariff/delete',{
      method: "DELETE",
      body:  JSON.stringify({
        id: id,
      }),
      headers: {
        'Content-Type': 'application/json',
      }})
      .then(res => {
        res.json().then(body => {
          if (body.message) {
            alert(body.message);
          } else if (body.tariffs) {
            store.dispatch(setTariffs(body.tariffs))
          }
        });
      })
      .catch(err => {
        alert(err);
      });
  };

  return (
    <Card>
      <div className="tariff-card">
        <div className="tariff-card__body">
          <h2 className="tariff-card__name">{tariff.name}</h2>
          <p className="tariff-card__description">{tariff.description}</p>
          <div className="tariff-card__dates">
            <span className="tariff-card__date-creation">Дата создания: {tariff.dateOfCreation}</span>
            <span className="tariff-card__date-change">Дата изменения: {tariff.dateOfChange}</span>
          </div>
        </div>
        <div className="tariff-card__button-group">
          <button
            className="button"
            onClick={() => deleteTariff(tariff._id)}
          >Удалить</button>
        </div>
      </div>
    </Card>
  )
}

export default TariffCard;