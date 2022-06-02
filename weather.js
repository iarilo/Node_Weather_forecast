#!/usr/bin/env node
import { getArgs } from "./helpers/args.js"
import { printHelp, printSuccess, printError } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

// Вывод в консоль и логика ошибок
const saveToken = async (tocen) => {

  try {
    await saveKeyValue('token', tocen);
    printSuccess('Токен сохранён')
  } catch (e) {
    printError(e.message)
  }

};

const initCLI = () => {
  const args = getArgs(process.argv);
  //console.log('Args CLT',args);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    //Сохранить город
  }
  if (args.t) {
    //сохранить токен 
    return saveToken(args.t)

  }
  // вывести погоду
};
initCLI();



/* const sleep = async (timer) => {
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

sleepSessyon() */









































