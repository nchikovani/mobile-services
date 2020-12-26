import React from 'react';
import {useState} from 'react';
import './style.scss';
import ModalWindow from '../index';
import store from "../../../store";
import {closeModal} from "../../../actions";

function CreateTariff() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');

  const createTariff = () => {
    if (isNaN(cost)) {
      alert("Неверный формат стоимости.")
      return;
    }
    fetch('/tariff/create',{
      method: "POST",
      body:  JSON.stringify({
        name,
        description,
        cost,
      }),
      headers: {
        'Content-Type': 'application/json',
      }})
      .then(res => {
        res.json().then(body => {
          if (body.message) {
            alert(body.message);
          } else if (body.tariff) {
            console.log(body.tariff);
          }
          store.dispatch(closeModal());
        });
      })
      .catch(err => {
        alert(err);
        store.dispatch(closeModal());
      });
  }
  return (
    <ModalWindow
      title="Новый тариф"
      onClick={createTariff}
    >
      <div className="create-tariff__body">
        <input
          className="input"
          placeholder="Название"
          type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <input
          className="input"
          placeholder="Описание"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="input"
          placeholder="Стоимость"
          type="text"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
      </div>
    </ModalWindow>
  );
}

export default CreateTariff;