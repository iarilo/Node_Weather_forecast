/* #!/usr/bin/env node
import { getArgs } from "./helpers/args.js"
 const initCLI = () => {
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
 initCLI();  */









import { getArgs } from './helpers/args.js';
const initCLI = () => {
const arr = getArgs(process.argv);
console.log('ARR',arr);
 if (arr.h) {
   //хэлп
 };
  if (arr.s) {
   //город
  };
  if (arr.t) {
   //токен
  };
  // Погода

}
initCLI();

































