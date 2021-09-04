import axios from 'axios';
import React,{useState} from 'react';

import CityInfoContainer from "./Components/CityInfoContainer";
import HeaderPage from "./Components/HeaderPage";

function App() {

  const [city,setCity] = useState();
  const [loading, setLoading] = useState(false);

  const searchCity = (name) => {
    setLoading(true);
    axios.get(`https://api.hgbrasil.com/weather?format=json-cors&key=2792ae00&city_name=${name}`)
      .then(res => {
        setCity(res.data.results);
        setLoading(false);
      }).catch(()=> {
        setCity();
        setLoading(false);
        alert('Cidade não encontrada');
      })
      setLoading(false);
  }

  return (
    <>
      <HeaderPage searchCity={searchCity} />
      {
        loading ? <p>Carregando...</p> : (
          city ?  <CityInfoContainer city={city} /> : null
        )
       
      }
     
    </>
  );
}

export default App;
