import React from 'react';
import Card from '../../components/Card';
import TariffCard from "../../components/TariffCard";
import './style.scss';


function TariffList() {
  const arr=[0, 1, 2];
  const newTariff = ()=>{ console.log('преветь')};
  return (
    <div className="tariff-list">
      <Card
        onClick={newTariff}
      >
        <div className="create-tariff">
          <h2>Cоздать тариф</h2>
        </div>
      </Card>
      {
        arr.map((tariff)=> (
          <TariffCard
            name="Название"
            description="Описание описание "
            dateCreation="24.12.2020"
            dateChange="24.12.2020"
            id={1}
            key={tariff}
          />
        ))
      }
    </div>
  )
}
export default TariffList;