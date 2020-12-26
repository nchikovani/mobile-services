import React from 'react';
import {useState} from 'react';
import './style.scss';
import ModalWindow from '../index';

function CreateTariff() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');
  const createTariff = () => {

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