/* 
// os homedir получаю домашнюю дерикторию
// path Добавить название файла
import {homedir} from 'os';
import { join, basename, dirname, extname, relative,isAbsolute,resolve,sep} from 'path';

// join из 2-ух строк делает путь  // C:\Users\weather-data-json
const filePath =  join(homedir() , 'weather-data.json' );
console.log('filePath: ', filePath);

const saveKeyValue = (key,value) => {

  //Дом директория  //C:\Users\pc
  console.log('homedir: ',homedir());

  //Путь к файлу  //C:\Users\weather-data-json
  console.log('join: ', join(homedir(), 'weather-data.json'));

  // Вложение последней папки // C:\Users\pc далее //weather-data.json
  console.log('basename: ',basename(filePath));

  //Где находиться указанный в строке путь //C:\Users\pc
  console.log('dirname: ',dirname(filePath));

  //  .json// .json
  console.log('extname: ', extname(filePath));

    //Один путь относительно второго(../)  // ..
  console.log( relative( filePath, dirname(filePath) ) );

  //Если путь абсолютный true; Если нет false  // isAbsolute:  true
  console.log('isAbsolute: ',isAbsolute(filePath));

  //Можно сделать какие то шаги "шаг назад"  //  D:\
  console.log('resolve: ', resolve('..'));

  // Текущий сепаратор // Sep \
  console.log('Sep',sep);

 };

export {saveKeyValue} */

               // ------------------------------------------- //

// os homedir получаю домашнюю дерикторию
// path Добавить название файла
import { homedir } from 'os';
import { join, } from 'path';
import { promises } from 'fs';


// join из 2-ух строк делает путь  // C:\Users\weather-data-json
// ПУТЬ ФАЙЛА в который будит всё сохроняться
const filePath = join(homedir(), 'weather-data.json');
//console.log('filePath: ', filePath);

// Функция создаёт ключ : значение 
const saveKeyValue = async (key, value) => {
  // Key token :  Value 357
  let data = {};
  // Делаю проверку.Если файл существует то сначало его надо выкачать положить в data, а за тем добавить или модефицировать в  data[key]= value;
  //
  if (await isExist(filePath)) {
    //promises.readFile    Асинхронно считывает все содержимое файла.
    const file = await promises.readFile(filePath);
    //JSON.parse(file)   Возвращает объект Object, соответствующий переданной строке JSON text.
    data = JSON.parse(file);
    //Data { token: '357', Token: '789' }
  }

  data[key] = value;
  //  promises.writeFile Асинхронно записывает данные в файл, заменяя файл, если он уже существует.
  //преобразует значение JavaScript в строку JSON,
  // указываю await потому что это promises(который использует асинхронные события)
  await promises.writeFile(filePath, JSON.stringify(data));

};
//--------------------------------------------------
// Функция получения valu
const getKeyValue = async (key) => {
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    const data = JSON.parse(file);
    //console.log('Data: ',data[key]);
    return data[key];
  }
  return undefined;
};

//--------------------------------------------------

// Функция проверяет что файл существует 
const isExist = async (path) => {
  //async PATH C: \Users\pc\weather - data.json
  try {
    //Проверяю что файл существует
    // stat(path);возвращает статистику по файлу, а если его нет то false;.
    await promises.stat(path);
    //console.log('STAT', promises.stat(path) );
    return true;
  } catch (e) {
    return false;
  }
};
export { saveKeyValue, getKeyValue }






