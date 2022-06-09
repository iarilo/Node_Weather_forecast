
/*
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';
import axios from 'axios';

const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);

 const getCoord = async (city) => {
    if (!token) {
   throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]');
 };
 // ' name: 'Chișinău Municipality',
 //const { data } = await axios.get('http://api.openweathermap.org/geo/1.0/direct', {
   //---------------------
//  name: 'Кишинёв',
  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
   params: { 
     q: city,
     appid: token,
     
   }
 });
   //name: 'Chișinău Municipality',
   //const { lat, lon } = data[0];
 //-------------------------
 //  name: 'Кишинёв',
  const { lat, lon } = data.coord;
   getWeather(lat, lon) 
}; 

const getWeather = async (lat,lon) => {
 if (!token) {
   throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]');
 };
 const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
   params: {
     lat: lat,
     lon: lon,
     appid: token,
     units: 'metric',
     lang: 'ru'
   }
 });
 console.log(data);
 return data;
}
export {  getCoord,  getWeather };  */

//---------------------------------------------------------


 import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';
import axios from 'axios';

const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);

const getIcon = (icon) => {
switch(icon.slice(0,-1)){
case '01':
  return'Солнечно';
  case '02':
    return 'Солнечно с прояснением';
  case '03':
    return 'Облачно';
  case '04':
    return 'Сильно облачно';
  case '09':
    return 'Гроза';
  case '10':
    return ' дождь';
  case '11':
    return 'Моросящий дождь';
  case '13':
    return 'Снег';
  case '50':
    return 'Туман';
 }
};

const getWeather = async (city) => {
  if (!token) {
    throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]');
  };
  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      appid: token,
      units: 'metric',
      lang: 'ru'
    }
  });
  //console.log(data);
  return data;
}
export { getWeather, getIcon };   








































