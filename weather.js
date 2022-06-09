#!/usr/bin/env node
  import { getArgs } from "./helpers/args.js"
import { printHelp, printSuccess, printError, printWeather } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY, getKeyValue } from "./services/storage.service.js";
//import { getWeather } from "./services/api.service.js";
import { getWeather, getIcon } from "./services/api.service.js"; 


 // Вывод в консоль и логика ошибок
const saveToken = async (token) => {

if (!token.length) {
  printError('Не передан tocen')
}
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess('Токен сохранён')    
  } catch (e) {
    printError(e.message)
  }
};


const saveCity = async (city) => {

  if (!city.length) {
    printError('Не передан город')
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess('Город сохранён')
  } catch (e) {
    printError(e.message)
  }
};




const getForcase = async() =>{
  try {
    //const weather = await getWeather(process.env.CITY);
    const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city)
    const weather = await getWeather(city);
    printWeather(weather, getIcon(weather.weather[0].icon ));

  } catch (e) {
     if (e?.response?.status == 404) { 
     printError("Не верно указан город") 
    }else if(e?.response?.status == 401){
      printError("Не верно указан ключь")
    } printError(e.message);
  };
 };


const initCLI = () => {
  const args = getArgs(process.argv);
  //console.log(process.env);
  //console.log('Args CLT',args);
  if (args.h) {
    return printHelp();
  }
  if (args.s) {
    return saveCity(args.s)
    //Сохранить город
  }
  if (args.t) {
    //сохранить токен 
    return saveToken(args.t)
  }
     //getWeather('Chisinau')
    //getCoord('Chisinau')
   // вывести погоду
  return  getForcase()
};
initCLI();  










//--------------------------------------------
/* 
 const sleep = async (timer) => {
  return new Promise((resolve, reject) => {
    if (timer < 500) {
      reject('Слишком мало сна')
    }
    setTimeout(() => { resolve(`Поспал ${timer}`) }, timer);
  });
}

const sleepSessyon = async () =>{
 try {
     const slip500 = await sleep(500);
     console.log(slip500);
     const slip1500 = await sleep(1500)
   console.log(slip1500);
   const slip700 = await sleep(700)
   console.log(slip700);
   const slip1000 = await sleep(1000)
   console.log(slip1000);
   const slip5 = await sleep(100)
  
 } catch (err) {
   console.log("Ошибка", err);
 }

}

sleepSessyon()  */









































