#!/usr/bin/env node
import { getArgs } from "./helpers/args.js"

const initCLI = () => {
  
  //process.argvвозвращает массив, содержащий аргументы командной строки, переданные при запуске процесса Node.js. 
 
 const args = getArgs(process.argv);
  console.log('Args CLT',args);
 if (args.h) {
   //Выводим help
 }

  if (args.s) {
    //Сохранить город
  }

  if (args.t) {
    //сохранить токен 
  }

  // вывести погоду

  


};
 initCLI(); 

