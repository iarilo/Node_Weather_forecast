#!/usr/bin/env node
import { getArgs } from "./helpers/args.js"
import { printHelp } from "./services/log.service.js";

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
  }
  // вывести погоду
 };
initCLI(); 











































