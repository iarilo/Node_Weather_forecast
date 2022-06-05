
/* import { TOKEN_DICTIONARY, getKeyValue } from './storage.service.js';
 import axios from 'axios';
 import https from 'https'; */

/* // Записываю в переменную token API ключь, который получаю из функ.  getKeyValue. Функ. getKeyValue получает данные которые записываються после -t.
const token = await getKeyValue(TOKEN_DICTIONARY.token);

//В функ. getCoord формирую http строку в которой получаю широту и долготу города который приходит в аргум.
const getCoord = async (city) => {
  // Делаю проверку и если token API ключь отсутствует то тогда в throw new Error указываю что нужен ключь.
    if (!token) {
    throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]')
  };
 //  получаю развёрнутый массив data из  созданной http строки, которую создал с помощью  axios и get(1-й аргум. строка, 2-й аргум объект, в котором полю  params присваиваю объектс полем   q:city,и  appid: token    )
   const { data }  = await axios.get('http://api.openweathermap.org/geo/1.0/direct',{
  params:{
       q:city,
   appid: token 
  }
 }); 
  //Диструктурированным способом, из нулевого элем. массива data получаю lat(ширену) и lon (долготу).Затем помещаю ширену и долготу в аргум. функ.getWeather()
  const { lat,lon } = data[0];
   getWeather(lat,lon)
};

   const getWeather =  (lat,lon) =>{
 // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`

 // Формирую https: строку для получения массива данных по городу.

 //URLSearchParams Получает  объект, представляющий параметры запроса URL-адреса.
 // Метод append()интерфейса URLSearchParams добавляет указанную пару ключ/значение в качестве нового параметра поиска.

 //В переменную url с помощью конструктора new URL помещаю https: строку.
 //В переменной url с помощью метода searchParams и метода append( ключь'lat', и ширену lat); и т.д 'lon','appid','units','lang'.

  const url = new URL('https://api.openweathermap.org/data/2.5/weather')
  url.searchParams.append('lat',lat);
  url.searchParams.append('lon', lon)
  url.searchParams.append('appid',token);
  url.searchParams.append('units', 'metric' );
  url.searchParams.append('lang', 'ru');
 
 // С помощью метода https и get, где 1-ым аргум. переменная url,а 2-ой функ. с  аргум. response(Который является массивом https строки ). Создаю переменную let res с пустой строкой.
 //Аргументу response присваиваю слушатель on , у которого 1-ый аргум.'data', а 2-ой функ., в аргумм. chunk (https: строка записанная машинным кождом).
 // В строку res  конкатенирую chunk.

 https.get(url,(response)=>{
    
let res = " ";
response.on('data',(chunk)=>{
res += chunk;
});

 //Аргументу response присваиваю слушатель on , у которого 1-ый аргум.'end', а 2-ой функ., в консоль вывожу строку res.

response.on('end', ()=> {
console.log(res);
  });
 }); 

};
 
export { getCoord }  */

//---------------------------------------------------------
 
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';
import axios from 'axios';

const token = await getKeyValue(TOKEN_DICTIONARY.token);

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
  //  name: 'Chișinău Municipality',
  //const { lat, lon } = data[0];
  //-------------------------
  //  name: 'Кишинёв',
  const { lat, lon } = data.coord;
  getWeather(lat, lon)

};

const getWeather = async (lat, lon) => {
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
export { getCoord }; 









































