import React from 'react';
import Card from '../Card';
import './style.scss';

function TariffCard({name, description, dateCreation, dateChange}) {

  return (
    <Card>
      <div className="tariff-card">
        <div className="tariff-card__body">
          <h2 className="tariff-card__name">{name}</h2>
          <p className="tariff-card__description">{description}</p>
          <div className="tariff-card__dates">
            <span className="tariff-card__date-creation">Дата создания: {dateCreation}</span>
            <span className="tariff-card__date-change">Дата изменения: {dateChange}</span>
          </div>
        </div>
        <div className="tariff-card__button-group">
          <button className="button">Удалить</button>
        </div>
      </div>
    </Card>
  )
}

export default TariffCard;