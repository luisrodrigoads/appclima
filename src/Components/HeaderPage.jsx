import { useState } from 'react';
import '../styles/headerStyle.css';

export default function HeaderPage (props) {

    const [nameCity, setNameCity] =  useState('');

    const handleCity = () => {
        nameCity ? props.searchCity(nameCity) 
        : alert('Insira o nome da cidade')
    }

    return(
        <header className="header-page">
            <div className="content-header">
                <p>Clima App</p>
                <div className="input-container">
                    <input value={nameCity} onChange={(e) => setNameCity(e.target.value)} type="text" placeholder="Nome da cidade" />
                    <button onClick={() => handleCity()} >
                        Pesquisar
                    </button>
                </div>
            </div>
        </header>
    );
}